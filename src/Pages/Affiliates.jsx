import React from 'react'
import BecomeAnAffiliate from '../Components/Affiliates/BecomeAnAffiliate'
import AffiliateCount from '../Components/Affiliates/AffiliateCount'
import HowItWorks from '../Components/Affiliates/HowItWorks'

const Affiliates = () => {
  return (
    <div className='lg:px-5 overflow-hidden'>
        <BecomeAnAffiliate  />
        <AffiliateCount  />
        <HowItWorks />
    </div>
  )
}

export default Affiliates