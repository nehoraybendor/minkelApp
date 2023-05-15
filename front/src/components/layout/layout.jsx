import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/header'

const Layout = () => {
  return (
   <div className='w-screen bg-slate-400'>
   
    <Header/>
    <Outlet/>
   </div>
  )
}

export default Layout