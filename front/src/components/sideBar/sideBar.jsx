import React from 'react'
import { Link } from 'react-router-dom'
import { FaBeer } from 'react-icons/fa';
import { FiAlertCircle,FiUsers } from "react-icons/fi";
import Home from '../pages/home'
import Sales from '../pages/sales'
import Doubt from '../pages/doubt'
import Goals from '../pages/goals'
import Workers from '../pages/workers'

const SideBar = () => {
  return (
    <div className='flex flex-row-reverse'>
      
    
    <aside className='w-12 h-[90vh] bg-purple '>
      <ul className='grid gap-y-4'>
      <li>
             <Link to={'/alog/home'}>
               Home
             </Link>

    </li>
        
        <li>
         <p className='text-xs justify-center'>Sales</p>
        </li>
        <li>
         Doubt
        </li>
    <li>
        
         Workers
         
        </li>
        <li>
          Goals
         </li>
        </ul>

    </aside>
   
      </div>
  )
}

export default SideBar