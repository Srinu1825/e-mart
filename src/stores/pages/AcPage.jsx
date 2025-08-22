import React from 'react'
import { acData } from '../data/ac'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const AcPage = () => {

const [selectedProduct,setSelectedProduct]= useState([])

const companyHandler=(mango)=>{
    if(selectedProduct.includes(mango)){
        setSelectedProduct(selectedProduct.filter(item=>item!==mango))
    }else{
        setSelectedProduct([...selectedProduct,mango])
    }
}

           const filteredProduct = selectedProduct.length===0?
            acData : acData.filter((orange)=>selectedProduct.includes(orange.company))
       


  return (
      <>
    <Navbar/>
     <div className='fullPage' >
            <div className='pro-selected'>
                {
                    acData.map((phone)=>{
                        return(
                            <div className='pro-input'>
                                <label >
                                    <input type="checkBox" 
                                    checked={selectedProduct.includes(phone.company)} 
                                    onChange={()=>companyHandler(phone.company)} />
                                    {phone.company}
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
                        <Link to={`/ac/${item.id}`}>
                         <img src={item.image} alt="" />
                         </Link>
                     </div>
                        <div className='proModel'>
                            {item.company},{item.model}
                        </div>
                     </div>
            )
        })}
              
        </div>
        </div>
        </>

  )
}

export default AcPage