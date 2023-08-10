import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterInput, registerValidation } from './validation';



function CompleteProfile() {

    const { register, handleSubmit, setValue, formState: { errors, isValid } } = useForm<RegisterInput>({
        resolver: zodResolver(registerValidation)
    });
    const onSubmit1 = (data: RegisterInput) => console.log(data);


    return (
        <div>
            <dialog id="completeProfile" className="modal">

                <form method="dialog2" className="modal-box space-y-3" onSubmit={handleSubmit(onSubmit1)}>
                    <h2 className='text-center text-[30px] capitalize'>complete you profile </h2>
                    <button type='button'
                        onClick={() => (window as any).completeProfile.close()}

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
                        <div className='flex justify-around capitalize'>
                            <label className="label cursor-pointer space-x-2">
                                <span className="label-text">male</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" onClick={
                                    () => setValue('gender', 'MALE')}
                                />
                            </label>
                            <label className="label cursor-pointer space-x-2">
                                <span className="label-text">female</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" onClick={
                                    () => setValue('gender', 'FEMALE')
                                } />
                            </label>
                            <label className="label cursor-pointer space-x-2">
                                <span className="label-text">other</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" onClick={
                                    () => setValue('gender', 'OTHER')
                                } />
                            </label>
                        </div>
                        {errors.gender && <h1 className="text-error p-2 ">{errors.gender.message}</h1>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                        <input type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bendor"
                            {...register('age', { valueAsNumber: true })}
                        />
                        {errors.age && <h1 className="text-error p-2 ">{errors.age.message}</h1>}
                    </div>

                </form>



            </dialog>

        </div>
    )
}

export default CompleteProfile