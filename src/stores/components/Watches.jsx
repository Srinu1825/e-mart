import React from 'react'

import{watchData} from '../data/watch'

const Watches = () => {

const firstFiveImages = watchData.slice(0,5)
  return (
     <>
    <h2 className='proTitle'>Watches</h2>
    <div className='proSection'>
              
        {
            firstFiveImages.map((item)=>{
                return(
                    <div className='imgBox'>
                        <img className='proimg' src={item.image} alt="" />

                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Watches