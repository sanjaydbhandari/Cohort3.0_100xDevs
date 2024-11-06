import React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

import even from "./Selector/EvenSelector";
import counter from "../RecoilSelector/Counter";

const CounterComponent = () => {
  return (
    <div>
      <RecoilRoot>
        <Button />
        <Counter />
        <IsEven />
      </RecoilRoot>
    </div>
  );
};

const Counter = () => {
  const count = useRecoilValue(counter);
  return <p>{count}</p>;
};

const Button = () => {
  const setCount = useSetRecoilState(counter);

  const handleIncrement = () => {
    setCount((c) => c + 2);
  };
  const handleDecrement = () => {
    setCount((c) => c - 1);
  };

  return (
    <>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
};

const IsEven = () => {
  const isEven = useRecoilValue(even);
  return <p>{isEven ? "even" : "odd"}</p>;
};

export default CounterComponent;
