import { MovieData } from "../types";

export const createStubMovie = (overrides?: Partial<MovieData>): MovieData => ({
  description: "",
  id: "",
  name: "",
  starring: [],
  year: 0,
  ...overrides,
});
