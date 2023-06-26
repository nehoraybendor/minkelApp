import React from 'react';
import Login from '../userCMS/login';
import Singup from '../userCMS/signup';
import GraphCol from '../graphs/graphCol';
import GraphLine from '../graphs/graphLine';
import GraphPie from '../graphs/graphPie';
import GraphArea from '../graphs/graphArea';

const HomePage = () => {

    return (
        <div className="home-page  pt-1 bg-gray-200">
            <div className="top-right-buttons flex justify-end mr-4">


                <button className="btn login-button bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={() => window.my_modal_1.showModal()}>Login</button>

                <button className="signup-button bg-green-500 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => window.my_modal_2.showModal()}>Sing Up</button>


            </div>
            <div className="main-section">
                <div className="rectangle p-4">
                    <h2 className="text-2xl text-right bg-purple font-bold">

                        האתר שינהל לך את העסק בלי יותר מידי דפים
                    </h2>
                </div>
                <div className="  bg-blue-300 flex col flex-wrap justify-center">

                    <div className="  flex col flex-wrap justify-center">
                        <GraphLine />
                        <GraphCol />
                        <GraphPie />
                        <GraphArea />

                    </div>

                </div>


                <Login />
                <Singup />


            </div>
        </div>
    )
}

export default HomePage