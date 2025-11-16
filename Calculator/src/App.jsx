import { useState } from "react";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";

function App() {
  const [displayValue, setDisplayValue] = useState("");

  function onButtonClick(buttonName) {
    if (buttonName === "C") {
      setDisplayValue(""); // clear display
    } else if (buttonName === "=") {
      // simple evaluation without try/catch
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } else {
      // add button name (1, 2, +, etc.)
      setDisplayValue(displayValue + buttonName);
    }
  }

  return (
    <div className={styles.calculator}>
      <Display displayValue={displayValue} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
