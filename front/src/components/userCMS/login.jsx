import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { MY_BASE_URL, TOKEN_KEY_NAME } from '../../constant';

function Login() {
    const nav = useNavigate()
    const { register, handleSubmit } = useForm();
    const onSubmit1 = data => login(data.email, data.password);

    const login = async (email, password) => {
        try {
            console.log("lsls");
            const response = await axios({
                method: 'post',
                url: 'http://' + MY_BASE_URL + '/users/login',
                headers: {
                    'x-api-key': TOKEN_KEY_NAME,
                },
                data: {
                    email: email,
                    password: password
                }
            })
            console.log(response);
            localStorage.setItem("token", response.data.token)
            console.log('we are logged in ');

            nav('minkel/home')

            return response
        } catch (error) {
            throw error
        }
    }
    return (
        <div>
            <dialog id="my_modal_1" className="modal">

                <form method="dialog1" className="modal-box" onSubmit={handleSubmit(onSubmit1)}>

                    <h2 className='text-center text-[30px]'>Login</h2>
                    <button
                        type='button'
                        onClick={() => window.my_modal_1.close()}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    {/* <form className="mt-8 space-y-4 p-4" > */}
                    <div>
                        <label htmlFor="emailog" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="emailog" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required   {...register('email', {})} />
                    </div>
                    <div>
                        <label htmlFor="passwordlog" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="passwordlog" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register('password', {})}

                            required />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            {/* <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"  /> */}
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
                        </div>
                        {/* <a href="#" className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Lost Password?</a> */}
                    </div>
                    <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Not registered yet? <a className="text-blue-600 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                    {/* </form> */}


                </form>
            </dialog>

        </div>
    )
}

export default Login