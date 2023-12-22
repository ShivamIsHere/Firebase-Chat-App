import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
      <img src='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
      <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>hello</p>
        <img src='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
      </div>
    </div>
  )
}

export default Message
