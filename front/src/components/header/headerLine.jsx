import React from 'react'
import { Outlet } from 'react-router-dom'

const HeaderLine = () => {
  return (
   <>
    <h3>minkel app</h3>
    <Outlet/>
   </>
  )
}

export default HeaderLine