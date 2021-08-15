export const createStubMovie = (overrides) => ({
  description: "",
  name: "",
  starring: [],
  year: 0,
  ...overrides,
});
