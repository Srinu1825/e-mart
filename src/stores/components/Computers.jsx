import React from 'react'
import{computerData} from '../data/computers'
import { Link } from 'react-router-dom'
const Computers = () => {

const firstFiveImages = computerData.slice(0,5)

  return (
    <>
    <h2 className='proTitle'>Computers</h2>
    <div className='proSection'>              
        {
            firstFiveImages.map((item)=>{
                return(
                   
                    <div className='imgBox'>
                         <Link to='/computers'>
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

export default Computers