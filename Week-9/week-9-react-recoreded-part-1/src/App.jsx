import './App.css'
import Notification from "./Notification"
import profileImage from "./assets/profile-image.png"
function App() {
  return (
    <PostComponent />
  )
}

function PostComponent(){
  return(
    <div className="postComponent" style={{backgroundColor:"#e0e0e0",width:"400px"}}>
      <div className="post-content" style={{padding:"1rem 2rem"}}>

        <div className="profile-image" style={{display:"flex",flexDirection:"row"}}>
        <img src={profileImage} style={{width:"2rem",height:"2rem",borderRadius:"50%"}}/>
        <div className="user-details" style={{display:'flex',padding:"0rem 1rem",border:"1px solid #000",flexDirection:"column"}}>
          <span className='username' style={{fontSize:"1rem"}}>Sanjay Bhandari</span>
          <span className='followers-count' style={{fontSize:".6rem"}}>1000 followers</span>
          <span className='post-timestamp' style={{fontSize:".6rem"}}>12 min</span>
        </div>
      </div>
        <div className="post-description">
          100xdev hackathon
        </div>
      </div>
    </div>
  )
}


export default App
