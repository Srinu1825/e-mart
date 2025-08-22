import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

  const navigate=useNavigate()
  const handler=()=>{
    return(
      navigate('/')
    )
  }
  return (
    <>
    <div className='container'>
      <div className='header'>
          <div className='text'><h2>SignUp</h2></div>
          <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src='./assets/user.png' alt="user" />
          <input type="email" placeholder='username' />
        </div>
      </div>
        <div className='inputs'>
        <div className='input'>
          <img src="./assets/locked-computer.png" alt="password" />
          <input type="password"placeholder='password' />
        </div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src="./assets/locked-computer.png" alt="password" />
          <input type="password" placeholder='confirm password' />
        </div>
      </div>

<button type="submit" class="btn btn-primary" onClick={handler}>SignUp</button>

    </div>
    </>
  )
}

export default Signup