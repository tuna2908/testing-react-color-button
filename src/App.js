import "./App.css";
import { useState } from "react";
import { replaceCamelWithSpace } from "./helpers/colors.helper";
import { COLOR_NAMES } from "./common/constants";

//step 1: return shell function
//step 2: write test
//step 3: write code
//step 4: pass tests

function App() {
  //step 1: return shell function

  //extract props
  const { MED_VIOLET_RED, MIDNIGHT_BLUE, GRAY } = COLOR_NAMES;

  //init states
  const [buttonColor, setButtonColor] = useState(MED_VIOLET_RED);
  const [cbState, setCBState] = useState(false);

  const newButtonColor =
    buttonColor == MED_VIOLET_RED ? MIDNIGHT_BLUE : MED_VIOLET_RED;

  const handleOnclick = () => setButtonColor(newButtonColor);

  const handleCheckboxCheck = (e) => setCBState(e.target.checked); //check not value :3
  
  return (
    <div>
      <button
        style={{ backgroundColor: cbState ? GRAY : buttonColor }}
        onClick={handleOnclick}
        disabled={cbState}
      >
        Change to {replaceCamelWithSpace(newButtonColor)}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onClick={handleCheckboxCheck}
      />
      <label htmlFor="disable-button-checkbox">Disable Button</label>
    </div>
  );
}

export default App;
