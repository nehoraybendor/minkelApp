import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const nav = useNavigate()
    return (
        <button onClick={()=>{
            nav("/")
        }} className=" border-current sticky z-50 bg-secondary top-0 h-[5vh] min-w-full ">
            <img className='h-8' src="/assets/minkelimg.jpeg" alt="" />
        </button>
    )
}

export default Header