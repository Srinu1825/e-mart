import React from 'react'
import{acData} from '../data/ac'
import Navbar from '../components/Navbar'
import {useCart} from '../context/CartContext'
import { useParams } from 'react-router-dom'
const AcSingle = () => {

 const {id} =  useParams()

    const{cartItems,addItems}=useCart()

    const product = acData.find((item)=>item.id===id)

    console.log(id)

  return (
     <>
    <Navbar/>
    <div className='ind-page'>
        <div className='ind-image'>
            <img src={product.image} alt="" />
        </div>
            <div className='ind-details space'>
           <div className='ind-company'>
           <h2>{product.company}</h2> 
        </div>
        <div className='ind-model space'>
            <h2>{product.model}</h2>
        </div>
        <div className='ind-price space'>
            <h2>
            {product.price}
            </h2>
        </div>
          <div className='ind-desc space'>
            <p>
            {product.description}
            </p>
        </div>
        <button onClick={()=>{addItems(product);alert("item is added")}}><h4>Add to Cart</h4></button>
            </div>
    </div>
    </>
  )
}

export default AcSingle