import React from 'react'
import { useForm } from 'react-hook-form';

const AddWorker = () => {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm();
  

  return (
    <div>
    <dialog id="btnadworker" className="modal">

        <form method="dialog2" className="modal-box" >
            <h2 className='text-center text-[30px]'>Worker</h2>
            <button type='button'
                onClick={() => window.btnadworker.close()}

                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>


            <div>
                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nehoray" required
                    {...register('name', {})}
                />
            </div>
  
            <div>
                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="konstya@gmail.com" required
                    {...register('email', {})}
                />

            </div>
            <div>
  <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
  <input
    type="text"
    name="imageURL"
    id="imageURL"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="https://example.com/image.jpg"
    required
    {...register('imageURL', {})}
  />
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
                <input type="text" name="address" id="address" placeholder="holon even shaul 23" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register('address', {})}
                    required />
            </div>
            <div>
                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Salary</label>
                <input type="number" name="salary" id="salary" placeholder="39.12" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register('salary', {})}
                    required />
            </div>
            <div>
                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                <input type="text" name="phonenumber" id="phonenumber" placeholder="+972-547868877" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register('phonenumber', {})}
                    required />
            </div>
            <div>
                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                <input type="text" name="age" id="age" placeholder="24" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register('age', {})}
                    required />
            </div>
            <button type='submit' className='btn btn-info mt-1' >save</button>

        </form>



    </dialog>

</div>
  )
}

export default AddWorker