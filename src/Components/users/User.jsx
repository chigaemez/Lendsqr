import React from 'react'

const User = ({user}) => {
  return (
    <div className='flex'>
        
      <div className="flex my-3">
        <h1>{user.orgName}</h1>
        <h1 className='mx-7'>{user.userName}</h1>
      </div>
      
    </div>
  )
}

export default User
