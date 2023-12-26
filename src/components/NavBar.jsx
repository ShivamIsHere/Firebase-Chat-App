import { signOut } from 'firebase/auth';
import React, { useContext } from 'react'
import { RxAvatar } from "react-icons/rx";
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
  const {currentUser}= useContext(AuthContext)
  return (
    <div className='navbar'>
      <spam className="logo">Giga Chat</spam>
      <div className="user">
      <img src={currentUser.photoURL} alt=''/>
      <spam>{currentUser.displayName}</spam>
      <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
      
    </div>
  )
}

export default NavBar
