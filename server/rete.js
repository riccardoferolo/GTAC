import { networkInterfaces } from 'node:os';

const RETI_PRIVATE = [/^10\./, /^192\.168\./, /^172\.(?:1[6-9]|2\d|3[01])\./];

/**
 * Tutti gli indirizzi IPv4 su cui i telefoni possono raggiungere questo PC, il più promettente
 * per primo.
 *
 * Scarta gli indirizzi `169.254.x.x`: sono quelli che Windows assegna da sé alle schede **senza
 * rete** (Bluetooth, VPN spente, adattatori virtuali) e nessun telefono li raggiunge. Su una
 * macchina da lavoro sono la maggioranza, quindi prendere «il primo IPv4 non interno» finisce
 * facilmente su un indirizzo morto.
 *
 * @returns {{scheda: string, indirizzo: string, privata: boolean}[]}
 */
export function indirizziRete() {
  const candidati = [];

  for (const [scheda, voci] of Object.entries(networkInterfaces())) {
    for (const voce of voci ?? []) {
      if (voce.family !== 'IPv4' || voce.internal) continue;
      if (voce.address.startsWith('169.254.')) continue;

      candidati.push({
        scheda,
        indirizzo: voce.address,
        privata: RETI_PRIVATE.some((rete) => rete.test(voce.address)),
      });
    }
  }

  return candidati.sort((primo, secondo) => Number(secondo.privata) - Number(primo.privata));
}
