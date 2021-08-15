import { render } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";

import { createStubMovie } from "../data/__fixtures__/movie";
import { useSorter } from "./useSorter";

const apple = createStubMovie({
  name: "apple",
  year: 3,
});

const banana = createStubMovie({
  name: "banana",
  year: 2,
});

const cherry = createStubMovie({
  name: "cherry",
  year: 1,
});

const createStubMovies = () => [banana, apple, cherry];

describe(useSorter, () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("sorts Name (A to Z) by default", () => {
    const hook = renderHook(() => useSorter());

    const sorted = createStubMovies().sort(hook.result.current[1]);

    expect(sorted).toEqual([apple, banana, cherry]);
  });

  it("sorts Name (A to Z) when selected to", () => {
    const hook = renderHook(() => useSorter());

    const select = render(hook.result.current[0]);
    userEvent.selectOptions(select.getByRole("combobox"), "Name (A to Z)");

    const sorted = createStubMovies().sort(hook.result.current[1]);

    expect(sorted).toEqual([apple, banana, cherry]);
  });

  it("sorts Name (Z to A) when selected to", () => {
    const hook = renderHook(() => useSorter());

    const select = render(hook.result.current[0]);
    userEvent.selectOptions(select.getByRole("combobox"), "Name (Z to A)");

    const sorted = createStubMovies().sort(hook.result.current[1]);

    expect(sorted).toEqual([cherry, banana, apple]);
  });

  it("sorts Year (New to Old) when selected to", () => {
    const hook = renderHook(() => useSorter());

    const select = render(hook.result.current[0]);
    userEvent.selectOptions(select.getByRole("combobox"), "Year (New to Old)");

    const sorted = createStubMovies().sort(hook.result.current[1]);

    expect(sorted).toEqual([apple, banana, cherry]);
  });

  it("sorts Year (Old to New) when selected to", () => {
    const hook = renderHook(() => useSorter());

    const select = render(hook.result.current[0]);
    userEvent.selectOptions(select.getByRole("combobox"), "Year (Old to New)");

    const sorted = createStubMovies().sort(hook.result.current[1]);

    expect(sorted).toEqual([cherry, banana, apple]);
  });
});
