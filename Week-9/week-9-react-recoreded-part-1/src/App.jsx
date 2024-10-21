import './App.css'
import Notification from "./Notification"
import profileImage from "./assets/profile-image.png";

let item=[{
  id:1,
  isVeg:true,
  itemName:"Paneer Butter Masala",
  itemDesp:"Paneer Butter Masala",
  itemPrice:279,
  itemImage:"",
}]
function App() {
  return (
    <PostComponent key={item.id} isVeg={item.isVeg} itemName={item.itemName} itemDesp={item.itemDesp} itemPrice={item.itemPrice} itemImage={item.itemImage}/>
  )
}

function PostComponent([isVeg,itemName,itemDesp,itemPrice]){
  return(
    <div className="itemComponent" style={{padding:"1rem 1rem",backgroundColor:"#e0e0e0",width:"100vw",height:"100vh",border:"1px solid #000",display:"flex",flexDirection:"column",rowGap:"2rem"}}>
      <div className="item-container" style={{backgroundColor:"#fff",padding:".5rem .5rem",alignItems:"center",display:"flex",justifyContent:"space-between",border:"1px solid #000",borderRadius:"1rem"}}>
        <div className="user-details" style={{display:'flex',flexDirection:"column"}}>
          <span className='item-type' style={{fontSize:".8rem"}}>{isVeg ? "veg" : "nonveg"}</span>
          <span className='item-name' style={{fontSize:"1rem",fontWeight:"600"}}>{itemName}</span>
          <span className='item-description' style={{fontSize:".8rem",paddingTop:".6rem"}}>{itemDesp}</span>
          <span className='item-price' style={{fontSize:".8rem",fontWeight:"600",paddingTop:".4rem"}}>Rs. {itemPrice}</span>
        </div>
        <img src={profileImage} style={{width:"5rem",height:"5rem",borderRadius:".8rem"}}/>
      </div>
    </div>
  )
}


export default App
