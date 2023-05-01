import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/home'
import Sales from '../pages/sales'
import Doubt from '../pages/doubt'
import Goals from '../pages/goals'
import Workers from '../pages/workers'

const SideBar = () => {
  return (
    <>
    <aside>
        
         <Link to={<Home/>}>homepage</Link>
        
        
         <Link to={<Sales/>}>sales</Link>
        
        
         <Link to={<Doubt/>}>doubts</Link>
        
    
         <Link to={<Workers/>}>workers</Link>
        
        
         <Link to={<Goals/>}>goals</Link>
        

    </aside>
      </>
  )
}

export default SideBar