import React from 'react'
import "./ReviewPage.css"
import { useNavigate } from 'react-router-dom'
const ReviewPage = () => {
    const Navigate=useNavigate()
    const fare=localStorage.getItem("flightData")
    const handlepayment=()=>{
        Navigate("/payment")
    }
  return (
    <div style={{display:"flex",marginTop:"10px", justifyContent:"center",justifyContent:'space-evenly',width:"100vw"}}>
    <div className='Payment-Conatiner-1'>
        </div>
    <div className='Payment-Conatiner-2'>
        <h4> Fare Summary</h4>
        <div style={{display:'flex',width:"300px",height:"40px",justifyContent:"space-between",padding:"20px"}}> <p>BaseFare:{fare.price}
        </p>
     
        </div>
        
        <div style={{display:'flex',width:"300px",height:"40px",justifyContent:"space-between",padding:"20px"}}> <p>Taxes and SubCharges</p>
        <p> Rs.100</p>
        </div>
        <hr/>
        <div style={{display:'flex',width:"300px",height:"40px",justifyContent:"space-between",padding:"20px"}}> <p>SubTotal :</p>
        <p></p>
        </div>
        <div style={{display:'flex',width:"370px",height:"60px",justifyContent:"space-between",padding:"20px"}}> 
         
        
        </div>
        <button style={{height:"40px",width:"370px",backgroundColor:'orangered',marginTop:"100px",display:"flex",justifyContent:"space-between"}} 
        
        onClick={handlepayment} ><p style={{margin:"10px"}}>Amount To pay:</p>
        <p style={{margin:"10px"}}></p></button>
    </div>
  
    </div>
  )
}

export default ReviewPage