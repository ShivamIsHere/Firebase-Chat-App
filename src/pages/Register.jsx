import React from 'react'
import { RxAvatar } from "react-icons/rx";


const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <spam className="logo">Giga Chat</spam>
        <spam className="title">Register</spam>
        <form>
            <input type='text' placeholder='Name'/>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <input style={{display:"none"}} type='file' id="file"/>
            <label htmlFor='file'>
            <RxAvatar style={{ color: 'red' }} className="avatar"/>
            <spam>Select An Avatar</spam>
            </label>
            <button>Sign Up</button>

        </form>
        <p>You do have an account? Log in</p>
      </div>
    </div>
  )
}

export default Register
