import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../userCMS/login';
import Singup from '../userCMS/signup';
import Graph from '../compos/graph';

const HomePage = () => {






    return (
        <div className="home-page bg-gray-200">
            <div className="top-right-buttons flex justify-end mt-4 mr-4">


                <button className="btn login-button bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={() => window.my_modal_1.showModal()}>Login</button>

                <button className="signup-button bg-green-500 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => window.my_modal_2.showModal()}>Sing Up</button>


            </div>
            <div className="main-section">
                <div className="rectangle bg-white p-4">
                    <h2 className="text-2xl font-bold">
                        ברוכים הבאים לאפליקציה Minkel
                    </h2>
                </div>
                    <div className="  bg-blue-300 flex col flex-wrap justify-center">
                        
                        <Graph />
                        <Graph />
                        <Graph />

                        <Graph />

                    </div>

            </div>


            <Login />
            <Singup />


        </div>
    );
};
export default HomePage;