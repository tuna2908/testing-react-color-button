import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

//step 1: return shell function
//step 2: write test
//step 3: write code
//step 4: pass tests

function App() {
  //step 1: return shell function
  const [buttonColor, setButtonColor] = useState("red");
  const [cbState, setCBState] = useState(false);

  const newButtonColor = buttonColor == "red" ? "blue" : "red";

  const handleOnclick = () => setButtonColor(newButtonColor);

  const handleCheckboxCheck = (e) => setCBState(e.target.checked);    //check not value :3
  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={handleOnclick}
        disabled={cbState}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" onClick={handleCheckboxCheck} />
    </div>
  );
}

export default App;
