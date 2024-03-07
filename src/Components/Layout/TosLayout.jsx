import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Pages/inc/Header'
import Footer2 from '../../Pages/inc/Footer2'
const TosLayout = () => {
  return (
    <div>
        <Header basic={true} />
        <main>
            <Outlet/>
        </main>
       <Footer2 />
    </div>
  )
}

export default TosLayout

