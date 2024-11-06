import React, { memo, useState } from "react";

const HandleRerendering = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
      }}
    >
      <Counter count={count} />
      <Increment func={setCount} />
      <Decrement />
      <Footer />
    </div>
  );
};

const Counter = memo(({ count }) => {
  return <p>{count}</p>;
});
const Increment = memo(({ func }) => {
  //didn't participate in rerendering
  return <button onClick={() => func((c) => c + 1)}>Increment</button>;
});
const Decrement = () => {
  //participate in re-rendering
  return <button>Decrement</button>;
};
const Footer = memo(function () {
  //memo with anom function
  return <p>Footer</p>;
});

export default HandleRerendering;
