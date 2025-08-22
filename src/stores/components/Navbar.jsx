import React from 'react'
import { Link } from 'react-router-dom'
import{useCart} from '../context/CartContext'
const Navbar = () => {

const{cartItems,addItems,removeItems}=useCart()


  return (
    <>
    <div  className='navSection'>
        <div className='title'>
          <Link to ='/'>
            <h2>E-Mart</h2></Link>
        </div>
        <div className='search'>
            <input className='input' type="text" placeholder='search'/>
        </div>
        <div className='user'>
            <div className='userDetails'>
              <Link to='/signin'>
                 <button>SignIN</button></Link>
                <Link  to='/signup'>
                <button> SignUp</button> </Link>                    
            </div>
            
              <div className='cart'>
                <Link to='/cart'>
                Cart
                </Link> 
                <span>
                  {cartItems.length}
                </span>
                </div> 
                       
        </div>
    </div>
    <div className='subMenu'>
        <ul>
          <Link to='/mobiles'>
            <li>Mobiles</li></Link>
          <Link to='/computers'>
            <li>Computers</li></Link>
            <Link to = '/watches'>
            <li>Watches</li></Link>
            <Link to= '/mens'>
            <li>Mens Fashion</li></Link>
            <Link to='/womans'>
            <li>Womans Fashion</li></Link>  
            <Link to='/ac'>
            <li>AC</li></Link>
            <Link to='/kitchens'>
            <li>Kitchen</li></Link>
             <Link to='/furnitures'>
            <li>Furnitures</li></Link>
            
        </ul>
    </div>
    </>
  )
}

export default Navbar