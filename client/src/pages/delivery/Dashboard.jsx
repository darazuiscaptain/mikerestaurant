import React from 'react'
import SideBar from './component/SideBar'
import MainBoard from './component/MainBoard'

const Dashboard = () => {
  return (
    <div id="dashboard" className='flex w-full h-full'>
      <div id="sideBar">
        <Sidebar/>
      </div>
      <div id="main" className='flex flex-1 bg-blue-gray-50'>
        <MainBoard/>
      </div>
    </div>
  )
}

export default Dashboard
