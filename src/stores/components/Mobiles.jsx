import React from 'react'

import {mobileData} from '../data/mobiles'
import { Link } from 'react-router-dom'
const Mobiles = () => {

        const firstFiveImages = mobileData.slice(0,5)


  return (
    <>
    <h2 className='proTitle'>Mobiles</h2>
    <div className='proSection'>
              
        {
            firstFiveImages.map((item)=>{
                return(
                    <Link to={`/mobiles/${item.id}`}>
                    <div className='imgBox'>
                        <img className='proimg' src={item.image} alt="" />

                    </div>
                    </Link>
                )
            })
        }
    </div>
    </>
  )
}

export default Mobiles