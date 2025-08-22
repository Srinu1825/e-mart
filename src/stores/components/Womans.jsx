import React from 'react'
import {womanData} from '../data/woman'
const Womans = () => {
    const firstFiveImages = womanData.slice(0,5)
  return (
     <>
    <h2 className='proTitle'>Womans Fashion</h2>
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

export default Womans