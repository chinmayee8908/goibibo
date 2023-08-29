import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Navigation/Layout'
import Content from './Homepage/Content'
import Signin from './Signin/Signin'
import SideBar from './Homepage/SideBar'
import UserProfile from './Profile/UserProfile'
import FlightDetails from './Homepage/FlightDetails'
import ReviewPage from './Homepage/ReviewPage'
import Payment from './Payment/Payment'
import Success from './Success/Success'


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSignInModal = () => {
    setIsModalOpen(true);
  };

  const closeSignInModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  //phonenumber
  const [mobileNumber, setMobileNumber] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  
    useEffect(() => {
      const storedMobileNumber = localStorage.getItem('mobileNumber');
      if (storedMobileNumber) {
        setMobileNumber(storedMobileNumber);
        setIsSignedIn(true);
        setIsModalOpen(false)
      } else {
        setIsModalOpen(true); 
      }
    }, []);
  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };
  const handleSignIn = () => {
    localStorage.setItem('mobileNumber', mobileNumber);
    setIsSignedIn(true);
    setIsModalOpen(false);
    setMobileNumber("") 
  };
  // sideBar
  const [sideBarModal, setSidebarModal] = useState(false);
  const handleCloseSideBar = () => {
    setSidebarModal(false)
  }
  const  handleOpenSideBar=()=>{
    setSidebarModal(true)
  }
  const handleLogout = () => {
    setIsSignedIn(false);
    
    setMobileNumber('');
   
    localStorage.removeItem('mobileNumber');
  };
  //profile
  const [firstName, setFirstName] = useState('Traveller');
const [lastName, setlastName] = useState('');
const [birth, setbirth] = useState('');
const [identity, setidenty] = useState('');
const [married, setmarried] = useState('');
const handlechange = (e) => {
  const newFirstName = e.target.value;
  setFirstName(newFirstName);
 
};
const handlelastName=(e)=>{
  setlastName(e.target.value)
}
const handlebirth=(e)=>{
  setbirth(e.target.value)
}
const handleidenty=(e)=>{
  setidenty(e.target.value)
}
const handlemarried=(e)=>{
  setmarried(e.target.value)
}



const handleProfileSave = (e) => {
e.preventDefault();
// console.log("Saving profile data...");


localStorage.setItem('username', firstName);
setFirstName(firstName);

setlastName(lastName);

setbirth(birth);

setidenty(identity);

setmarried(married)


alert("successfully added")
};

  return (
    <BrowserRouter>
    <Routes>
    
<Route path='/' element={<Layout openSignInModal={openSignInModal} isSignedIn={isSignedIn} handleOpenSideBar={handleOpenSideBar}/>}>
<Route index element={<Content/>}/>
<Route path='/review' element={<ReviewPage/>}/>
</Route>
<Route path='/Profile' element={<UserProfile firstName={firstName} handleProfileSave={handleProfileSave} handlechange={handlechange}  lastName={lastName} birth={birth} identity={identity} handlebirth={handlebirth} handlelastName={handlelastName} handleidenty={handleidenty}  handlemarried={handlemarried}  married={married} />}/>
<Route path='flightDetails' element={<FlightDetails/>}/>
<Route path='payment' element={<Payment/>}/>
<Route path='success' element={<Success/>}/>
    </Routes>
  

    <Signin isOpen={isModalOpen} onClose={closeSignInModal} handleMobileNumberChange={handleMobileNumberChange} handleSignIn={handleSignIn} mobileNumber={mobileNumber}/>
    {sideBarModal && <SideBar handleCloseSideBar={handleCloseSideBar} handleOpenSideBar={handleOpenSideBar} sideBarModal={sideBarModal}  handleLogout={handleLogout}/>}
    </BrowserRouter>
   
  )
}

export default App