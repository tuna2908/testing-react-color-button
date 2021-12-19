import { fireEvent } from "@testing-library/react";
import App from "./App";
import { initButtonAndCheckBoxStatus } from "./App.test";

/**
 * QUIZ 2: BUTTON TURNS GRAY
 */

test("check if button turns gray", () => {
  const { colorButton, checkbox } = initButtonAndCheckBoxStatus();
  //disable Button 1st
  fireEvent.click(checkbox);

  //check button gray
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  //enable button
  fireEvent.click(checkbox);

  //check button red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  //change color
  fireEvent.click(colorButton);

  //diable again
  fireEvent.click(checkbox);

  //check gray
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  //enable
  fireEvent.click(checkbox);

  //check blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});
