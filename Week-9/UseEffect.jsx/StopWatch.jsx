import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(false);

  const name = localStorage.getItem("name");

  useEffect(() => {
    if (state) {
      const intervalId = setTimeout(() => {
        setCount((c) => c + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [count, state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", e.target[0].value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        border: "1px solid #000",
        lineHeight: "3rem",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">submit</button>
      </form>
      <h3>StopWatch {name}</h3>
      <h1>{count}</h1>
      <button onClick={() => setState((prev) => !prev)}>
        {state ? "stop" : count !== 0 ? "resume" : "start"}
      </button>
    </div>
  );
};

export default StopWatch;
