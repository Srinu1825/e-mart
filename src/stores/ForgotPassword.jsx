import React from 'react'
import { Link } from 'react-router-dom'
const ForgotPassword = () => {
  return (
 <div className='container'>
      <div className='header'>
          <div className='text'><h2>Reset Password</h2></div>
          <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src='./assets/locked-computer.png' alt="user" />
          <input type="email" placeholder='new password' />
        </div>
      </div>
        <div className='inputs'>
        <div className='input'>
          <img src="./assets/locked-computer.png" alt="password" />
          <input type="password" placeholder='re-type password' />
        </div>
      </div>
      <Link to='/signin'>
      <button type="submit" class="btn btn-primary">Submit</button></Link>
      </div>

 
  )
}

export default ForgotPassword

