import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

const Sigin = () => {
const navigate = useNavigate();

const [email,setEmail]=useState();
const[password,setPassword]= useState();


const handler=()=>{
  return(
    navigate('/')
  )
}

  return (
    <>
    <form onSubmit={handler}>
    <div className='container'>
      <div className='header'>
          <div className='text'><h2>SignIn</h2></div>
          <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src='./assets/user.png' alt="user" />
          <input type="email" placeholder='username'  onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
      </div>
        <div className='inputs'>
        <div className='input'>
          <img src="./assets/locked-computer.png" alt="password" />
          <input type="password" placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
      </div>
      <div>
  <Link to='/forgotPassword'>
      <p>Forgot password ?</p></Link>
      </div>
        <div>
  <Link to='/signup'>
      <p>Register</p></Link>
      </div>
   <button type="submit" className="btn btn-primary" >SignIn</button>
 
    </div>
    </form>
    </>
  )
}
export default Sigin