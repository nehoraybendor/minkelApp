import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { MY_BASE_URL } from '../../constant';

function Singup() {
   
    const { register, handleSubmit } = useForm();
    const onSubmit1 = data => singup(data);


    const singup = async (data) => {
        try {
            console.log(data);
            data.age = Number(data.age)
            const response = await axios({
                method: 'post',
                url: 'http://' + MY_BASE_URL + '/users',
                headers: {
                    'x-api-key': localStorage.getItem('token')
                },
                data: data
            })
            console.log(response);
            localStorage.setItem("token", response.data.token)
            console.log('we are logged in ');

            window.my_modal_2.close()
            window.my_modal_1.showModal()
        
            return response
        } catch (error) {
            throw error
        }
    }












    return (
        <div>
            <dialog id="my_modal_2" className="modal">

                <form method="dialog2" className="modal-box" onSubmit={handleSubmit(onSubmit1)}>
                    <h2 className='text-center text-[30px]'>Sing Up</h2>
                    <button type='button'
                        onClick={() => window.my_modal_2.close()}

                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>


                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                        <input type="text" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nehoray" required
                            {...register('name', {})}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                        <input type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bendor" required
                            {...register('gender', {})}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                        <input type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bendor" required
                            {...register('age', {})}
                        />

                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"
                            {...register('email', {})}
                            required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register('password', {})}
                            required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>

                    <button type="submit" className="w-full px-8 py-2.5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sing Up</button>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Already have an account ? <a className="text-blue-600 hover:underline dark:text-blue-500">Singup</a>
                    </div>
                </form>



            </dialog>

        </div>
    )
}

export default Singup