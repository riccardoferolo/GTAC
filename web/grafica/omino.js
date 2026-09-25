const SPRITE_BASE = [
  '....KKKKKK....',
  '...KRRRRRRK...',
  '..KRRRRRRRRK..',
  '..KWWWWWWWWKK.',
  '..KSSSSSSSSK..',
  '..KSKSSSSKSK..',
  '..KSSSSSSSSK..',
  '...KSSSSSSK...',
  '..KBBBBBBBBK..',
  '.KSBBBBBBBBSK.',
  '.KSBBBWWBBBSK.',
  '.KKBBBBBBBBKK.',
  '..KBBBBBBBBK..',
  '..KNNNNNNNNK..',
  '..KNNNKKNNNK..',
  '..KNNK..KNNK..',
  '..KDDK..KDDK..',
  '..KKKK..KKKK..',
];

const SPRITE_CAPELLI_LUNGHI = [
  '....KKKKKK....',
  '...KRRRRRRK...',
  '..KRRRRRRRRK..',
  '..KRRRRRRRRK..',
  '..KSSSSSSSSK..',
  '.KRSKSSSSKSRK.',
  '.KRSSSSSSSSRK.',
  '.KRRKSSSSKRRK.',
  '..KBBBBBBBBK..',
  '.KSBBBBBBBBSK.',
  '.KSBBBWWBBBSK.',
  '.KKBBBBBBBBKK.',
  '..KBBBBBBBBK..',
  '..KNNNNNNNNK..',
  '..KNNNKKNNNK..',
  '..KNNK..KNNK..',
  '..KDDK..KDDK..',
  '..KKKK..KKKK..',
];

const SPRITE_A_STRISCE = [
  '....KKKKKK....',
  '...KRRRRRRK...',
  '..KRRRRRRRRK..',
  '..KWWWWWWWWKK.',
  '..KSSSSSSSSK..',
  '..KSKSSSSKSK..',
  '..KSSSSSSSSK..',
  '...KSSSSSSK...',
  '..KBWBWBWBWK..',
  '.KSBWBWBWBWSK.',
  '.KSBWBWBWBWSK.',
  '.KKBWBWBWBWKK.',
  '..KBWBWBWBWK..',
  '..KNNNNNNNNK..',
  '..KNNNKKNNNK..',
  '..KNNK..KNNK..',
  '..KDDK..KDDK..',
  '..KKKK..KKKK..',
];

const SPRITE_CALVO = [
  '..............',
  '....KKKKKK....',
  '...KSSSSSSK...',
  '..KRSSSSSSRK..',
  '..KSSSSSSSSK..',
  '..KSKSSSSKSK..',
  '..KSSRRRRSSK..',
  '...KSSSSSSK...',
  '..KBBBBBBBBK..',
  '.KSBBBBBBBBSK.',
  '.KSBBWBBWBBSK.',
  '.KKBBBBBBBBKK.',
  '..KBBBBBBBBK..',
  '..KNNNNNNNNK..',
  '..KNNNKKNNNK..',
  '..KNNK..KNNK..',
  '..KDDK..KDDK..',
  '..KKKK..KKKK..',
];

const SPRITE_MASCELLA = [
  '..............',
  '....KKKKKK....',
  '...KSSSSSSK...',
  '..KSSSSSSSSK..',
  '..KSKSSSSKSK..',
  '..KSSSSSSSSK..',
  '..KSSKKKKSSK..',
  '...KSSSSSSK...',
  '...KKSSSSKK...',
  '..KBBBBBBBBK..',
  '.KSBBBBBBBBSK.',
  '.KKGGGGGGGGKK.',
  '..KNNNNNNNNK..',
  '..KNNNKKNNNK..',
  '..KNNK..KNNK..',
  '..KDDK..KDDK..',
  '..KKKK..KKKK..',
];

const SPRITE_SOLO_CORPO = SPRITE_MASCELLA.map((riga, i) => (i < 9 ? '.'.repeat(riga.length) : riga));

