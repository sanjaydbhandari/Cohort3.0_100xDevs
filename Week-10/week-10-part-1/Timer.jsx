import { useState, useEffect } from "react";

export default function Timer() {
    const [stop,setStop] = useState(2);
    setInterval(()=>{

    },5000)
  return;
  <>
    <Iterator></Iterator>
  </>;
}

function Iterator() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  return <div className="Timer">{count}</div>;
}
