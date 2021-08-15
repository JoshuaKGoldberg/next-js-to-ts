import userEvent from "@testing-library/user-event";
import { setupRtl } from "component-test-setup";

import { Select } from "./Select";

const renderView = setupRtl(Select);

describe(Select, () => {
  it("fires onChange with the new value when an option is selected", () => {
    const onChange = jest.fn();
    const { view } = renderView({
      onChange,
      options: ["apple", "banana", "cherry"],
      selected: "cherry",
    });

    userEvent.selectOptions(view.getByRole("combobox"), "banana");

    expect(onChange).toHaveBeenCalledWith("banana");
  });
});