const SPRITE_PALLA = [
  '........................',
  '........KKKKKKKK........',
  '......KKKRRRRRRKKK......',
  '.....KKRRRRRRRRRRKK.....',
  '....KKSSSSSSSSSSSSKK....',
  '...KKSSSSSSSSSSSSSSKK...',
  '...KSGGGGGGGGGGGGGGSK...',
  '..KSSGWKKWGSSGWKKWGSSK..',
  '..KSSSSSSSSSSSSSSSSSSK..',
  '..KSSSSSSRSSSSRSSSSSSK..',
  '.KKSSSSSSSRRRRSSSSSSSKK.',
  '.KSSSSSSSSSSSSSSSSSSSSK.',
  '.KKBBBBBBBBBBBBBBBBBBKK.',
  'KSKBBBBBBBBBBBBBBBBBBKSK',
  'KSKBBBBBBBBBBBBBBBBBBKSK',
  '..KBBBBBBBBBBBBBBBBBBK..',
  '...KBBBBBBBWWBBBBBBBK...',
  '...KKBBBBBBBBBBBBBBKK...',
  '....KKBBBBBBBBBBBBKK....',
  '.....KKBBBBBBBBBBKK.....',
  '......KKKBBBBBBKKK......',
  '........KKKKKKKK........',
  '......KDDDK...KDDDK.....',
  '......KKKKK...KKKKK.....',
];

const SPRITE_BARBA = [
  '...KKKKKKK....',
  '..KRRRRRRRRK..',
  '..KRRRRRRRRRK.',
  '..KRSSSSSSRK..',
  '..KSSSSSSSSK..',
  '..KSKSSSSKSK..',
  '..KRSSSSSSRK..',
  '...KRRRRRRK...',
  '..KBBBWWBBBK..',
  '.KSBBBWWBBBSK.',
  '.KSBBBBBBBBSK.',
  '.KKBBBBBBBBKK.',
  '..KBBBBBBBBK..',
  '..KNNNNNNNNK..',
  '..KNNNKKNNNK..',
  '..KNNK..KNNK..',
  '..KDDK..KDDK..',
  '..KKKK..KKKK..',
];

const SPRITE_CICU = [
  '....KKKKKK....',
  '...KRRRRRRK...',
  '..KRRRRRRRRK..',
  '..KRRRRRRRRK..',
  '..KSSSSSSSSK..',
  '.KRSKSSSSKSRK.',
  '.KRSSSSSSSSRK.',
  '.KRRKRRRRKRRK.',
  '.KRKBBBBBBKRK.',
  '.KSBBBBBBBBSK.',
  '.KSBBBWWBBBSK.',
  '.KKBBBBBBBBKK.',
  '..KBBBBBBBBK..',
  '..KNNNNNNNNK..',
  '..KNNNKKNNNK..',
  '..KNNK..KNNK..',
  '..KDDK..KDDK..',
  '..KKKK..KKKK..',
];

const SPRITE_CASCHETTO = [
  '...KKKKKKKK...',
  '..KRRRRRRRRK..',
  '.KRRRRRRRRRRK.',
  '.KRRRRRRRRRRK.',
  '.KRRRRRRRRRRK.',
  '.KRSKSSSSKSRK.',
  '.KRSSSSSSSSRK.',
  '..KSSSRRSSSK..',
  '..KBBBBBBBBK..',
  '.KSBBBBBBBBSK.',
  '.KSBBBWWBBBSK.',
  '.KKBBBBBBBBKK.',
  '..KBBBBBBBBK..',
  '..KNNNNNNNNK..',
  '..KNNNKKNNNK..',
  '..KNNK..KNNK..',
  '..KDDK..KDDK..',
  '..KKKK..KKKK..',
];

const SPRITE_RICCIO = [
  '..K.KK.KK.K...',
  '.KRKRRKRRKRK..',
  'KRRRRRRRRRRRK.',
  'KRRRRRRRRRRRK.',
  'KRKSSSSSSSKRK.',
  '.KSSKSSSSKSK..',
  '.KRSSSSSSSSRK.',
  '..KKSSSSSSK...',
  '..KBBBBBBBBK..',
  '.KSBBBBBBBBSK.',
  '.KSBBBWWBBBSK.',
  '.KKBBBBBBBBKK.',
  '..KBBBBBBBBK..',
  '..KNNNNNNNNK..',
  '..KNNNKKNNNK..',
  '..KNNK..KNNK..',
  '..KDDK..KDDK..',
  '..KKKK..KKKK..',
];

const SPRITE_PESCATORE = [
  '....KKKKKKKK....',
  '...KHHHHHHHHK...',
  '...KHHHHHHHHK...',
  '.KKHHHHHHHHHHKK.',
  'KHHHHHHHHHHHHHHK',
  '.KKKSSSSSSSSKKK.',
  '...KSKSSSSKSK...',
  '...KSSSSSSSSK...',
  '....KSSSSSSK....',
  '...KBBBBBBBBK...',
  '..KSBBBBBBBBSKKK',
  '..KSBBBWWBBBSGGG',
  '..KKBBBBBBBBKKGK',
  '...KBBBBBBBBK...',
  '...KNNNNNNNNK...',
  '...KNNNKKNNNK...',
  '...KNNK..KNNK...',
  '...KDDK..KDDK...',
  '...KKKK..KKKK...',
];

