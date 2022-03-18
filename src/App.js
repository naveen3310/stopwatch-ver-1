import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import Times from "./alltimes";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [btnValue, setBtnValue] = useState("Start");
  const [darkToggle, setDarkToggle] = useState("Light");
  const count = useRef(null);

  const handleStart = () => {
    //start button logic here
    if (btnValue === "Start") {
      setIsActive(true);
      setIsPaused(true);
      count.current = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 10);
      //btn values
      setBtnValue("Pause");
    }
    if (btnValue === "Pause") {
      //pause button logic here
      clearInterval(count.current);
      setIsPaused(false);
      setBtnValue("Resume");
    }
    if (btnValue === "Resume") {
      //resume button logic here
      setIsPaused(true);
      count.current = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 10);
      setBtnValue("Pause");
    }
  };

  const handleReset = () => {
    //reset button logic here
    clearInterval(count.current);
    setIsActive(false);
    setIsPaused(false);
    setSeconds(0);
    setBtnValue("Start");
  };
  //dark mode
  function darkMode() {
    if (darkToggle === "Light") {
      document.documentElement.style.setProperty("--main-color", "#1A132F");
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#F7E2E2"
      );
      document.documentElement.style.setProperty("--hover-color", "#F7E2E2");
      setDarkToggle("Dark");
    } else if (darkToggle === "Dark") {
      document.documentElement.style.setProperty("--main-color", "#F10086");
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#180A0A"
      );
      document.documentElement.style.setProperty("--hover-color", "#180A0A");
      setDarkToggle("Light");
    }
  }
  return (
    <div>
      <button onClick={darkMode} className="darktoggle">
        {darkToggle}
      </button>
      <h1 className="main-heading">STOPWATCH</h1>
      <div className="time">
        <div className="child-container">
          <Times seconds={seconds} />
          <div className="all-btns">
            <button className="btn-first" onClick={handleStart}>
              {btnValue}
            </button>
            <button className="btn-second" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
      <p className="created">created by Naveen Kumar</p>
    </div>
  );
}

export default App;
