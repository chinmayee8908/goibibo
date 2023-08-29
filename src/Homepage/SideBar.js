import React from 'react'
import "./SideBar.css"
import{GiWantedReward} from "react-icons/gi"
import{IoIosArrowForward} from "react-icons/io"
import {AiOutlineClose} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
const SideBar = ({handleLogout,handleCloseSideBar}) => {
  const navigate=useNavigate()
  const handleProfile=()=>{
    navigate("/Profile")
  }
  return (
    <>
   <div className='SideBar-Container'>
    <div style={{display:"flex",flexDirection:"column"}}><div style={{display:"flex",justifyContent:"space-between",margin:"10px"}}><h3>Hey traveller
    </h3>
    <span onClick={handleCloseSideBar}><AiOutlineClose/></span>
    </div>
    <p style={{margin:"10px"}}>Get Exclusive Deals And manage Your trips </p>
    </div>
    <div className='subContainer' onClick={handleProfile}>
<GiWantedReward style={{height:"30px",width:"20px"}}/>
<div style={{display:"flex",flexDirection:"column",}} ><p>Profile</p>

</div>
<IoIosArrowForward/>
</div>
    <div className='subContainer'>
<GiWantedReward style={{height:"30px",width:"20px"}}/>
<div style={{display:"flex",flexDirection:"column",}}><p>GoTribe</p>
<h6 style={{fontSize:"8px"}}>travel more to get enroll</h6>
</div>
<IoIosArrowForward/>
</div>
<div className='subContainer'>
<GiWantedReward style={{height:"30px",width:"20px"}}/>
<div style={{display:"flex",flexDirection:"column",}}><p>Go Cash</p>
<h6 style={{fontSize:"8px"}}>travel more to get enroll</h6>
</div>
<IoIosArrowForward/>
</div>
<div className='subContainer'>
<GiWantedReward style={{height:"30px",width:"20px"}}/>
<div style={{display:"flex",flexDirection:"column",}}><p>Mytrip</p>
<h6 style={{fontSize:"8px"}}>travel more to get enroll</h6>
</div>
<IoIosArrowForward/>
</div>
<div className='subContainer'>
<GiWantedReward style={{height:"30px",width:"20px"}}/>
<div style={{display:"flex",flexDirection:"column",}}><p>offers</p>
<h6 style={{fontSize:"8px"}}>travel more to get enroll</h6>
</div>
<IoIosArrowForward/>
</div>
<div className='LogoutContainer'><button onClick={handleLogout}>LogOut</button>
</div>
  
   </div>
   
   </>
  )
}

export default SideBar