const BASE_COLORI = { K: '#221e26', W: '#fafafa', S: '#facea4', N: '#282c40', D: '#6e4628' };

export const PERSONAGGI = Object.freeze([
  { id: 'manuel', nome: 'Manuel', sprite: SPRITE_BASE, colori: { R: '#e8c060', B: '#d82a2a', N: '#3a5a9a' } },
  { id: 'paolo', nome: 'Paolo', sprite: SPRITE_BASE, colori: { R: '#1a1a1e', W: '#f0f0f0', B: '#6a2ab8', N: '#2a2a30' } },
  { id: 'ocsa', nome: 'Ocsa', sprite: SPRITE_BARBA, colori: { R: '#c89a3a', B: '#d8602a', N: '#3a4a6a' } },
  { id: 'tommo', nome: 'Tommo', sprite: SPRITE_CASCHETTO, colori: { R: '#3a2414', B: '#1e1e22' } },
  { id: 'teo', nome: 'Teo', sprite: SPRITE_A_STRISCE, colori: { R: '#6a3a1a', B: '#e0b020', W: '#1a1a1e', N: '#2a3a2a' } },
  { id: 'giacomo', nome: 'Giacomo', sprite: SPRITE_PALLA, pixelQuadrati: true, colori: { R: '#2a1c14', B: '#2e8a4e', G: '#1a1a1a' } },
  { id: 'riccardo', nome: 'Riccardo', sprite: SPRITE_BARBA, colori: { R: '#5a3a22', B: '#1f8f8a' } },
]);

export const PERSONAGGIO_PREDEFINITO = PERSONAGGI[0].id;

export const COMPARSE = Object.freeze([
  { id: 'ragazzo', nome: 'Ragazzo', sprite: SPRITE_BASE, colori: { R: '#de2c2c', B: '#3260d2' } },
  { id: 'ragazza', nome: 'Ragazza', sprite: SPRITE_CAPELLI_LUNGHI, colori: { R: '#8a4a26', B: '#e0588c' } },
  { id: 'tifoso', nome: 'Tifoso', sprite: SPRITE_A_STRISCE, colori: { R: '#1e1e22', B: '#1e1e22', W: '#fafafa' } },
  { id: 'nonno', nome: 'Nonno', sprite: SPRITE_CALVO, colori: { R: '#c8c8c8', B: '#b48c5a', N: '#5a4a3a' } },
  { id: 'cicu', nome: 'Cicù', sprite: SPRITE_CICU, colori: { R: '#141418', B: '#3a5a8a' } },
  { id: 'cornetti', nome: 'Cornetti', sprite: SPRITE_BASE, colori: { R: '#e07a1a', W: '#6a4a2a', B: '#7a9a3a', N: '#5a6a8a' } },
  { id: 'pinuccio', nome: 'Pinuccio', sprite: SPRITE_BASE, colori: { R: '#2a1a10', W: '#f4f4f4', B: '#f4f4f4', N: '#2a2a30' } },
  { id: 'giocatore-cerano', nome: 'Cerano', sprite: SPRITE_A_STRISCE, colori: { R: '#3a2414', B: '#1a4ab8', W: '#fafafa', N: '#fafafa', D: '#1a1a1e' } },
  { id: 'giocatore-cerano-2', nome: 'Cerano', sprite: SPRITE_A_STRISCE, colori: { R: '#e8c060', B: '#1a4ab8', W: '#fafafa', N: '#fafafa', D: '#1a1a1e' } },
  { id: 'giocatore-trecate', nome: 'Trecate', sprite: SPRITE_BASE, colori: { R: '#1a1a1e', B: '#c82a2a', W: '#c82a2a', N: '#1a1a1e', D: '#fafafa' } },
  { id: 'giocatore-trecate-2', nome: 'Trecate', sprite: SPRITE_BASE, colori: { R: '#8a4a26', B: '#c82a2a', W: '#c82a2a', N: '#1a1a1e', D: '#fafafa' } },
  { id: 'portiere-cerano', nome: 'Portiere', sprite: SPRITE_BASE, colori: { R: '#2a1c14', B: '#e8e020', W: '#e8e020', N: '#1a1a1e' } },
  { id: 'portiere-trecate', nome: 'Portiere', sprite: SPRITE_BASE, colori: { R: '#5a3a22', B: '#2ab84a', W: '#2ab84a', N: '#1a1a1e' } },
  { id: 'vigile', nome: 'Vigile', sprite: SPRITE_BASE, colori: { R: '#f4f4f0', B: '#2a3a5a', W: '#1a8a4a', N: '#1a1a2a', D: '#141414' } },
  { id: 'arbitro', nome: 'Arbitro', sprite: SPRITE_CALVO, colori: { R: '#3a3a3a', B: '#1a1a1e', N: '#1a1a1e', D: '#1a1a1e' } },
  { id: 'feno', nome: 'Feno', sprite: SPRITE_RICCIO, colori: { R: '#f0c848', B: '#5a6a3a', W: '#3a4a2a', N: '#4a3a2a', D: '#3a2414' } },
  { id: 'dunde', nome: 'Dunde', sprite: SPRITE_BARBA, colori: { R: '#2a1c14', B: '#c83a6a', N: '#2a3a5a' } },
  { id: 'sacs', nome: 'Sacs', sprite: SPRITE_CAPELLI_LUNGHI, colori: { R: '#e8c060', B: '#f08ab0', N: '#3a4a7a' } },
  { id: 'vittoria', nome: 'Vittoria', sprite: SPRITE_CAPELLI_LUNGHI, colori: { R: '#5a3a22', B: '#3ab8a8', N: '#2a2a40' } },
  { id: 'chiara', nome: 'Chiara', sprite: SPRITE_CAPELLI_LUNGHI, colori: { R: '#1e1a18', B: '#f0d040', N: '#5a3a6a' } },
  { id: 'bolo', nome: 'Il Bolo', sprite: SPRITE_PESCATORE, colori: { H: '#b8a86a', G: '#2a2a30', B: '#5a7a4a', N: '#4a4a3a' } },
  { id: 'jim', nome: 'Jim Belushi', sprite: SPRITE_BASE, colori: { R: '#4a3222', B: '#3a6ab0', W: '#e8e0d0', N: '#2a2a34' } },
  { id: 'lanciere', nome: 'Uomo con la lancia', sprite: SPRITE_BARBA, colori: { R: '#3a2414', B: '#facea4', W: '#facea4', N: '#6a4a2a' } },
  { id: 'mussolini-corpo', nome: 'Benito Mussolini', sprite: SPRITE_SOLO_CORPO, colori: { B: '#1a1a1e', G: '#6a4a2a', N: '#4a4a3a', D: '#141414' } },
  { id: 'mussolini', nome: 'Benito Mussolini', sprite: SPRITE_MASCELLA, colori: { B: '#1a1a1e', G: '#6a4a2a', N: '#4a4a3a', D: '#141414' } },
]);

