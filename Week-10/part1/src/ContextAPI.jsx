import React, { createContext, useContext, useState } from "react"

const BulbContext = createContext();

export default function ContextAPI() {
    
    return(
        <BulbContextProvider>
            <Bulb />
        </BulbContextProvider>
    )
}

function BulbContextProvider ({children}) {
    const [lightState, setLightState] = useState(false);
    return(
        <BulbContext.Provider value={{lightState,setLightState}}>
        {children}
        </BulbContext.Provider>
    )
}

const Bulb = () =>{
    return(
        <>
        <BulbContextProvider>
            <BulbStatus />
            <BulbToggle />
        </BulbContextProvider>
            <Greeting/>
            {/* do not re-render */}
        </>
    )
}

const BulbStatus = () =>{
    const {lightState} = useContext(BulbContext);
    return(
        lightState ?  <p style={{color:"yellow"}}>Light ON</p> : <p>Light OFF</p>
    )
}

const BulbToggle = () => {
    const {setLightState} = useContext(BulbContext);
    return(
        <button onClick={()=>{setLightState(prev=>!prev)}}>ON</button>
    )
}

const Greeting = () => {
    return(
        <h1>hello</h1>
    )
}