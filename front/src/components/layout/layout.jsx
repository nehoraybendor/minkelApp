import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/header'
import SideBar from '../sideBar/sideBar'

const Layout = () => {
  return (
    <div className=''>

      <Header />

      <div className='flex flex-row justify-between'>
        <Outlet />
        <SideBar />

      </div>

    </div>
  )
}

export default Layout