import {useState,useEffect} from 'react'

export default function SideEffect(){
    const [count,setCount] = useState(0);
    
    useEffect(()=>{
        console.log("count is mounted")
    },[])

    useEffect(()=>{
        console.log("count is mounted or updated")
        return ()=>{
            clearInterval()
        }
    },[count])


    function increment(){
        setCount(count=>count+1)
    }
    return(
        isRunning && 
        <div className="counter">
            {count}<br></br>
            <button onClick={increment}>Increment</button>
        </div>
    )
    
}