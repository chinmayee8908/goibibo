import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Homepage/Footer'
import Header from '../Homepage/Header'

const Layout = ({openSignInModal,isSignedIn, handleOpenSideBar}) => {
  return (
   <>
   <Header openSignInModal={openSignInModal} isSignedIn={isSignedIn} handleOpenSideBar={handleOpenSideBar}/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout