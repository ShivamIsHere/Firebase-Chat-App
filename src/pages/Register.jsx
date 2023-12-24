import React, { useState } from 'react'
import { RxAvatar } from "react-icons/rx";
import {createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import {auth,storage} from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
  const [err,setErr] = useState(false);

  const handleSubmit=async (e)=>{
      e.preventDefault()
      const displayName=e.target[0].value;
      const email=e.target[1].value;
      const password=e.target[2].value;
      const file=e.target[3].files[0];

      try{
      const res= await createUserWithEmailAndPassword(auth, email, password);

const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
uploadTask.on(

  (error) => {
    setErr(true);
  }, 
  () => {
     getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
      await updateProfile(res,user,{
        displayName,
        photoURL:downloadURL,
      });
    });
  }
);
      }catch(err){
        setErr(true);
      } 
  }




  return (

    <div className='formContainer'>
      <div className='formWrapper'>
        <spam className="logo">Giga Chat</spam>
        <spam className="title">Register</spam>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Name'/>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <input style={{display:"none"}} type='file' id="file"/>
            <label htmlFor='file'>
            <RxAvatar style={{ color: 'red' }} className="avatar"/>
            <spam>Select An Avatar</spam>
            </label>
            <button>Sign Up</button>
            {err && <spam>Something went wrong</spam>}

        </form>
        <p>You do have an account? Log in</p>
      </div>
    </div>
  )
}

export default Register
