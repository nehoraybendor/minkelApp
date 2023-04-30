import React, { useState } from 'react'


const Home = () => {
  const [ar, setAr] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
  return (
    <div >
      <div>
        <h1 className="text-3xl font-bold underline text-center">
          TailWindCss
        </h1>
      </div>
      <div className='flex flex-row flex-wrap justify-between md:p-[50px] p-[20px]'>

        {ar.map(item => (
          <>
            {item < 4 &&
              <div className='flex justify-center bg-center  bg-cover bg-[url("https://cdn.britannica.com/89/149189-050-68D7613E/Bengal-tiger.jpg?w=400&h=300&c=crop")] items-center shadow-lg border bg-blue-900 text-white md:mt-[1%] mt-[4%] h-[300px] lg:basis-[24.2%] md:basis-[32.5%] basis-full rounded-[20px] '>
              
              </div>}
          </>

        ))}

      </div>

    </div>
  )
}

export default Home