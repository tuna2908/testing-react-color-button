import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

//test 2: write test
test("button has the correct inital colour", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  //use custom matcher: https://github.com/testing-library/jest-dom
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  //click button
  fireEvent.click(colorButton);

  //expect color blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  //expect txt to change red
  expect(colorButton.textContent).toBe("Change to red");
});

//ignore by caused redundant
// test("button has the correct inital text", () => {});

// test("button turns blue when clicked", () => {
//   render(<App />);

//   const colorButton = screen.getByRole("button", { name: "Change to blue" });

// });

//functional test => multiple assertion
