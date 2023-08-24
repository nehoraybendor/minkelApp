import React, { useEffect, useState } from 'react'
import { HiOutlinePlusCircle } from "react-icons/hi";
import WorkInfo from './workInfo'
import { BASE_URL } from '../../constant'
import AddWorker from '../compos/addWorker';
const Workers = () => {
  const [sales, setSales] = useState([])
  const [loadning, setLoading] = useState(false)
  const url = 'http://' + BASE_URL + "/dealClient/list";
  useEffect(() => {fetchRequest()}, [])

  const fetchRequest = async () => {
    try {
      setLoading(true)
      const salesDB = await serviceAPI("GET", url)
      console.log(salesDB.data);
      setSales(salesDB.data)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }

  }

  
  return (
    <div className='mx-auto'>
    <button onClick={() => window.btnadworker.showModal()}>
        <HiOutlinePlusCircle className='w-14 h-14 text-gray-500 dark:text-gray-400 mt-12 -mb-20 mr-[400px]'/>
    </button>
      <h2 className='text-center text-[50px] mt-2'>WORKER</h2>
      <div className="flex flex-row flex-wrap justify-center mx-[32px]">
  {loadning ? (
    <span className="place-self-center loading loading-spinner loading-lg"></span>
  ) : (
    sales?.map((item, i) => (
      <div className="flex flex-row flex-wrap justify-center mx-[32px]">
      {loading ? (
          <span className="place-self-center loading loading-spinner loading-lg"></span>
      ) : (
          workers.map((worker, i) => (
              <div className="card card-side bg-base-100 shadow-xl h-[200px] w-[300px] m-[20px]" key={i}>
                  <figure>
                      <img className="w-[200px]" src={worker.img_profil.url} alt="Worker" />
                  </figure>
                  <div className="card-body">
                  <h2 className="card-title">{worker.name}</h2>
                            <p>Email: {worker.email}</p>
                            <p>Age: {worker.age}</p>
                            <p>Gender: {worker.gender}</p>
                            <p>Phone Number: {worker.phone_number}</p>
                            <p>Address: {worker.address}</p>
                            <p>Salary: {worker.salary}</p>
                  </div>
              </div>
          ))
      )}
  </div>
    ))
  )}
</div>

<AddWorker/>

      </div>




  
  )
}


export default Workers