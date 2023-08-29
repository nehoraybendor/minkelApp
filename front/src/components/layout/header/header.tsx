import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { getAuth, signOut } from 'firebase/auth';
import { useAppSelector } from '../../../redux/store';

const Header = () => {
    const auth = getAuth()
    const claimes = useAppSelector((slices) => slices.user.tokenData?.claims)
    return (
        <div className=" flex items-center justify-between space-x-2  bg-primary-content top-0 h-[5vh] min-w-full text-2xl p-2 px-5 text-accent-focus">
            <div className='flex items-center space-x-2 '>
                <Icon icon="streamline:money-graph-bar-increase-up-product-performance-increase-arrow-graph-business-chart" />
                <Link to={"/"}>MinkelAPP</Link>
            </div>

            <div className="dropdown dropdown-left">

                <div className="avatar cursor-pointer pt-3" tabIndex={0}>
                    <div className="w-10 rounded-full">
                        {auth?.currentUser?.photoURL ? <img src={auth?.currentUser?.photoURL} />
                            : <Icon icon="gg:profile" width={35} />
                        }
                    </div>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <div className='p-3 text-info'>
                        <p className=' text-center text-lg '>{auth.currentUser?.displayName ?? (claimes as any)?.fullName ?? "מנהל"}</p>
                        <p className=' text-center text-sm '>{auth?.currentUser?.email}</p>
                    </div>
                    <hr />
                    <li><a>Change password</a></li>
                    <li onClick={async () => await signOut(auth)}><a>Logout</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header