import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BiHomeAlt2, BiShoppingBag } from "react-icons/bi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { GiBullseye } from "react-icons/gi";


const SideBar = () => {
        return (
              
                        <aside  className='bg-secondary-content w-12 h-[95vh] flex flex-col justify-around   '>
                                <div>
                                        <Link to={'/sales'} >
                                                <MdOutlineAddShoppingCart className='w-12 h-10' />
                                        </Link>
                                </div>
                                <div>
                                        <Link to={'/doubt'} >
                                                <BiShoppingBag className='w-12 h-10' />
                                        </Link>
                                </div>
                                <div>
                                        <Link to={'/workers'} >
                                                <HiOutlineUsers className='w-12 h-10' />
                                        </Link>
                                </div>
                                <div>
                                        <Link to={'/goals'} >
                                                <GiBullseye className='w-12 h-10' />
                                        </Link>
                                </div>
                        </aside>

        )
}

export default SideBar