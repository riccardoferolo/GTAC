import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, extname, join, normalize, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { WebSocketServer } from 'ws';
import QRCode from 'qrcode';
import { indirizziRete } from './rete.js';
import { creaStanza, entra, aggiornaPosizione, esci, eventoValido, datiEvento, istantanea } from './stanza.js';

const RADICE = join(dirname(fileURLToPath(import.meta.url)), '..');
const CARTELLA_STATICA = join(RADICE, 'dist');
const PORTA_PREDEFINITA = 4400;
const INTERVALLO_INVIO_MS = 50;
const DIMENSIONE_MASSIMA_MESSAGGIO = 4096;
const TIPI = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.bin': 'application/octet-stream',
  '.svg': 'image/svg+xml',
};

function leggiPorta() {
  const daAmbiente = Number(process.env.PORTA ?? process.env.PORT);
  if (Number.isInteger(daAmbiente) && daAmbiente > 0) return daAmbiente;
  const file = join(RADICE, '.env');
  if (!existsSync(file)) return PORTA_PREDEFINITA;
  const riga = readFileSync(file, 'utf8').split(/\r?\n/).find((r) => r.startsWith('PORTA='));
  const valore = Number(riga?.slice('PORTA='.length));
  return Number.isInteger(valore) && valore > 0 ? valore : PORTA_PREDEFINITA;
}

async function invito(richiesta, risposta) {
  const candidati = indirizziRete();
  const richiesto = new URL(richiesta.url, 'http://x').searchParams.get('indirizzo');
  const scelto = candidati.find((c) => c.indirizzo === richiesto)?.indirizzo ?? candidati[0]?.indirizzo ?? 'localhost';
  const url = `http://${scelto}:${porta}`;
  const qr = await QRCode.toString(url, { type: 'svg', margin: 1, color: { dark: '#1c2a20', light: '#ffffff' } });
  risposta.writeHead(200, { 'Content-Type': TIPI['.json'], 'Cache-Control': 'no-store' }).end(JSON.stringify({ url, qr, indirizzo: scelto, candidati, porta }));
}

async function servi(richiesta, risposta) {
  const percorso = decodeURIComponent(new URL(richiesta.url, 'http://x').pathname);
  if (percorso === '/api/invito') return invito(richiesta, risposta);
  const relativo = percorso === '/' ? 'index.html' : percorso.slice(1);
  const completo = normalize(join(CARTELLA_STATICA, relativo));
  if (!completo.startsWith(CARTELLA_STATICA + sep) && completo !== CARTELLA_STATICA) {
    risposta.writeHead(403).end();
    return;
  }
  try {
    if (!(await stat(completo)).isFile()) throw new Error('non è un file');
    const contenuto = await readFile(completo);
    risposta.writeHead(200, { 'Content-Type': TIPI[extname(completo)] ?? 'application/octet-stream' }).end(contenuto);
  } catch {
    risposta.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Non trovato. Hai lanciato "npm run build"?');
  }
}

const stanza = creaStanza();
const server = createServer((req, res) => {
  servi(req, res).catch((errore) => {
    console.error('Errore nel servire', req.url, errore);
    res.writeHead(500).end();
  });
});
const wss = new WebSocketServer({ server, path: '/ws', maxPayload: DIMENSIONE_MASSIMA_MESSAGGIO });

function invia(socket, messaggio) {
  if (socket.readyState === socket.OPEN) socket.send(JSON.stringify(messaggio));
}

function aTutti(messaggio) {
  const testo = JSON.stringify(messaggio);
  for (const client of wss.clients) if (client.readyState === client.OPEN && client.idGiocatore) client.send(testo);
}

wss.on('connection', (socket) => {
  socket.on('message', (dati) => {
    let messaggio;
    try {
      messaggio = JSON.parse(dati.toString());
    } catch {
      console.warn('Messaggio non JSON scartato');
      return;
    }
    if (messaggio?.t === 'entra' && !socket.idGiocatore) {
      const esito = entra(stanza, messaggio);
      if (esito.errore) {
        invia(socket, { t: 'errore', messaggio: esito.errore });
        return;
      }
      socket.idGiocatore = esito.giocatore.id;
      invia(socket, { t: 'benvenuto', id: esito.giocatore.id });
      aTutti({ t: 'avviso', testo: `${esito.giocatore.nome} è arrivato a Cerano` });
      console.log(`Entrato ${esito.giocatore.nome} (${stanza.giocatori.size} in gioco)`);
      return;
    }
    if (!socket.idGiocatore) return;
    if (messaggio?.t === 'posizione') aggiornaPosizione(stanza, socket.idGiocatore, messaggio);
    else if (messaggio?.t === 'evento' && eventoValido(messaggio)) {
      const autore = stanza.giocatori.get(socket.idGiocatore);
      aTutti({ t: 'evento', tipo: messaggio.tipo, da: socket.idGiocatore, nome: autore?.nome ?? '', ...datiEvento(messaggio) });
    }
  });
  socket.on('close', () => {
    if (!socket.idGiocatore) return;
    const giocatore = stanza.giocatori.get(socket.idGiocatore);
    esci(stanza, socket.idGiocatore);
    if (giocatore) aTutti({ t: 'avviso', testo: `${giocatore.nome} ha lasciato Cerano` });
  });
});

setInterval(() => aTutti({ t: 'stato', giocatori: istantanea(stanza) }), INTERVALLO_INVIO_MS);

const porta = leggiPorta();
server.listen(porta, '0.0.0.0', () => {
  console.log(`GTA Cerano in ascolto su http://localhost:${porta}`);
  for (const c of indirizziRete()) console.log(`  per gli amici:  http://${c.indirizzo}:${porta}   (${c.scheda})`);
  console.log(`\n  Se un amico non apre la pagina, quasi sempre e' il firewall di Windows.\n  Da un terminale come amministratore, una volta sola:\n    netsh advfirewall firewall add rule name="GTA Cerano" dir=in action=allow protocol=TCP localport=${porta}\n`);
});
