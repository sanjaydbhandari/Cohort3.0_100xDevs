import { useState } from "react"

export default function PropsDrilling(){
    const [lightState,setLightState] = useState(false);
    return(
        <Bulb lightState={lightState} setLightState={setLightState}/>
    )
}

const Bulb = ({lightState , setLightState}) =>{
    return(
        <>
        <BulbStatus lightState={lightState}/>
        <BulbToggle setLightState={setLightState}/>
        </>
    )
}

const BulbStatus = ({lightState}) =>{
    return(
            lightState ?  <p style={{color:"yellow"}}>Light ON</p> : <p>Light OFF</p>
    )
}

const BulbToggle = ({setLightState}) => {
    return(
        <button onClick={()=>{setLightState(prev=>!prev)}}>ON</button>
    )
}