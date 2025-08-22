import React from 'react'
import{menData} from '../data/men'
import { Link } from 'react-router-dom'
const Mens = () => {

 const firstFiveImages = menData.slice(0,5)
  return (
     <>
  <h2 className='proTitle'>Mens Fashions</h2>
    <div className='proSection'>

        {
            firstFiveImages.map((item)=>{
                return(
                    <div className='imgBox'>
                        <Link to='/mens'>
                        <img className='proimg' src={item.image} alt="" />
                        </Link>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Mens