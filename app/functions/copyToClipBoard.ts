export async function copyToClipBoard(textToCopy: string) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(textToCopy);
  } else {
    throw new Error('Text not copied to clipboard');
  }
}
