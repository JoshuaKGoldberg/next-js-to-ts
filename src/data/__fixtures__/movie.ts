import { MovieData } from "../types";

// interface MovieMaybe {
//   name?: string;
// }

// let myMovie: MovieMaybe = {}
// let myMovie2: MovieMaybe = { name: 'asldf'}

export const createStubMovie = (overrides: Partial<MovieData>): MovieData => ({
  description: "",
  id: '1',
  name: "",
  starring: [],
  year: 0,
  ...overrides,
});
