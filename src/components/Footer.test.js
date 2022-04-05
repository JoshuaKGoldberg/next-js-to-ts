import { setupRtl } from "component-test-setup";
import Footer from "./Footer";


const renderView = setupRtl(Footer, {
  children: "Hello, world!",
  description: "my description",
  title: "my title",
});

describe(Footer, () => {
  it("renders", () => {
    renderView();
  });
});
