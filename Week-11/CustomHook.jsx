import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return {
    count,
    increment,
  };
}

export default function CustomHook() {
  const { count, increment } = useCounter();
  return (
    <>
      <button onClick={increment}>Increment{count}</button>
    </>
  );
}
