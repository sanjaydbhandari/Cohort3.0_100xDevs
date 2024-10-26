import { createContext, useContext, useState } from "react"

const CounterAPI = createContext();

export default function ContextAPI1(){
    return(
        <CounterAPIProvider>
            <Counter />
        </CounterAPIProvider>
    )
} 

const CounterAPIProvider = ({children}) => {
    const [count,setCount] = useState(true)
    return(
        <CounterAPI.Provider value={{count,setCount}}>
        {children}
        </CounterAPI.Provider>
    )
}


const Counter = () => {
    return(
        <>
        <CounterAPIProvider>
            <DisplayCount></DisplayCount>
            <Increament></Increament>
            <Decrement></Decrement>
        </CounterAPIProvider>
        </>
    )
} 

const Increament = () => {
    const {count, setCount} = useContext(CounterAPI);
    return(
        <button onClick={()=>setCount(count+1)}>Increase</button>
    )
}
const Decrement = () => {
    const {count,setCount} = useContext(CounterAPI);
    return(
        <button onClick={()=>setCount(count-1)}>Decrese</button>
    )
}
const DisplayCount = () => {
    const {count} = useContext(CounterAPI);
    return(
        <p>{count}</p>
    )
}