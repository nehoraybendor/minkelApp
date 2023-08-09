import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
const Header = () => {

    return (
        <div className=" flex items-center space-x-2  bg-primary-content top-0 h-[5vh] min-w-full text-2xl p-2 text-accent-focus">
            <Icon icon="streamline:money-graph-bar-increase-up-product-performance-increase-arrow-graph-business-chart" />
            <Link to={"/"}>MinkelAPP</Link>
        </div>
    )
}

export default Header