import React from 'react'
import Sidebar from './component/Sidebar'
import MainBoard from './component/MainBoard'

const Dashboard = () => {
  return (
    <div className='flex w-full h-full'>
      <div id="sidebar">
        <Sidebar/>
      </div>
      <div id="main" className='flex flex-1 bg-blue-gray-50'>
        <MainBoard/>
      </div>
    </div>
  )
}

export default Dashboard