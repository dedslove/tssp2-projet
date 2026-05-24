/**
 * Construit un lien WhatsApp avec message prérempli.
 * @param {string} phone - Numéro international (ex: 242065346560 ou +242 06 534 65 60)
 * @param {string} message - Texte du message
 */
export function buildWhatsAppLink(phone, message) {
  if (!phone || String(phone).includes('REMPLACER')) {
    return null;
  }

  const digits = String(phone).replace(/\D/g, '');
  if (digits.length < 9) {
    return null;
  }

  const text = encodeURIComponent(message || '');
  return `https://wa.me/${digits}?text=${text}`;
}

export const DEFAULT_STAGE_WHATSAPP_MESSAGE =
  "Bonjour, je suis étudiant(e) au CNFSDP. J'ai beaucoup apprécié votre thème de rapport de stage et j'aimerais vous poser quelques questions. Merci pour votre disponibilité !";
