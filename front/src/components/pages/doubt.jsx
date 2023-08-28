import React from 'react'
import { useEffect, useState } from 'react';
import DropdownButton from '../compos/dropDown';
import { BASE_URL } from '../../constant';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import Newand from '../compos/newand';

const Doubt = () => {
  const [doubt, setDoubt] = useState([])
  const [loadning, setLoading] = useState(false)
  const url = 'http://' + BASE_URL + "/dealSupplier/list";
  useEffect(() => {fetchRequest()}, [])

  const fetchRequest = async () => {
    try {
      setLoading(true)
      const doubtDB = await serviceAPI("GET", url)
      console.log(doubtDB.data);
      setDoubt(doubtDB.data)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className='mx-auto  '>
       <button onClick={() => window.btnaddeal.showModal()}>
        <HiOutlinePlusCircle className='w-11 h-11 text-gray-500 dark:text-gray-400 mt-12 -mb-20'/>
      </button>
      <h2 className='text-center text-[50px] mt-2'>DOUBT</h2>

      <div className="flex  justify-between my-5">
        <div className=''>
       <DropdownButton/>
        </div>
        <label for="table-search" className="sr-only">Search</label>
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
            Color
          </th>
          <th scope="col" className="px-6 py-3">
            Category
          </th>
          <th scope="col" className="px-6 py-3">
            Price
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

                {loadning ? <span className="place-self-center loading loading-spinner loading-lg"></span> :
                  doubt?.map((item, i) => {
                    return (
                      <div>
                        <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.name_supplier}
                          </th>
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.nameProducts}
                          </th>
                          <td className="px-6 py-4">
                            {item.price}
                          </td>
                          <td className="px-6 py-4">
                            {item.amount}
                          </td>
                          <td className="px-6 py-4">
                            {item.total_price}
                          </td>
                          <td className="px-6 py-4">
                            {item.time}
                          </td>
                          <td className="px-6 py-4">
                            <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
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
      <Newand/>
    </div>


  )
}

export default Doubt