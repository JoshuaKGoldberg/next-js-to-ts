export function tryParse(data: string | null): unknown {
  // export function tryParse<Value>(data: string | null): Value | undefined {
  try {
    return JSON.parse(data!); // non-null-assertion
  } catch {
    return undefined;
  }
}

const myStuff = tryParse("92358)(@#%*&%*@(jsdlkajfsldkjfalsdkjf");

if (typeof myStuff === "string") {
  myStuff.toUpperCase();
}
