import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex flex-col px-4 sm:px-8'>
          <Header />
          <div>
              <Outlet/>
          </div>
    </div>
  )
}

export default Dashboard