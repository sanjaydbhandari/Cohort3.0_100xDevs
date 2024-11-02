import { useRef, useState } from "react";

export default function StopWatch() {
  const [count, setCount] = useState(0);
  //   const [intervalId, setIntervalId] = useRef(null);
  let intervalRef = useRef(null);

  function start() {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }

  function stop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{count}</h1>
      <div className="buttons">
        <button type="button" onClick={start}>
          Start
        </button>
        <button type="button" onClick={stop}>
          Stop
        </button>
      </div>
    </div>
  );
}
