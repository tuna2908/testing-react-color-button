import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { COLOR_NAMES } from "./common/constants";

//test 2: write test
test("button has the correct inital colour", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  //use custom matcher: https://github.com/testing-library/jest-dom
  expect(colorButton).toHaveStyle({
    backgroundColor: COLOR_NAMES.MED_VIOLET_RED,
  });

  //click button
  fireEvent.click(colorButton);

  //expect color blue
  expect(colorButton).toHaveStyle({ 
    backgroundColor: COLOR_NAMES.MIDNIGHT_BLUE,
  });

  //expect txt to change red
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

//ignore by caused redundant
// test("button has the correct inital text", () => {});

// test("button turns blue when clicked", () => {
//   render(<App />);

//   const colorButton = screen.getByRole("button", { name: "Change to blue" });

// });

//functional test => multiple assertion

export const initButtonAndCheckBoxStatus = () => {
  //for the reuse purpose
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  //check that button starts out enabled
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });
  expect(checkbox).not.toBeChecked();

  return { colorButton, checkbox };
};

test("initial conditions", () => {
  initButtonAndCheckBoxStatus();
});

//should write seperate check to remain other test status if it needed

test("confirm button disable on Checkbox check", () => {
  //render and find the button
  //check the init condition: button enabled, checkbox unchecked
  const { colorButton, checkbox } = initButtonAndCheckBoxStatus();

  //hit the checkbox to disable
  fireEvent.click(checkbox); //fire Event is an object not function
  //expext button disabled
  expect(colorButton).toBeDisabled();

  //hit the check box to enable
  fireEvent.click(checkbox);

  //expect button enabled
  expect(colorButton).toBeEnabled();
});
