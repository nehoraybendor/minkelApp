import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const nav = useNavigate()
    return (
        <button onClick={()=>{
            nav("/")
        }} className="border-y border-current sticky z-50 bg-white top-0 h-10 min-w-full m-0 ">
            <img className='h-8' src="/assets/minkelimg.jpeg" alt="" />
        </button>
    )
}

export default Header