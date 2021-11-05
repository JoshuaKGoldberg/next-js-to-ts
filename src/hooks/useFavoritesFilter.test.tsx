import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";

import { createStubMovie } from "../data/__fixtures__/movie";
import { useFavoritesFilter } from "./useFavoritesFilter";

const apple = createStubMovie({
  id: "apple",
  // description: 'asldfkjasldfkja',
});

const banana = createStubMovie({
  id: "banana",
});

const favorites = {
  [apple.id]: true,
};

describe(useFavoritesFilter, () => {
  beforeEach(() => {
    localStorage.setItem("movies-favorites-filter", "All");
  });

  it("filters to All by default", () => {
    const hook = renderHook(() => useFavoritesFilter(favorites));

    const filtered = [apple, banana].filter(hook.result.current[1]);

    expect(filtered).toEqual([apple, banana]);
  });

  it("filters to All when selected to", () => {
    // const { result } = renderHook(...)
    const hook = renderHook(() => useFavoritesFilter(favorites));

    const select = render(hook.result.current[0]);
    userEvent.selectOptions(select.getByRole("combobox"), "All");

    const filtered = [apple, banana].filter(hook.result.current[1]);

    expect(filtered).toEqual([apple, banana]);
  });

  it("filters to Favorites Only when selected to", () => {
    const hook = renderHook(() => useFavoritesFilter(favorites));

    const select = render(hook.result.current[0]);
    userEvent.selectOptions(select.getByRole("combobox"), "Favorites Only");

    const filtered = [apple, banana].filter(hook.result.current[1]);

    expect(filtered).toEqual([apple]);
  });

  it("filters to No Favorites when selected to", () => {
    const hook = renderHook(() => useFavoritesFilter(favorites));

    const select = render(hook.result.current[0]);
    userEvent.selectOptions(select.getByRole("combobox"), "No Favorites");

    const filtered = [apple, banana].filter(hook.result.current[1]);

    expect(filtered).toEqual([banana]);
  });
});
