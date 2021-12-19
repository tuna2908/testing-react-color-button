import { replaceCamelWithSpace } from "./helpers/colors.helper";

describe("spaces before camel-case capital letters", () => {
  test("test with no inner capital letters", () => {
    expect(replaceCamelWithSpace("Red")).toBe("Red");
  });
  test("test with one ineer CL", () => {
    expect(replaceCamelWithSpace("MidnightBlue")).toBe("Midnight Blue");
  });
  test("test with multiple inner CL", () => {
    expect(replaceCamelWithSpace("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
