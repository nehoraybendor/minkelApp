import React from 'react';
import Login from '../userCMS/login';
import Singup from '../userCMS/signup';
<<<<<<< HEAD
=======
import GraphCol from '../graphs/graphCol';
import GraphLine from '../graphs/graphLine';
import GraphPie from '../graphs/graphPie';
import GraphArea from '../graphs/graphArea';
>>>>>>> be015d3a5c23175e316c971bb481ebac628cc1e6

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
<<<<<<< HEAD
                    <div className="  bg-blue-300 flex col flex-wrap justify-center">
                        
                       
=======
                    <div className="  flex col flex-wrap justify-center">
                        <GraphLine/>
                       <GraphCol/>
                       <GraphPie/>
                       <GraphArea/>
>>>>>>> be015d3a5c23175e316c971bb481ebac628cc1e6

                    </div>

            </div>


            <Login />
            <Singup />


        </div>
    );
};
export default HomePage;