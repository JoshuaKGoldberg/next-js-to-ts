import { renderHook, act } from "@testing-library/react-hooks";

import { useFavorites } from "./useFavorites";

const id = "abc-123";

describe(useFavorites, () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("sets a favorite to true when it doesn't yet exist", () => {
    const hook = renderHook(() => useFavorites());

    act(() => {
      hook.result.current[1](id);
    });

    act(() => {
      hook.rerender();
    });

    expect(hook.result.current[0]).toEqual(
      expect.objectContaining({ [id]: true })
    );
  });

  it("sets a favorite to false when it previously exists", () => {
    const hook = renderHook(() => useFavorites());

    act(() => {
      hook.result.current[1](id);
    });

    act(() => {
      hook.result.current[1](id);
    });

    act(() => {
      hook.rerender();
    });

    expect(hook.result.current[0]).toEqual(
      expect.objectContaining({ [id]: false })
    );
  });
});
