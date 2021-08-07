import { renderHook, act } from "@testing-library/react-hooks";

import { useLocalStorageItem } from "./useLocalStorageItem";

const key = "item-key";
const blankValue = "apple";

describe(useLocalStorageItem, () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("starts the item off with the blank value", () => {
    const hook = renderHook(() => useLocalStorageItem(key, blankValue));

    expect(hook.result.current[0]).toBe(blankValue);
  });

  it("recovers the item from local storage after mount if previously stored", async () => {
    const updatedValue = "banana";

    localStorage.setItem(key, `"${updatedValue}"`);

    const hook = renderHook(() => useLocalStorageItem(key, blankValue));

    await act(async () => {});

    expect(hook.result.current[0]).toBe(updatedValue);
  });

  it("sets the item to the initial value after mount if not previously stored and with an initial value", async () => {
    const initialValue = "banana";

    const hook = renderHook(() =>
      useLocalStorageItem(key, blankValue, initialValue)
    );

    await act(async () => {});

    expect(hook.result.current[0]).toBe(initialValue);
  });
});
