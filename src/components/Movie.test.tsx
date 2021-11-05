import { setupRtl } from "component-test-setup";

import { createStubMovie } from "../data/__fixtures__/movie";
import { Movie } from "./Movie";

const renderView = setupRtl(Movie, {
  toggleFavorite: jest.fn(),
});

describe(Movie, () => {
  it("renders a single starring role when only one exists", () => {
    const { view } = renderView({
      movie: createStubMovie({
        starring: ["apple"],
      }),
    });

    view.getByText("Starring: apple");
  });

  it("renders a multiple starring roles separated by commas when multiple exist", () => {
    const { view } = renderView({
      movie: createStubMovie({
        starring: ["apple", "banana"],
      }),
    });

    view.getByText("Starring: apple, banana");
  });
});
