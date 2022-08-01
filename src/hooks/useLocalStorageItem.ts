import { useCallback, useEffect, useState } from "react";

import { tryParse } from "../libs/tryParse";

/**
 * @param key Key to store in localStorage.
 * @param blankValue Blank value to use before mounting.
 * @param initialValue Value to fill in if not already stored.
 * @returns {[*, Function]} Item and a function to update it.
 * @remarks
 * This does not attempt to retrieve from localStorage immediately,
 * as doing so would cause a React SSR/client hydration mismatch.
 */
export function useLocalStorageItem<Value>(
  key: string,
  blankValue: Value,
  initialValue = blankValue
  // ): (Value | ((value: any) => void))[] {
) /* : [Value, (value: any) => void] */ {
  const [item, setItem] = useState(blankValue);

  useEffect(() => {
    // setItem(blankValue); // ok
    // setItem(() => blankValue); // ok

    const newValue =
      (tryParse(localStorage.getItem(key)) as Value | undefined) ??
      initialValue;

    setItem(newValue);
  }, [initialValue, key]);

  const updateItem = useCallback(
    (value: Value) => {
      setItem(value);
      // @ts-expect-error -- This is probably a bug, we should investigate
      // (localStorage takes in string, not the Value object type)
      localStorage.setItem(key, value);
    },
    [key]
  );

  return [item, updateItem] as const;
}

// Not: [1, 2, 3]
// Yes: number[]
const values = [1, 2, 3];
