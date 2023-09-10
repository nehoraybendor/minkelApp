import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { ClientDealEntity, ClientDealFromDB, ClientDealSchema } from '../../types/entities/clientDeal';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreatCdealMutation } from '../../redux/API/clientDeals.api';

interface AddSaleProps {
    target?: ClientDealFromDB
}
const AddSale: FC<AddSaleProps> = ({ target }) => {

    const { register, handleSubmit, setError, formState: { errors } } = useForm<ClientDealEntity>({
        resolver: zodResolver(ClientDealSchema),
        values: { ...target } as any
    });
    const [createDeal, { isError, error, isLoading }] = useCreatCdealMutation()

    const onSub: SubmitHandler<ClientDealEntity> = async (data) => {
        try {
            console.log(data);
            const resp = await createDeal(data).unwrap()
            console.log(resp);

            window.addSale.close()
        } catch (error) {
            setError("root", { message: "Faild to create a new deal!" })
            console.log(error);
        }
    }
    return (
        <div>
            <dialog id="addSale" className="modal">

                <form onSubmit={handleSubmit(onSub)} className="modal-box" >
                    <h2 className='text-center text-[30px]'>Deal</h2>
                    <button type='button'
                        onClick={() => window.addSale.close()}

                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>


                    <div>
                        {errors.root && <h1 className="text-error p-2 ">{errors.root.message}</h1>}
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Product Name</label>
                        <input type="text" id="product" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nehoray"
                            {...register('product_name', {})}
                        />
                        {errors.product_name && <h1 className="text-error p-2 ">{errors.product_name.message}</h1>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> price</label>
                        <input type="text" id="totalPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bendor"
                            {...register('price', { valueAsNumber: true })}
                        />
                        {errors.price && <h1 className="text-error p-2 ">{errors.price.message}</h1>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                        <input type="text" id="sum" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bendor"
                            {...register('amount', { valueAsNumber: true })}
                        />
                        {errors.amount && <h1 className="text-error p-2 ">{errors.amount.message}</h1>}
                    </div>


                    <button type='submit' className='btn btn-info mt-1' >Save</button>

                </form>



            </dialog>

        </div>
    )
}

export default AddSale