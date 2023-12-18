import React from 'react'
import { RxAvatar } from "react-icons/rx";

const NavBar = () => {
  return (
    <div className='navbar'>
      <spam className="logo">Giga Chat</spam>
      <div className="user">
      <img src='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
      <spam>Shivam</spam>
      <button>Logout</button>
      </div>
      
    </div>
  )
}

export default NavBar
