import React from 'react'
import {useCart} from '../stores/context/CartContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const UserCart = () => {

    const{cartItems,addItems,removeItems}=useCart()
     const navigate = useNavigate()

  const handleBuyNow = (item) => {
    // send the selected item to payment page
    navigate("/payment", { state: { product: item } })
  }
  
  return (
    <div>
        {
            cartItems.map((item)=>{
                return(
                    <div className='cart-section'>
                    <div className='cart-img'>
                        <img src={item.image} alt="" />
                    </div>
                    <div className='cart-details'>
                    <h2>{item.company}{item.brand}</h2>
                    <h3>{item.model}</h3>
                    <h3>
                        {item.price}
                    </h3>                  
                    </div>
                    <button  className='buy' onClick={() => handleBuyNow(item)}>Buy Now</button>
                    <button className='removeBtn' onClick={()=>removeItems(item)}>Remove</button>
                        </div>
                )
            })
        }
   <div className='back'>
    <Link to='/'>
    <button>back</button></Link>
   </div>
    </div>
  )
}

export default UserCart