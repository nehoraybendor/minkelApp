import React from 'react'
import { useForm } from 'react-hook-form';
const Newand = () => {

    const { register, handleSubmit } = useForm();

    return (
        <div>
            <dialog id="btnaddeal" className="modal">

                <form method="dialog2" className="modal-box" >
                    <h2 className='text-center text-[30px]'>Deal</h2>
                    <button type='button'
                        onClick={() => window.btnaddeal.close()}

                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>


                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product</label>
                        <input type="text" name="product" id="product" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nehoray" required
                            {...register('product', {})}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total price</label>
                        <input type="text" name="totalPrice" id="totalPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bendor" required
                            {...register('totalPrice', {})}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sum</label>
                        <input type="text" name="sum" id="sum" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bendor" required
                            {...register('sum', {})}
                        />

                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                        <input type="amount" name="amount" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"
                            {...register('amount', {})}
                            required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time</label>
                        <input type="time" name="time" id="time" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register('time', {})}
                            required />
                    </div>
                    <button type='submit' className='btn btn-info mt-1' >Save</button>

                </form>



            </dialog>

        </div>
    )
}

export default Newand