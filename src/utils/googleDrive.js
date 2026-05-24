/**
 * Transforme un ID ou un lien Google Drive en URL d'ouverture du fichier.
 * Collez soit l'ID (ex: 1AbCdeFgH...) soit le lien complet de partage.
 */
export function toGoogleDriveViewUrl(fileIdOrShareUrl) {
  if (!fileIdOrShareUrl || fileIdOrShareUrl.startsWith('#')) {
    return '#';
  }

  const trimmed = fileIdOrShareUrl.trim();

  if (trimmed.includes('REMPLACER')) {
    return '#';
  }

  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /\/document\/d\/([a-zA-Z0-9_-]+)/,
    /id=([a-zA-Z0-9_-]+)/,
    /^([a-zA-Z0-9_-]{10,})$/,
  ];

  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match?.[1]) {
      return `https://drive.google.com/file/d/${match[1]}/view`;
    }
  }

  if (trimmed.startsWith('http')) {
    return trimmed;
  }

  return '#';
}

export function buildDocumentLink(driveRef) {
  return toGoogleDriveViewUrl(driveRef);
}
