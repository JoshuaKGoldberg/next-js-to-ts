import { tryParse } from "./tryParse";

describe(tryParse, () => {
  it("returns the parsed data when valid", () => {
    const data = `{ "happy": true }`;

    const result = tryParse(data);

    expect(result).toEqual({ happy: true });
  });

  it("returns undefined when not valid", () => {
    const data = "invalid";

    const result = tryParse(data);

    expect(result).toEqual(undefined);
  });
});
