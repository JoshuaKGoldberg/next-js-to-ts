import { useCallback, useEffect, useState } from "react";

import { tryParse } from "../libs/tryParse";


// let myValue: [number, string];

/**
 * @param key Key to store in localStorage.
 * @param blankValue Blank value to use before mounting.
 * @param [initialValue] Value to fill in if not already stored.
 * @returns Item and a function to update it.
 * @remarks
 * This does not attempt to retrieve from localStorage immediately,
 * as doing so would cause a React SSR/client hydration mismatch.
 */
export function useLocalStorageItem<Value>(
  key: string,
  blankValue: Value,
  initialValue = blankValue
)  /* : [  Value,  (newValue: Value) => void,] */ {
  const [item, setItem] = useState<Value>(blankValue);

  useEffect(() => {
    const retrievedValue = tryParse(localStorage.getItem(key)) as Value | undefined;
    const actualNewValue = retrievedValue ?? initialValue;
    setItem(actualNewValue);
  }, [initialValue, key]);

  const updateItem = useCallback(
    (value: Value) => {
      setItem(value);
      // TODO: FIX THE VALUE STRING :( // @ts-expect-error
      localStorage.setItem(key, JSON.stringify(value)); // 🤔
    },
    [key]
  );

  return [
    item,
    updateItem,
  ] as const; // as [Value, (newValue: Value) => void];
}
