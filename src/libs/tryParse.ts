export function tryParse(data: string | null) {
  // // DANGER: CODE CHANGE
  // if (data === null) {
  //   return null;
  // }

  try {
    return JSON.parse(data as string);
  } catch {
    return undefined;
  }
}

// interface MyGreeting {
//   asdfasdf: string;
// }

// const result = tryParse<MyGreeting>(
//   "{ \"hello\": \"qwerty\" }"
// );

// result?.asdfasdf.toUpperCase();