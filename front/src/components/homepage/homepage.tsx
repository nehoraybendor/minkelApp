import React, { useEffect } from 'react';
import Login from '../userCMS/login';
import FBRegister from '../userCMS/FBRegister';
import CompleteProfile from '../userCMS/CompleteProfile';

const HomePage = () => {

    return (
        <div className="  pt-1   flex justify-center items-center h-[95vh] w-full">

            <div className=" space-y-5">



                <h3 className='text-4xl capitalize '>Wellcome to MinkelAPP</h3>
                <div className='flex justify-center items-center  space-x-2'>
                    <button className="btn   btn-outline btn-primary rounded capitalize" onClick={() => window.login.showModal()}>Login</button>

                    <button className="btn  btn-primary  rounded capitalize " onClick={() => window.FBRegister.showModal()}>signup</button>


                </div>


                <Login />
                <CompleteProfile />
                <FBRegister />

            </div>
        </div>
    )
}

export default HomePage