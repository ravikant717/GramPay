import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import React from 'react'

const Home = () => {
  return (
<div className="flex flex-row gap-4">
  <Sidebar/>
  <div className='flex-1 ml-80 p-6'>
    <Outlet />

  </div>
</div>

  )
}

export default Home