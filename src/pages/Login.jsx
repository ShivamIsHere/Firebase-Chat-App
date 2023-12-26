import React, { useState } from 'react'
import { RxAvatar } from "react-icons/rx";
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth } from "../firebase"



const Login = () => {

  const [err,setErr] = useState(false);
  const navigate=useNavigate();

  const handleSubmit= async(e)=>{
      e.preventDefault()
      const email=e.target[0].value;
      const password=e.target[1].value;

      try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
      }catch(err){
        setErr(true);
      } 
  };
  return(
    <div className='formContainer'>
      <div className='formWrapper'>
        <spam className="logo">Giga Chat</spam>
        <spam className="title">Register</spam>
        <form onSubmit={handleSubmit}>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <button>Sign In</button>
            {err && <spam>Something went wrong</spam>}

        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
}

export default Login
