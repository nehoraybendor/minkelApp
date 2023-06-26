import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/header'
import SideBar from '../sideBar/sideBar'

const Layout = () => {
  return (
   <div className='w-screen'>
   
    <Header/>
    <Outlet/>
    {/* <SideBar/> */}
   </div>
  )
}

export default Layout