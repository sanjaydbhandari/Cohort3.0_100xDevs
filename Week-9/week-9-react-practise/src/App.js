import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  function increament(){
      setCount((count)=>count+1)
  }
  function decreament(){
      setCount((count)=>count-1)
  }

  return (
    <div className="App">
      <Counter count={count}></Counter>
      <button onClick={increament}>increament</button>
      <button onClick={decreament}>decreament</button>
    </div>
  );
}

function Counter(props){
useEffect(()=>{
  console.log("mount")

  return ()=>{
    console.log("unmount")
  }
},[props.count])

  return <>
  <h1>Stopwatch</h1>
  <p>{props.count}</p>
  </>
}

export default App;
