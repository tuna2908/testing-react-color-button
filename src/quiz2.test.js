import { fireEvent } from '@testing-library/react';
import App from './App';
import { initButtonAndCheckBoxStatus } from './App.test';
import { COLOR_NAMES } from './common/constants';

/**
 * QUIZ 2: BUTTON TURNS GRAY
 */

test('check if button turns gray', () => {
  const { colorButton, checkbox } = initButtonAndCheckBoxStatus();

  //disable button 1st time
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  //check button disable
  expect(colorButton).toHaveStyle({ backgroundColor: COLOR_NAMES.GRAY });

  //enable button
  fireEvent.click(checkbox);

  //click button
  fireEvent.click(colorButton);

  //checkbutton turn red
  expect(colorButton).toHaveStyle({ backgroundColor: COLOR_NAMES.RED });

  //change color
  fireEvent.click(colorButton);

  //disable button
  fireEvent.click(checkbox);

  //check button disable
  expect(colorButton).toHaveStyle({ backgroundColor: COLOR_NAMES.GRAY });

  //enable
  fireEvent.click(checkbox);

  //check button turn blue
  expect(colorButton).toHaveStyle({
    backgroundColor: COLOR_NAMES.MIDNIGHT_BLUE,
  });
});

test('check if button turns gray', () => {
  const { colorButton, checkbox } = initButtonAndCheckBoxStatus();
  //disable Button 1st
  fireEvent.click(checkbox);

  //check button gray
  expect(colorButton).toHaveStyle({ backgroundColor: COLOR_NAMES.GRAY });

  //enable button
  fireEvent.click(checkbox);

  //check button red
  expect(colorButton).toHaveStyle({
    backgroundColor: COLOR_NAMES.MED_VIOLET_RED,
  });

  //change color
  fireEvent.click(colorButton);

  //diable again
  fireEvent.click(checkbox);

  //check gray
  expect(colorButton).toHaveStyle({ backgroundColor: COLOR_NAMES.GRAY });

  //enable
  fireEvent.click(checkbox);

  //check blue
  expect(colorButton).toHaveStyle({
    backgroundColor: COLOR_NAMES.MIDNIGHT_BLUE,
  });
});
