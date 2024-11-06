import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { CounterAtom } from "./CounterAtom";

const Counter = () => {
  return (
    <>
      <RecoilRoot>
        <Display />
        <Increment />
        <Decrement />
      </RecoilRoot>
    </>
  );
};

const Display = () => {
  const count = useRecoilValue(CounterAtom);
  return <h1>{count}</h1>;
};

const Increment = () => {
  const handleIncrement = () => {
    setCount((c) => c + 1);
  };

  const setCount = useSetRecoilState(CounterAtom);
  return <button onClick={handleIncrement}>Increment</button>;
};

const Decrement = () => {
  const handleDecrement = () => {
    setCount((c) => c - 1);
  };
  const setCount = useSetRecoilState(CounterAtom);
  return <button onClick={handleDecrement}>Decrement</button>;
};

export default Counter;
