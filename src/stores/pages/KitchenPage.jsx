import React from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const KitchenPage = () => {

    const [selectedProduct,setSelectedProduct]= useState([])
    
    const companyHandler=(mango)=>{
        if(selectedProduct.includes(mango)){
            setSelectedProduct(selectedProduct.filter(item=>item!==mango))
        }else{
            setSelectedProduct([...selectedProduct,mango])
        }
    }
    
               const filteredProduct = selectedProduct.length===0?
                kitchenData : kitchenData.filter((orange)=>selectedProduct.includes(orange.brand))
                    
  return (
     <>
    <Navbar/> 
    <div className='fullPage' >
        <div className='pro-selected'>
            {
                kitchenData.map((phone)=>{
                    return(
                        <div className='pro-input'>
                            <label >
                                <input type="checkBox" 
                                checked={selectedProduct.includes(phone.brand)} 
                                onChange={()=>companyHandler(phone.brand)} />
                                {phone.brand}
                            </label>
                        </div>
                    )
                })
            }
           
        </div>
    <div className='pageSection'>
        {filteredProduct.map((item)=>{
            return(
                <div>
                       <div className='imgPage'>
                        <Link to={`/kitchens/${item.id}`}>
                         <img src={item.image} alt="" />
                         </Link>
                     </div>
                        <div className='proModel'>
                            {item.brand},{item.model}
                        </div>
                     </div>

            )
        })}
        
        
        </div>
        </div>
        </>
  )
}

export default KitchenPage