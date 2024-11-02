import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // run on mount only

  useEffect(() => {
    console.log("count : ", count);
  }, [count]); //run on count state changes (value changes)

  return (
    <div className="Counter">
      <center>
        <p>{count}</p>
        <button>Increment</button>
      </center>
    </div>
  );
}
