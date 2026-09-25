const VOLTO = Object.freeze({
  4: '..KSSSSSSSSK..',
  5: '..KSKSSSSKSK..',
  6: '..KSSSSSSSSK..',
  7: '...KSSSSSSK...',
});

const TESTA_CORTA = Object.freeze({ 0: '....KKKKKK....', 1: '...KRRRRRRK...', 2: '..KRRRRRRRRK..', 3: '..KRRRRRRRRK..' });

export const CAPELLI = Object.freeze([
  { id: 'corti', nome: 'Corti', righe: TESTA_CORTA },
  { id: 'fascia', nome: 'Con fascia', righe: { ...TESTA_CORTA, 3: '..KFFFFFFFFKK.' } },
  { id: 'lunghi', nome: 'Lunghi', righe: { ...TESTA_CORTA, 5: '.KRSKSSSSKSRK.', 6: '.KRSSSSSSSSRK.', 7: '.KRRKSSSSKRRK.' } },
  { id: 'caschetto', nome: 'Caschetto', righe: { 0: '...KKKKKKKK...', 1: '..KRRRRRRRRK..', 2: '.KRRRRRRRRRRK.', 3: '.KRRRRRRRRRRK.', 4: '.KRRRRRRRRRRK.', 5: '.KRSKSSSSKSRK.', 6: '.KRSSSSSSSSRK.' } },
  { id: 'ricci', nome: 'Ricci', righe: { 0: '...K.KKKK.K...', 1: '..KRKRRRRKRK..', 2: '.KRRRRRRRRRRK.', 3: '.KRRRRRRRRRRK.', 4: '.KRKSSSSSSKRK.' } },
  { id: 'cresta', nome: 'Cresta', righe: { 0: '.....KKKK.....', 1: '....KRRRRK....', 2: '..KKSRRRRSKK..', 3: '..KSSSSSSSSK..' } },
  { id: 'radi', nome: 'Radi', righe: { 0: '....KKKKKK....', 1: '...KSSRSSSK...', 2: '..KSSSSSSRSK..', 3: '..KRSSSSSSRK..' } },
  { id: 'pelato', nome: 'Pelato', righe: { 0: '..............', 1: '....KKKKKK....', 2: '...KSSSSSSK...', 3: '..KSSSSSSSSK..' } },
  { id: 'cappellino', nome: 'Cappellino', righe: { 0: '....KKKKKK....', 1: '...KCCCCCCK...', 2: '..KCCCCCCCCK..', 3: '..KCCCCCCCCCCK' } },
]);

export const FACCE = Object.freeze([
  { id: 'liscia', nome: 'Pulita', interno: {} },
  { id: 'baffi', nome: 'Baffi', interno: { 6: 'SSRRRRSS' } },
  { id: 'pizzetto', nome: 'Pizzetto', interno: { 7: 'KSSRRSSK' } },
  { id: 'barba', nome: 'Barba', interno: { 6: 'RSSSSSSR', 7: 'KRRRRRRK' } },
  { id: 'occhiali', nome: 'Occhiali', interno: { 5: 'OOOKKOOO' } },
  { id: 'occhiali-barba', nome: 'Occhiali e barba', interno: { 5: 'OOOKKOOO', 6: 'RSSSSSSR', 7: 'KRRRRRRK' } },
]);

export const MAGLIE = Object.freeze([
  { id: 'maglietta', nome: 'Maglietta', righe: ['..KBBBBBBBBK..', '.KSBBBBBBBBSK.', '.KSBBBWWBBBSK.', '.KKBBBBBBBBKK.', '..KBBBBBBBBK..'] },
  { id: 'strisce', nome: 'A strisce', righe: ['..KBWBWBWBWK..', '.KSBWBWBWBWSK.', '.KSBWBWBWBWSK.', '.KKBWBWBWBWKK.', '..KBWBWBWBWK..'] },
  { id: 'canotta', nome: 'Canotta', righe: ['..KSBBBBBBSK..', '.KSKBBBBBBKSK.', '.KSKBBBBBBKSK.', '.KKKBBBBBBKKK.', '..KBBBBBBBBK..'] },
  { id: 'camicia', nome: 'Camicia', righe: ['..KBBBWWBBBK..', '.KSBBBWBBBBSK.', '.KSBBBWBBBBSK.', '.KKBBBWBBBBKK.', '..KBBBWBBBBK..'] },
  { id: 'felpa', nome: 'Felpa', righe: ['..KBBBWWBBBK..', '.KBBBBBBBBBBK.', '.KBBBBBBBBBBK.', '.KSBWWWWWWBSK.', '..KBBBBBBBBK..'] },
  { id: 'giacca', nome: 'Giacca aperta', righe: ['..KBBWWWWBBK..', '.KBBBWWWWBBBK.', '.KBBBWWWWBBBK.', '.KSBBWWWWBBSK.', '..KBBWWWWBBK..'] },
]);

