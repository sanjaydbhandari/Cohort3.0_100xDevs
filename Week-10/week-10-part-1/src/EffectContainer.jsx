import { useEffect, useState } from "react";

export default function EffectContainer() {
  const [state, setState] = useState(true);
  return (
    <div className="EffectContainer">
      {state && <EffectCounter></EffectCounter>}
      <button
        type="button"
        onClick={(e) => setState(!state)}
        style={{ display: "flex", margin: "1rem auto" }}
      >
        {state ? "hide" : "show"}
      </button>
    </div>
  );
}

function EffectCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count mounted");

    return () => {
      console.log("count unmounted"); // it run when unmounted(best practice)
    };
  }, []);

  useEffect(() => {
    console.log("count mounted and updated");
    return () => {
      console.log("count unmounted"); // it run when unmounted and at the start because data unmount before mounting()
    };
  }, [count]);

  return (
    <div
      className="counter"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div
        className="countercard"
        style={{
          display: "flex",
          border: "1px solid #000",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>{count}</h1>
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            margin: "1rem",
          }}
        >
          <button
            type="button"
            style={{ padding: ".5rem" }}
            onClick={(e) => setCount((count) => count + 1)}
          >
            +
          </button>
          <button
            type="button"
            onClick={(e) => setCount((count) => count - 1)}
            style={{ padding: ".5rem" }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
