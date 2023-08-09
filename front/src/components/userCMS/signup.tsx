import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterInput, registerValidation } from './validation';



function Singup() {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<RegisterInput>({
        resolver: zodResolver(registerValidation)
    });
    const onSubmit1 = (data: RegisterInput) => console.log(data);


    return (
        <div>
            <dialog id="my_modal_2" className="modal">

                <form method="dialog2" className="modal-box" onSubmit={handleSubmit(onSubmit1)}>
                    <h2 className='text-center text-[30px]'>Sing Up</h2>
                    <button type='button'
                        onClick={() => (window as any).my_modal_2.close()}

                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>


                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                        <input type="text" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nehoray" 
                            {...register('fullName', {})}
                        />
                        {errors.fullName && <h1 className="text-error p-2 ">{errors.fullName.message}</h1>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                        <input type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bendor" 
                            {...register('gender', {})}
                        />
                        {errors.gender && <h1 className="text-error p-2 ">{errors.gender.message}</h1>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                        <input type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bendor" 
                            {...register('age', {})}
                        />
                        {errors.age && <h1 className="text-error p-2 ">{errors.age.message}</h1>}
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"
                            {...register('email', {})}
                             />
                        {errors.email && <h1 className="text-error p-2 ">{errors.email.message}</h1>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register('password', {})}
                             />
                        {errors.password && <h1 className="text-error p-2 ">{errors.password.message}</h1>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input type="confirmPassword" name="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            {...register("confirmPassword")} />
                        {errors.confirmPassword && <h1 className="text-error p-2 ">{errors.confirmPassword.message}</h1>}
                    </div>

                    <button  type="submit" className="btn btn-info">Sing Up</button>
                    <button  type="button" className="btn btn-info">Sing up using google</button>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Already have an account ? <a className="text-blue-600 hover:underline dark:text-blue-500 capitalize"
                            onClick={() => {
                                (window as any).my_modal_1.showModal();
                                (window as any).my_modal_2.close();
                            }}
                        >signIn</a>
                    </div>
                </form>



            </dialog>

        </div>
    )
}

export default Singup