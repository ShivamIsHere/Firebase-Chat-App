import React from 'react'
import { RxAvatar } from "react-icons/rx";


const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <spam className="logo">Giga Chat</spam>
        <spam className="title">Register</spam>
        <form>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <button>Sign In</button>

        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  )
}

export default Login
