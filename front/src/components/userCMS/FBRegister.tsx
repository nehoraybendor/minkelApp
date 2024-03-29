import axios from 'axios';
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { FBRegisterInput, FBRegisterValidation, LoginInput, loginValidation } from './validation';
import { zodResolver } from '@hookform/resolvers/zod'
import BasicLoading from '../LoadingScreen/BasicLoading';
import { signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider, getAuth, AuthError } from "firebase/auth"
import { googleSignIn } from './authF';
function FBRegister() {
    const navigate = useNavigate()
    const auth = getAuth()
    const { register, handleSubmit, setError, formState: { errors } } = useForm<FBRegisterInput>({
        resolver: zodResolver(FBRegisterValidation)
    });
    const onSubmit1 = async ({ email, password }: LoginInput) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/")
        } catch (error) {
            if ((error as any).code === "auth/email-already-in-use") setError('email',{message:"email already in use"});

            console.log((error as any).code);
        }
    }
    return (
        <div>

            <dialog id="FBRegister" className="modal">
                <form className="modal-box space-y-2" onSubmit={handleSubmit(onSubmit1)} >
                    {errors.root && <h1 className="text-error p-2 capitalize">{errors.root.message}</h1>}
                    <h2 className='text-center text-[30px] capitalize'>register</h2>
                    <button
                        type='button'
                        onClick={() => window.FBRegister.close()}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    {/* <form className="mt-8 space-y-4 p-4" > */}
                    <div>
                        <label htmlFor="emailog" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="emailog" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"    {...register('email', {})} />
                        {errors.email && <h1 className="text-error p-2  capitalize  ">{errors.email.message}</h1>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="passwordlog" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register('password', {})}

                        />
                        {errors.password && <h1 className="text-error p-2 capitalize">{errors.password.message}</h1>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register("confirmPassword")} />
                        {errors.confirmPassword && <h1 className="text-error p-2 capitalize">{errors.confirmPassword.message}</h1>}
                    </div>

                    <div className='flex-'>
                        <button type="submit" className="btn btn-info mt-3 mr-3">Sing Up</button>
                        <button type="button" className="btn btn-info" onClick={() => googleSignIn(auth, navigate)}>Sing up using google</button>
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Already have an account ? <button className="text-blue-600 hover:underline dark:text-blue-500 capitalize"
                            onClick={() => {
                              window.login.showModal();
                              window.FBRegister.close();
                            }}
                        >signIn</button>
                    </div>



                </form>
            </dialog>

        </div>
    )
}

export default FBRegister