export const GAMBE = Object.freeze([
  { id: 'pantaloni', nome: 'Pantaloni', righe: ['..KNNNNNNNNK..', '..KNNNKKNNNK..', '..KNNK..KNNK..', '..KDDK..KDDK..', '..KKKK..KKKK..'] },
  { id: 'bermuda', nome: 'Bermuda', righe: ['..KNNNNNNNNK..', '..KNNNKKNNNK..', '..KSSK..KSSK..', '..KDDK..KDDK..', '..KKKK..KKKK..'] },
  { id: 'gonna', nome: 'Gonna', righe: ['..KNNNNNNNNK..', '.KNNNNNNNNNNK.', '..KSSK..KSSK..', '..KDDK..KDDK..', '..KKKK..KKKK..'] },
]);

export const PELLI = Object.freeze(['#facea4', '#f0b88a', '#d8a070', '#b07850', '#7a4a2a', '#4a2c18']);
export const TINTE_CAPELLI = Object.freeze(['#1a1414', '#3a2414', '#6a3a1a', '#8a4a26', '#c89a3a', '#e8c060', '#f0d890', '#c84a2a', '#c8c8c8', '#f4f4f0', '#2a6ad8', '#d83a8a']);
export const TINTE_VESTITI = Object.freeze(['#d82a2a', '#e8782a', '#e0b020', '#3a9a3a', '#1f8f8a', '#3260d2', '#1a4ab8', '#6a2ab8', '#e0588c', '#fafafa', '#b0b0b8', '#5a5a64', '#1e1e22', '#6e4628', '#3a5a9a', '#282c40']);

export const CAMPI = Object.freeze([
  { chiave: 'capelli', nome: 'Capelli', tipo: 'forma', voci: CAPELLI },
  { chiave: 'coloreCapelli', nome: 'Colore capelli', tipo: 'colore', voci: TINTE_CAPELLI },
  { chiave: 'faccia', nome: 'Faccia', tipo: 'forma', voci: FACCE },
  { chiave: 'pelle', nome: 'Pelle', tipo: 'colore', voci: PELLI },
  { chiave: 'maglia', nome: 'Maglia', tipo: 'forma', voci: MAGLIE },
  { chiave: 'coloreMaglia', nome: 'Colore maglia', tipo: 'colore', voci: TINTE_VESTITI },
  { chiave: 'coloreDettaglio', nome: 'Dettagli maglia', tipo: 'colore', voci: TINTE_VESTITI },
  { chiave: 'gambe', nome: 'Gambe', tipo: 'forma', voci: GAMBE },
  { chiave: 'colorePantaloni', nome: 'Colore pantaloni', tipo: 'colore', voci: TINTE_VESTITI },
  { chiave: 'coloreScarpe', nome: 'Scarpe', tipo: 'colore', voci: TINTE_VESTITI },
  { chiave: 'coloreAccessorio', nome: 'Cappello, fascia, occhiali', tipo: 'colore', voci: TINTE_VESTITI },
]);

export const ASPETTO_INIZIALE = Object.freeze({
  capelli: 0, coloreCapelli: 1, faccia: 0, pelle: 0, maglia: 0, coloreMaglia: 0,
  coloreDettaglio: 9, gambe: 0, colorePantaloni: 15, coloreScarpe: 13, coloreAccessorio: 12,
});

const PREFISSO = 'c1';
const FORMATO = new RegExp(`^${PREFISSO}[0-9a-z]{${CAMPI.length}}$`);

export function codificaAspetto(aspetto) {
  return PREFISSO + CAMPI.map((c) => (aspetto[c.chiave] ?? 0).toString(36)).join('');
}

export function decodificaAspetto(codice) {
  if (typeof codice !== 'string' || !FORMATO.test(codice)) return null;
  const aspetto = {};
  for (const [i, campo] of CAMPI.entries()) {
    const valore = parseInt(codice[PREFISSO.length + i], 36);
    if (valore >= campo.voci.length) return null;
    aspetto[campo.chiave] = valore;
  }
  return aspetto;
}

export function aspettoCasuale(caso = Math.random) {
  return Object.fromEntries(CAMPI.map((c) => [c.chiave, Math.floor(caso() * c.voci.length)]));
}

function componiTesta(aspetto) {
  const righe = { ...VOLTO, ...CAPELLI[aspetto.capelli].righe };
  for (const [r, interno] of Object.entries(FACCE[aspetto.faccia].interno)) {
    righe[r] = righe[r].slice(0, 3) + interno + righe[r].slice(11);
  }
  return [0, 1, 2, 3, 4, 5, 6, 7].map((r) => righe[r]);
}

export function componiFigura(aspetto) {
  const accessorio = TINTE_VESTITI[aspetto.coloreAccessorio];
  return {
    id: codificaAspetto(aspetto),
    nome: 'Personalizzato',
    sprite: [...componiTesta(aspetto), ...MAGLIE[aspetto.maglia].righe, ...GAMBE[aspetto.gambe].righe],
    colori: {
      S: PELLI[aspetto.pelle],
      R: TINTE_CAPELLI[aspetto.coloreCapelli],
      B: TINTE_VESTITI[aspetto.coloreMaglia],
      W: TINTE_VESTITI[aspetto.coloreDettaglio],
      N: TINTE_VESTITI[aspetto.colorePantaloni],
      D: TINTE_VESTITI[aspetto.coloreScarpe],
      C: accessorio,
      F: accessorio,
      O: accessorio,
    },
  };
}
