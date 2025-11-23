import { createContext } from "react";

export const timerContext = createContext();



import { useState } from "react";
import { timerContext } from "./Context/timerContext";
import Timer from "./Components/Timer";

export default function App() {
  const [seconds, setSeconds] = useState(0);

  return (
    <timerContext.Provider value={[seconds, setSeconds]}>
      <Timer />
    </timerContext.Provider>
  );
}



import { useRef, useContext } from "react";
import { timerContext } from "../Context/timerContext";

export default function Timer() {
  const [time, setTime] = useContext(timerContext);
  const timeRef = useRef(null);

  const start = () => {
    if (!timeRef.current) {
      timeRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  return (
    <>
      <h1>{time}</h1>

      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}
