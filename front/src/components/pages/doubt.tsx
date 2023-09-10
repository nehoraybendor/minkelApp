import React, { useEffect, useState } from 'react'
import DropdownButton from '../compos/dropDown';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { useDeleteSdealMutation, useFindAllSDealsQuery } from '../../redux/API/sellerDeals.api';
import AddDoubt from '../compos/addDoubt';
import { SupplierDealFromDB } from '../../types/entities/SupplierDeal';

const Doubt = () => {

  const { isError, error, isLoading, data, isSuccess } = useFindAllSDealsQuery(undefined)
  const [target, setTarget] = useState<SupplierDealFromDB>()
  const [deleteOne] = useDeleteSdealMutation()


  const actions = {
    edit: (data: SupplierDealFromDB) => {
      setTarget(data)
      window.addDoubt.showModal()
    },
    delete: async (data: SupplierDealFromDB) => {
      try {
        console.log(data._id);
        
        await deleteOne(data._id).unwrap()
      } catch (error) {
        console.log(error);

      }
    },
  }

 
  return (
    <div className='mx-auto  '>
      <button onClick={() => window.addDoubt.showModal()}>
        <HiOutlinePlusCircle className='w-11 h-11 text-gray-500 dark:text-gray-400 mt-12 -mb-20' />
      </button>
      <h2 className='text-center text-[50px] mt-2'>DOUBT</h2>

      <div className="flex  justify-between my-5">
        <div className=''>
          <DropdownButton />
        </div>
        <label className="sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
        </div>
      </div>

      <thead className="mb-[-30px] text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
        <tr>

          <th scope="col" className="px-6 py-3">
            Product name
          </th>
          <th scope="col" className="px-6 py-3">
            Supplier Name
          </th>
          <th scope="col" className="px-6 py-3">
            Amount
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            TotalPrice
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>

      <div className="relative shadow-md sm:rounded-lg mx-auto mb-[59px]  ">
        <table className="text-sm text-left text-gray-500 dark:text-gray-400 flex  flex-row justify-center ">
          <tbody>

            <div className='h-[300px]   ' >
              <style>
                {`
          .scrollbar {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
            &::-webkit-scrollbar {
              display: none; /* Chrome, Safari, and Opera */
            }
          }
          `}
              </style>

              <div className='grid absolute inset-0 overflow-auto scrollbar'>

                {isLoading ? <span className="place-self-center loading loading-spinner loading-lg"></span> :
                  isSuccess && data && data?.map((doubt, i) => {
                    const { amount, price, product_name, supplier_name } = doubt
                    return (
                      <div>
                        <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {supplier_name}
                          </th>
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {product_name}
                          </th>
                          <td className="px-6 py-4">
                            {price}
                          </td>
                          <td className="px-6 py-4">
                            {amount}
                          </td>
                          <td className="px-6 py-4">
                            {amount * price}
                          </td>
                          <td className="px-6 py-4">
                            <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              onClick={() => actions.edit(doubt)}
                            >Edit</button>
                          </td>
                          <td className="px-6 py-4">
                            <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              onClick={() => actions.delete(doubt)}
                            >Delete</button>
                          </td>

                        </tr>
                      </div>
                    )
                  })}



              </div>
            </div>
          </tbody>
        </table>




      </div>
      <AddDoubt target={target} />
    </div>


  )
}

export default Doubt