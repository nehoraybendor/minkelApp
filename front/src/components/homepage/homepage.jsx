import React from 'react';
import Login from '../userCMS/login';
import Singup from '../userCMS/signup';
import GraphCol from '../graphs/graphCol';
import GraphLine from '../graphs/graphLine';
import GraphPie from '../graphs/graphPie';
import GraphArea from '../graphs/graphArea';

const HomePage = () => {

    return (
        <div className="  pt-1   flex justify-center items-center h-[95vh] w-full">

            <div className=" space-y-5">



                <h3 className='text-4xl capitalize '>wellcome to MinkelAPP</h3>
                <div className='flex justify-center items-center  space-x-2'>
                    <button className="btn   btn-outline btn-primary rounded capitalize" onClick={() => window.my_modal_1.showModal()}>Login</button>

                    <button className="btn  btn-primary  rounded capitalize " onClick={() => window.my_modal_2.showModal()}>signup</button>


                </div>


                <Login />
                <Singup />


            </div>
        </div>
    )
}

export default HomePage