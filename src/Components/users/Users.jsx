import React from 'react'
import SideBar from '../SideBar'

const Users = () => {
  return (
    <div>
      <SideBar/>
      <div className="flex justify-between">
        <h1>ORGANIZATION</h1>
        <h1>USERNAME</h1>
        <h1>EMAIL</h1>
        <h1>PHONE NUMBER</h1>
        <h1>DATE JOINED</h1>
        <h1> STATUS</h1>
      </div>
    </div>
  )
}

export default Users
