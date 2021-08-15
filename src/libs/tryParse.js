export function tryParse(data) {
  try {
    return JSON.parse(data);
  } catch {
    return undefined;
  }
}
