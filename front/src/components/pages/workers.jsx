import React from 'react'
import Table from '../compos/table'
import WorkInfo from './workInfo'

const Workers = () => {
  const profile = {
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    name: "Ori Aboudi",
    info: "Click the button to "
  }
  return (
    <div>
      <h2 className='text-center text-[50px] mt-2'>WORKER</h2>
      <div className="flex flex-row flex-wrap justify-center mx-[32px]">


        <div className="card card-side bg-base-100 shadow-xl h-[200px] w-[300px] m-[20px]">
          <figure><img className='w-[200px]' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-[-20px] " onClick={() => window.my_modal_2.showModal()}>Watch</button>

            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl h-[200px] w-[300px] m-[20px]">
          <figure><img className='w-[200px]' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-[-20px] ">Watch</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl h-[200px] w-[300px] m-[20px]">
          <figure><img className='w-[200px]' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-[-20px] ">Watch</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl h-[200px] w-[300px] m-[20px]">
          <figure><img className='w-[200px]' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-[-20px] ">Watch</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl h-[200px] w-[300px] m-[20px]">
          <figure><img className='w-[200px]' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-[-20px] ">Watch</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl h-[200px] w-[300px] m-[20px]">
          <figure><img className='w-[200px]' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-[-20px] ">Watch</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl h-[200px] w-[300px] m-[20px]">
          <figure><img className='w-[200px]' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-[-20px] ">Watch</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl h-[200px] w-[300px] m-[20px]">
          <figure><img className='w-[200px]' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-[-20px] ">Watch</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl h-[200px] w-[300px] m-[20px]">
          <figure><img className='w-[200px]' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-[-20px] ">Watch</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl h-[200px] w-[300px] m-[20px]">
          <figure><img className='w-[200px]' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-[-20px] ">Watch</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl h-[200px] w-[300px] m-[20px]">
          <figure><img className='w-[200px]' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-[-20px] ">Watch</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl h-[200px] w-[300px] m-[20px]">
          <figure><img className='w-[200px]' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-[-20px] ">Watch</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl h-[200px] w-[300px] m-[20px]">
          <figure><img className='w-[200px]' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-[-20px] ">Watch</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl h-[200px] w-[300px] m-[20px]">
          <figure><img className='w-[200px]' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-[-20px] ">Watch</button>
            </div>
          </div>
        </div>


      </div>
      <WorkInfo profile={profile} />



    </div>
  )
}

export default Workers