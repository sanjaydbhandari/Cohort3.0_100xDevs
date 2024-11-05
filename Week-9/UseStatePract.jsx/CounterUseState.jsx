import React, { useState } from "react";

const CounterUseState = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>increament {count}</button>
    </div>
  );
};

export default CounterUseState;
