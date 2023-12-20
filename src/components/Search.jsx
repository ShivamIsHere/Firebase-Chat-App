import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a User'/>
      </div>
      <div className="userChat">
        <img src='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
        <div className="userChatInfo">
          <span>Shivam</span>
        </div>
      </div>
    </div>
  )
}

export default Search
