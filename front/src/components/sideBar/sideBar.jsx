import React from 'react'
import { Link } from 'react-router-dom'
import { UserGroupIcon } from "@heroicons/24/outline";
import Home from '../pages/home'
import Sales from '../pages/sales'
import Doubt from '../pages/doubt'
import Goals from '../pages/goals'
import Workers from '../pages/workers'

const SideBar = () => {
  return (
    <div className='flex flex-row-reverse'>
      
    
    <aside className='w-12 h-screen bg-purple '>
             <Link to={'/alog/home'}>
                <UserGroupIcon class="h-6 w-6 text-gray-500" />
             </Link>
    
{/*         
        
         <Link to={<Sales/>}>sales</Link>
        
        
         <Link to={<Doubt/>}>doubts</Link>
        
    
         <Link to={<Workers/>}>workers</Link>
        
        
         <Link to={<Goals/>}>goals</Link> */}
        

    </aside>
   
      </div>
  )
}

export default SideBar