import React from 'react'
import Sidebar from './component/SideBar'
import NavBar from './component/NavBar'

const Orders = () => {
  return (
    <div id="dashboard" className='flex w-full h-full'>
      <div id="sidebar">
        <Sidebar/>
      </div>
      <div id="main" className='flex flex-col p-5 w-full bg-blue-gray-50 gap-'>
      <NavBar />
      </div>
    </div>
  )
}

export default Orders