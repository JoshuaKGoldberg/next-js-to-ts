import { setupRtl } from "component-test-setup";

import { Layout } from "./Layout";

const renderView = setupRtl(Layout, {
  children: "Hello, world!",
  description: "my description",
  title: "my title",
});

describe(Layout, () => {
  it("renders", () => {
    renderView();
  });
});
