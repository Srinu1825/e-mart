import React from 'react'
import{acData}from '../data/ac'
const Ac = () => {
    
     const firstFiveImages = acData.slice(0,5)
  return (
     <>
   <h2 className='proTitle'>Air Condiner</h2>
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

export default Ac