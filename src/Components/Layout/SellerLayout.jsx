import React from 'react'
import { Outlet } from 'react-router-dom'
import SellerHeader from '../SellerHeader'
import Footer2 from '../../Pages/inc/Footer2'
const SellerLayout = () => {
  return (
    <div>
       <SellerHeader /> 
       <main>
        <Outlet/>
       </main>
        <Footer2 />
    </div>
  )
}

export default SellerLayout