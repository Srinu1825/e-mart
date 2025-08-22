import React from 'react'
import{furnitureData} from '../data/furniture'
const Furnitures = () => {
    
     const firstFiveImages = furnitureData.slice(0,5)
  return (
      <>
    <h1>Furnitures</h1>
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

export default Furnitures