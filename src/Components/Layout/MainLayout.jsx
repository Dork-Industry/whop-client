import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Pages/inc/Header'
import Footer2 from '../../Pages/inc/Footer2'
const MainLayout = () => {
  return (
    <div>
        <Header />
        <main>
            <Outlet/>
        </main>
       <Footer2 />
    </div>
  )
}

export default MainLayout