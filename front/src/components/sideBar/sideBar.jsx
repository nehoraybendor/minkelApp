import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BiHomeAlt2, BiShoppingBag } from "react-icons/bi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { GiBullseye } from "react-icons/gi";


const SideBar = () => {
  return (
    <div className='flex flex-row-reverse'>
      
    
    <aside className='w-12 h-[92.95vh] bg-purple flex flex-col justify-around '>
     <div>
             <Link to={'/minkel/home'} >
              <BiHomeAlt2 className='w-12 h-10 '/>
             </Link>
            
    </div>
     <div>
             <Link to={'/minkel/sales'} >
             <MdOutlineAddShoppingCart className='w-12 h-10 '/>
             </Link>
            
    </div>
     <div>
             <Link to={'/minkel/doubt'} >
             <BiShoppingBag className='w-12 h-10 '/>
             </Link>
            
    </div>
     <div>
             <Link to={'/minkel/workers'} >
             <HiOutlineUsers className='w-12 h-10 '/>
             </Link>
            
    </div>
     <div>
             <Link to={'/minkel/goals'} >
             <GiBullseye className='w-12 h-10'/>
             </Link>
            
    </div>
    </aside>
   <Outlet/>
      </div>
  )
}

export default SideBar