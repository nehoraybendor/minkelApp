import React from 'react'
import GraphArea from '../graphs/graphArea'
import GraphCol from '../graphs/graphCol'
import GraphLine from '../graphs/graphLine'
import GraphPie from '../graphs/graphPie'

const Home = () => {
  return (
    <div>
            <h2 className='text-center text-[50px] mt-2'>GRAPH - ANALYTICS</h2>
    
      <div className="  flex col flex-wrap justify-center">
        <GraphLine />
        <GraphCol />
        <GraphPie />
        <GraphArea />

      </div>

    </div>
  )
}

export default Home