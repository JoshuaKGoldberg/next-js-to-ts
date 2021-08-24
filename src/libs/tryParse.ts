export function tryParse(data: string) {
  try {
    return JSON.parse(data);
  } catch {
    return undefined;
  }
}
