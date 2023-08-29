import React, { useState } from 'react'
import {BsFillBagDashFill} from "react-icons/bs"
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css"
import img from "../Asset/logo.png"
import Button from 'react-bootstrap/Button';
import {MdFlightLand} from "react-icons/md"
import {BsFillTrainFreightFrontFill} from"react-icons/bs"
import {BsFillBusFrontFill} from "react-icons/bs"
import user from "../Asset/user.png"

const Header = ({openSignInModal,isSignedIn,handleOpenSideBar}) => {
  const name=localStorage.getItem("username")
  return (
    <div className='NavBar-Container'>
    <Navbar className='Header-Container'>
         <Navbar.Brand>
         <img className='logo' src={img} alt="no image" />
       </Navbar.Brand>
       <Navbar.Toggle />
       <div className='Button-Group'>
       <div style={{display:"flex",width:"70px",backgroundColor:'transparent',border:"1px solid grey ",borderRadius:"20px",justifyContent: "center", alignItems: "center"}} className='buttons'>
        <span style={{marginBottom:"10px"}}><MdFlightLand/></span>
        <h6 style={{fontSize:"12px"}}>Flights</h6>
        </div> 
        <div style={{display:"flex",width:"70px",backgroundColor:'transparent',border:"1px solid grey ",borderRadius:"20px",justifyContent: "center", alignItems: "center"}}className='buttons'>
        <span style={{marginBottom:"10px"}}><MdFlightLand/></span>
        <h6 style={{fontSize:"12px"}}>Hotels</h6>
        </div> 
        <div style={{display:"flex",width:"70px",backgroundColor:'transparent',border:"1px solid grey ",borderRadius:"20px",justifyContent: "center", alignItems: "center"}}className='buttons'>
        <span style={{marginBottom:"10px"}}><BsFillTrainFreightFrontFill/></span>
        <h6 style={{fontSize:"12px"}}>Trains</h6>
        </div> 
        <div style={{display:"flex",width:"70px",backgroundColor:'transparent',border:"1px solid grey ",borderRadius:"20px",justifyContent: "center", alignItems: "center"}}className='buttons'>
        <span style={{marginBottom:"10px"}}><MdFlightLand/></span>
        <h6 style={{fontSize:"12px"}}>Cabs</h6>
        </div> 
        <div style={{display:"flex",width:"70px",backgroundColor:'transparent',border:"1px solid grey ",borderRadius:"20px",justifyContent: "center", alignItems: "center"}}className='buttons'>
        <span style={{marginBottom:"10px"}}><BsFillBusFrontFill/></span>
        <h6 style={{fontSize:"12px"}}>Bus</h6>
        </div> 
        <div style={{display:"flex",width:"70px",backgroundColor:'transparent',border:"1px solid grey ",borderRadius:"20px",justifyContent: "center", alignItems: "center"}} className='buttons'>
        <span style={{marginBottom:"10px"}}><MdFlightLand/></span>
        <h6 style={{fontSize:"12px"}}>Holidays</h6>
        </div> 
      <div/>
      <div/>
      <div/> 
      </div>   
       
       <div style={{display:'flex',width:"200px",height:"45px",marginTop:"0px"}}>
        <span><BsFillBagDashFill/></span>
        <span style={{display:"flex",flexDirection:"column"}}>
          <p style={{height:"5px"}}>My trips</p>
          <h6 style={{height:"15px",marginBottom:"10px"}}>Manage Booking</h6>
        </span>         
       </div>
       <div style={{display:"flex",justifyContent:'space-between'}} >
          
       {isSignedIn ?(<button style={{border:"none",height:"50px",width:"150px",backgroundColor:"transparent",border:"1px solid blue",borderRadius:"10px"}} onClick={handleOpenSideBar}>Hy Traveller</button>) :(<button style={{ borderRadius: "5px",height:"50px",width:"150px",color:"blue", marginLeft:"30px"}} onClick={openSignInModal}>
              <img src={user} className='user'/>
                Login/signup</button>)}
              </div>
   </Navbar>
   
   </div>
  )
}

export default Header