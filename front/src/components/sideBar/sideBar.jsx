import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BiHomeAlt2, BiShoppingBag } from "react-icons/bi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { GiBullseye } from "react-icons/gi";


const SideBar = () => {
        return (
                <div className='border-y border-current sticky z-50 bg-white top-[43px] h-7'>
                        <aside  className='w-12 h-[92.95vh] flex flex-col justify-around mt-[-4px] h-100 bg-gray-50 focus:ring-blue-500 fXocus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '>
                                <div>
                                        <Link to={'/minkel/home'} >
                                                <BiHomeAlt2 className='w-12 h-10' />
                                        </Link>
                                </div>
                                <div>
                                        <Link to={'/minkel/sales'} >
                                                <MdOutlineAddShoppingCart className='w-12 h-10' />
                                        </Link>
                                </div>
                                <div>
                                        <Link to={'/minkel/doubt'} >
                                                <BiShoppingBag className='w-12 h-10' />
                                        </Link>
                                </div>
                                <div>
                                        <Link to={'/minkel/workers'} >
                                                <HiOutlineUsers className='w-12 h-10' />
                                        </Link>
                                </div>
                                <div>
                                        <Link to={'/minkel/goals'} >
                                                <GiBullseye className='w-12 h-10' />
                                        </Link>
                                </div>
                        </aside>

                </div>
        )
}

export default SideBar