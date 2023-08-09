import axios from 'axios';
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { LoginInput, loginValidation } from './validation';
import { zodResolver } from '@hookform/resolvers/zod'

function Login() {
    const nav = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<LoginInput>({
        resolver: zodResolver(loginValidation)
    });
    const onSubmit1 = (data: LoginInput) => console.log(data);


    return (
        <div>
            <dialog id="my_modal_1" className="modal">

                <form method="dialog1" className="modal-box space-y-2" onSubmit={handleSubmit(onSubmit1)} >

                    <h2 className='text-center text-[30px]'>Login</h2>
                    <button
                        type='button'
                        onClick={() => (window as any).my_modal_1.close()}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    {/* <form className="mt-8 space-y-4 p-4" > */}
                    <div>
                        <label htmlFor="emailog" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="emailog" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required   {...register('email', {})} />
                        {errors.email && <h1 className="text-error p-2 ">{errors.email.message}</h1>}
                    </div>
                    <div>
                        <label htmlFor="passwordlog" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="passwordlog" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register('password', {})}

                            required />
                        {errors.password && <h1 className="text-error p-2 ">{errors.password.message}</h1>}
                    </div>
                    <div className="flex items-start">


                    </div>
                    <div className='flex justify-around'>
                        <button type="submit" className="btn btn-info">Login to your account</button>
                        <button type="submit" className="btn btn-outline btn-info">Login using google</button>
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white ">
                        Not registered yet? <a className="text-blue-600 hover:underline dark:text-blue-500"
                            onClick={() => {
                                (window as any).my_modal_2.showModal();
                                (window as any).my_modal_1.close();
                            }}
                        >Create account</a>
                    </div>
                    {/* </form> */}


                </form>
            </dialog>

        </div>
    )
}

export default Login