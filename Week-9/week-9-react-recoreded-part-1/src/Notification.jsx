import { useState } from 'react'


function Notification(){
    const [notification,setNotification] = useState(0);
    return(
    <div className="notification">
        Notification<span style={{color:"#fff",height:"10px", position:"relative",backgroundColor:"#ff0000",padding:"4px 6px", borderRadius:"1rem", top:"-10px",fontSize:"10px"}}>{notification}</span>
        <br/><button onClick={()=>setNotification((notification)=>notification+1)}>increment</button>
    </div>
    )
}

export default Notification;