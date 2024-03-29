import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterInput, registerValidation } from './validation';
import { useCreateUserMutation } from '../../redux/API/user.api';
import BasicLoading from '../LoadingScreen/BasicLoading';
import { getAuth } from 'firebase/auth';


function CompleteProfile() {
    const auth = getAuth()
    const navigate = useNavigate()
    const { register, handleSubmit, setValue, formState: { errors, isValid } } = useForm<RegisterInput>({
        resolver: zodResolver(registerValidation)
    });
    const [createUser, { isLoading, isSuccess, isError, error }] = useCreateUserMutation()
    const onSubmit1 = async (data: RegisterInput) => {
        try {
            console.log(data);
            if (!auth?.currentUser?.uid) {
                window.errorReload.showModal()
                throw new Error("faild  to auth")
            }
            await createUser({ ...data, uid: auth.currentUser.uid });
            const token = await auth.currentUser.getIdToken(true);



            window.completeProfile.close()
            navigate('/', { state: { refresh: "refresh" } });
        } catch (error) {
            console.log(error);
        }


    }

    if (isLoading) window.basicLoading.showModal()
    if (isSuccess) window.basicLoading.close()
    return (
        <div>
            <BasicLoading />
            <dialog id="completeProfile" className="modal">

                <form method="dialog2" className="modal-box space-y-3" onSubmit={handleSubmit(onSubmit1)}>
                    <h2 className='text-center text-[30px] capitalize'>Complete you profilee </h2>
                    <button type='button'
                        onClick={() => window.completeProfile.close()}

                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>


                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                        <input type="text" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register('fullName', {})}
                        />
                        {errors.fullName && <h1 className="text-error p-2 ">{errors.fullName.message}</h1>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                        <div className='flex justify-around capitalize'>
                            <label className="label cursor-pointer space-x-2">
                                <span className="label-text">Male</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" onClick={
                                    () => setValue('gender', 'MALE')}
                                />
                            </label>
                            <label className="label cursor-pointer space-x-2">
                                <span className="label-text">Female</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" onClick={
                                    () => setValue('gender', 'FEMALE')
                                } />
                            </label>
                            <label className="label cursor-pointer space-x-2">
                                <span className="label-text">Other</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" onClick={
                                    () => setValue('gender', 'OTHER')
                                } />
                            </label>
                        </div>
                        {errors.gender && <h1 className="text-error p-2 ">{errors.gender.message}</h1>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                        <input type="text" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            {...register('age', { valueAsNumber: true })}
                        />
                        {errors.age && <h1 className="text-error p-2 ">{errors.age.message}</h1>}
                    </div>
                    <button type='submit' className='btn btn-info' >save</button>
                </form>




            </dialog>

        </div>
    )
}

export default CompleteProfile