import { personaggioValido } from '../web/grafica/omino.js';

export const MAX_GIOCATORI = 16;
export const LUNGHEZZA_MASSIMA_NOME = 16;
export const LUOGHI = Object.freeze(['fuori', 'dentro', 'bocce', 'sarpom', 'edicola', 'trasferta', 'chiesa', 'vetri', 'viale', 'biblioteca', 'kebab', 'segreti', 'bellotti', 'arco', 'tasso', 'cena', 'ferragosto', 'casetta', 'hotel', 'parrucchiere', 'ballata']);
export const EVENTI = Object.freeze(['bomba', 'nucleare', 'giro-chiamata', 'giro-iscritto', 'giro-arrivo']);
export const MEZZI = Object.freeze(['vespa', 'kisbee', 'aerox', 'repsol', 'ape']);
export const TEMPO_MASSIMO_GIRO = 3600;
const LIMITE_COORDINATA = 5000;
const NOME_VALIDO = /^[\p{L}\p{N} _.'-]+$/u;

export function creaStanza() {
  return { giocatori: new Map(), prossimoId: 1 };
}

export function entra(stanza, messaggio) {
  const nome = typeof messaggio?.nome === 'string' ? messaggio.nome.trim() : '';
  if (nome.length === 0 || nome.length > LUNGHEZZA_MASSIMA_NOME || !NOME_VALIDO.test(nome)) {
    return { errore: `Il nome deve avere da 1 a ${LUNGHEZZA_MASSIMA_NOME} caratteri fra lettere, numeri e spazi.` };
  }
  if (!personaggioValido(messaggio.personaggio)) return { errore: 'Personaggio sconosciuto.' };
  if (stanza.giocatori.size >= MAX_GIOCATORI) return { errore: `Cerano è piena: massimo ${MAX_GIOCATORI} giocatori.` };
  const minuscolo = nome.toLowerCase();
  if ([...stanza.giocatori.values()].some((g) => g.nome.toLowerCase() === minuscolo)) {
    return { errore: `Il nome "${nome}" è già in gioco: scegline un altro.` };
  }
  const giocatore = { id: stanza.prossimoId++, nome, personaggio: messaggio.personaggio, x: 0, y: 0, luogo: 'fuori', pronto: false };
  stanza.giocatori.set(giocatore.id, giocatore);
  return { giocatore };
}

export function aggiornaPosizione(stanza, id, messaggio) {
  const g = stanza.giocatori.get(id);
  if (!g) return false;
  const { x, y, luogo, mezzo, angolo } = messaggio ?? {};
  if (!Number.isFinite(x) || !Number.isFinite(y) || Math.abs(x) > LIMITE_COORDINATA || Math.abs(y) > LIMITE_COORDINATA) return false;
  if (!LUOGHI.includes(luogo)) return false;
  g.x = x;
  g.y = y;
  g.luogo = luogo;
  g.mezzo = MEZZI.includes(mezzo) ? mezzo : null;
  g.angolo = g.mezzo && Number.isFinite(angolo) ? angolo : 0;
  g.pronto = true;
  return true;
}

export function esci(stanza, id) {
  return stanza.giocatori.delete(id);
}

export function eventoValido(messaggio) {
  if (!EVENTI.includes(messaggio?.tipo)) return false;
  if (messaggio.tipo !== 'giro-arrivo') return true;
  return Number.isFinite(messaggio.tempo) && messaggio.tempo > 0 && messaggio.tempo < TEMPO_MASSIMO_GIRO;
}

export function datiEvento(messaggio) {
  return messaggio.tipo === 'giro-arrivo' ? { tempo: messaggio.tempo } : {};
}

export function istantanea(stanza) {
  return [...stanza.giocatori.values()]
    .filter((g) => g.pronto)
    .map(({ id, nome, personaggio, x, y, luogo, mezzo, angolo }) => ({ id, nome, personaggio, x: Math.round(x * 100) / 100, y: Math.round(y * 100) / 100, luogo, mezzo: mezzo ?? null, angolo: Math.round((angolo ?? 0) * 100) / 100 }));
}
