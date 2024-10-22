import { useState } from 'react';
import './App.css'
import Notification from "./Notification"
import profileImage from "./assets/profile-image.png";

function App() {
  const [items,setItems] = useState([{
    id:1,
    isVeg:true,
    name:"Paneer Butter Masala",
    desp:"Paneer Butter Masala",
    price:279,
    image:"",
  },]);

  function add(){
    setItems([
      ...items,{
        id:1,
        isVeg:true,
        name:"Chiken Butter Masala",
        desp:"Chiken Butter Masala",
        price:499,
        image:"",
      }
    ])
  }

  return (
  <div className="itemComponent" style={{padding:"1rem 1rem",backgroundColor:"#e0e0e0",width:"100vw",height:"100vh",border:"1px solid #000",display:"flex",flexDirection:"column",rowGap:"2rem"}}>
      {
        items.map((item)=><ItemComponent key={item.id} isVeg={item.isVeg} itemName={item.name} itemDesp={item.desp} itemPrice={item.price} itemImage={item.image}/>)
      }
      <button onClick={add}>Add</button>
    </div>
  )
}

export function ItemComponent({isVeg,itemName,itemDesp,itemPrice}){
  return(
      <div className="item-container" style={{backgroundColor:"#fff",padding:".5rem .5rem",alignItems:"center",display:"flex",justifyContent:"space-between",border:"1px solid #000",borderRadius:"1rem"}}>
        <div className="user-details" style={{display:'flex',flexDirection:"column"}}>
          <span className='item-type' style={{fontSize:".8rem"}}>{isVeg ? "veg" : "nonveg"}</span>
          <span className='item-name' style={{fontSize:"1rem",fontWeight:"600"}}>{itemName}</span>
          <span className='item-description' style={{fontSize:".8rem",paddingTop:".6rem"}}>{itemDesp}</span>
          <span className='item-price' style={{fontSize:".8rem",fontWeight:"600",paddingTop:".4rem"}}>Rs. {itemPrice}</span>
        </div>
        <img src={profileImage} style={{width:"5rem",height:"5rem",borderRadius:".8rem"}}/>
      </div>
  )
}


export default App
