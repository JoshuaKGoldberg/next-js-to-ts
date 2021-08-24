import { useCallback, useEffect, useState } from "react";

import { tryParse } from "../libs/tryParse";

/**
 * @param key Key to store in localStorage.
 * @param blankValue Blank value to use before mounting.
 * @param initialValue Value to fill in if not already stored.
 * @returns Item and a function to update it.
 * @remarks
 * This does not attempt to retrieve from localStorage immediately,
 * as doing so would cause a React SSR/client hydration mismatch.
 */
export function useLocalStorageItem<Value>(
  key: string,
  blankValue: Value,
  initialValue = blankValue
) {
  const [item, setItem] = useState(blankValue);

  useEffect(() => {
    // TODO: FIX ME!!! Is '!' wrong?
    setItem(tryParse(localStorage.getItem(key)!) ?? initialValue);
  }, [initialValue, key]);

  const updateItem = useCallback(
    (value: Value) => {
      setItem(value);
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );

  return [item, updateItem] as const;
}
