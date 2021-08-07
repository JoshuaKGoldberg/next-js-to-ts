import { setupRtl } from "component-test-setup";

import { FavoriteStar } from "./FavoriteStar";

const renderView = setupRtl(FavoriteStar);

describe(FavoriteStar, () => {
  it("renders a favorite label when favorite is true", () => {
    const { view } = renderView({
      favorite: true,
    });

    view.getByLabelText("Favorite");
  });

  it("renders a non-favorite label when favorite is false", () => {
    const { view } = renderView({
      favorite: false,
    });

    view.getByLabelText("Not a favorite");
  });
});
