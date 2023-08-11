export function capitalizeFirstLetterOnly(str: string | null) {
  return str!.charAt(0).toUpperCase() + str!.toLowerCase().slice(1);
}
