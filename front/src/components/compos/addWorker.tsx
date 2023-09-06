import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { WorkerEntity, WorkerSchema } from '../../types/entities/worker';
import { useCreateWorkerMutation } from '../../redux/API/workers.api';
import { zodResolver } from '@hookform/resolvers/zod';

const AddWorker = () => {

    const { register, handleSubmit, setValue, formState: { errors, isValid } } = useForm<WorkerEntity>({ resolver: zodResolver(WorkerSchema) });
    const [createWorker, { error, isError, isLoading, isSuccess }] = useCreateWorkerMutation()
    const submit: SubmitHandler<WorkerEntity> = async (data) => {
        console.log(data);

        try {
            const resp = await createWorker(data).unwrap();
            console.log("sucsess ", resp);
            window.addWorker.close()
        } catch (error) {
            console.log(error);
        }


    }
    return (
        <div>
            <dialog id="addWorker" className="modal">

                <form onSubmit={handleSubmit(submit)} className="modal-box" >
                    <h2 className='text-center text-[30px]'>Worker</h2>
                    <button type='button'
                        onClick={() => window.addWorker.close()}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nehoray" required
                            {...register('name')}
                        />
                        {errors.name && <h1 className="text-error p-2 ">{errors.name.message}</h1>}
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="konstya@gmail.com" required
                            {...register('email')}
                        />
                        {errors.email && <h1 className="text-error p-2 ">{errors.email.message}</h1>}
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
                        <input
                            type="text"

                            id="imageURL"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="https://example.com/image.jpg"
                            required
                            {...register('profil_url')}
                        />
                        {errors.profil_url && <h1 className="text-error p-2 ">{errors.profil_url.message}</h1>}
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
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
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input type="text" id="address" placeholder="holon even shaul 23" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register('address')}
                            
                            required />
                            {errors.address && <h1 className="text-error p-2 ">{errors.address.message}</h1>}
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Salary</label>
                        <input type="number" id="salary" placeholder="39.12" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register('salary',{valueAsNumber:true})}
                            required />
                            {errors.salary && <h1 className="text-error p-2 ">{errors.salary.message}</h1>}
                    </div>
                    
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                        <input type="text" id="phonenumber" placeholder="+972-547868877" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register('phone_number')}
                            required />
                            {errors.phone_number && <h1 className="text-error p-2 ">{errors.phone_number.message}</h1>}
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                        <input type="text" id="age" placeholder="24" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register('age',{valueAsNumber:true})}
                            required />
                            {errors.age && <h1 className="text-error p-2 ">{errors.age.message}</h1>}
                    </div>
                    <button type='submit' className='btn btn-info mt-1' >save</button>

                </form>



            </dialog>

        </div>
    )
}

export default AddWorker