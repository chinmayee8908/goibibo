import React from 'react'
import "../Profile/UserProfile.css"
import { BsCameraFill } from "react-icons/bs"
import { InputGroup } from 'react-bootstrap'
const UserProfile =({firstName,handlechange,handleProfileSave,birth,lastName,identity ,handlebirth, handlelastName, married,handleidenty,handlemarried}) => {
 
 const mobileNumber=localStorage.getItem('mobileNumber');
  return (
    <>
      
      <form className="form-Container">
        <div style={{ position: 'relative' }}>
          <div className='form-Header'>
            <div style={{ display: 'flex', position: "absolute", marginTop: "3%", marginLeft: "8%" }}>
              <div className='addUserIcon'><BsCameraFill style={{ height: "30px", width: "40px" }} />
                <span style={{ fontSize: "10px" }}>+Add</span>
              </div>
              <div style={{ marginLeft: "30px", marginTop: "30px", color: 'black', fontWeight: "bold", fontSize: "20px" }}>Hii {firstName}
              <p>{mobileNumber}</p>
              </div>
            </div>
          </div>
          <div className='AccountDetails'>
            <div className='AccountDetails-Container' >
              <div style={{ fontWeight: '500', fontSize: "17px" }}>Personal Information</div>
             <div style={{display:'flex',width:"500px", justifyContent:"space-between"}}><div style={{ display: "flex",flexDirection:"column", justifyContent: 'space-between', marginTop: "15px" }}>
                <span>Email Address</span>
                <span>email@gmail.com</span>
               
              </div>
              <div style={{ display: "flex", justifyContent: 'space-between', flexDirection:"column", marginTop: "15px" }}>
                <span>Mobile Number</span>
                <span>{mobileNumber}</span>
               
              </div>
              </div> 
            </div>

          </div>


          <div className='personalDetails'>
            <div className='personalDetails-Container'>
              
              <div style={{ display: "flex", justifyContent: 'space-between', marginTop: "20px" }}>
                <span> First Name</span>
                <input type='text' className='inputBox' value={firstName}
            onChange={handlechange} />

              </div>
              <div style={{ display: "flex", justifyContent: 'space-between', marginTop: "20px" }}>
                <span> Last Name</span>
                <input type='text' className='inputBox'   value={lastName} onChange={handlelastName}
            />

              </div>
              <div style={{ display: "flex", justifyContent: 'space-between', marginTop: "15px" }}>
                <span> BirthDay</span>
                <input type='date' className='inputBox'  value={birth} onChange={handlebirth}
             />
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <span  > Identity?</span>
                <input type="radio" onChange={handleidenty}  value="Male"
          checked={identity === "Male"} style={{marginLeft:"140px" }}/>Male
                <input type="radio" onChange={handleidenty}
          value="Female"
          checked={identity === "Female"} style={{marginLeft:"20px"}}/>Female

              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <span> Married?(optional)</span>
                <input type="radio" onChange={handlemarried}  value="unmarried"
          checked={married === "unmarried"} style={{marginLeft:"70px" }}/>unmarried
                <input type="radio" onChange={handlemarried}
          value="married"
          checked={married === "married"} style={{marginLeft:"20px"}}/>married
             </div>
             <button onClick={handleProfileSave} style={{backgroundColor:"orangered",width:"200px",marginLeft:"250px"}}> save</button>
            </div>

          </div>

          

        </div>
      </form>
    </>
  )
}

export default UserProfile