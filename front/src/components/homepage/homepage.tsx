import React, { useEffect } from 'react';
import Login from '../userCMS/login';
import FBRegister from '../userCMS/FBRegister';
import CompleteProfile from '../userCMS/completeProfile';

const HomePage = () => {

    return (
        <div className="  pt-1   flex justify-center items-center h-[95vh] w-full">

            <div className=" space-y-5">



                <h3 className='text-4xl capitalize '>wellcome to MinkelAPP</h3>
                <div className='flex justify-center items-center  space-x-2'>
                    <button className="btn   btn-outline btn-primary rounded capitalize" onClick={() => (window as any).login.showModal()}>Login</button>

                    <button className="btn  btn-primary  rounded capitalize " onClick={() => (window as any).FBRegister.showModal()}>signup</button>


                </div>


                <Login />
                <CompleteProfile />
                <FBRegister />

            </div>
        </div>
    )
}

export default HomePage