export function trovaPersonaggio(id) {
  return PERSONAGGI.find((p) => p.id === id) ?? PERSONAGGI[0];
}

function trovaFigura(id) {
  return PERSONAGGI.find((p) => p.id === id) ?? COMPARSE.find((p) => p.id === id) ?? PERSONAGGI[0];
}

export const TUNICA = Object.freeze({ B: '#6b4a2e', N: '#5a3d24', D: '#c89a6a' });

export function coloriPersonaggio(idPersonaggio = PERSONAGGIO_PREDEFINITO, vestito = null) {
  return { ...BASE_COLORI, ...trovaFigura(idPersonaggio).colori, ...(vestito === 'tunica' ? TUNICA : {}) };
}

export function disegnaOmino(ctx, x, y, scala, idPersonaggio = PERSONAGGIO_PREDEFINITO, vestito = null) {
  const personaggio = trovaFigura(idPersonaggio);
  const colori = { ...BASE_COLORI, ...personaggio.colori, ...(vestito === 'tunica' ? TUNICA : {}) };
  const sprite = personaggio.sprite;
  const lx = 18 / 14;
  const ly = personaggio.pixelQuadrati ? lx : 24 / sprite.length;
  x -= ((sprite[0].length - 14) * lx * scala) / 2;
  y -= (sprite.length * ly - 24) * scala;
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(Math.round(x - 1 * scala), Math.round(y + (sprite.length * ly - 4) * scala), Math.round((sprite[0].length * lx + 2) * scala), Math.round(5 * scala));
  sprite.forEach((riga, ry) => {
    [...riga].forEach((c, rx) => {
      if (!colori[c]) return;
      ctx.fillStyle = colori[c];
      ctx.fillRect(Math.round(x + rx * lx * scala), Math.round(y + ry * ly * scala), Math.ceil(lx * scala), Math.ceil(ly * scala));
    });
  });
}
