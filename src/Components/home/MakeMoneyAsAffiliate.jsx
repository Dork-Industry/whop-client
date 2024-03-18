import React from 'react'
import { Link } from 'react-router-dom'

const MakeMoneyAsAffiliate = () => {
  return (
<div className="padded-container overflow-x-clip pb-8 [content-visibility:auto] md:py-[120px]">
   <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
      <img alt="whop sellers icons" draggable="false" loading="lazy" width="512" height="210.82" decoding="async" data-nimg="1" className="h-44 object-cover object-bottom lg:h-auto text-transparent"   src="/assets/img/affiliate/sellers-grid.webp" />
      <div className="md:self-start lg:max-w-lg lg:self-center">
         <h2 className="sm:display2 text-4xl font-sans font-bold text-whop-black ">Make money as an affiliate</h2>
      
         <div className="paragraph2 mb-6 mt-2">Promote other products on Whop to earn cash. Our top affiliates make up to $1,000+ per month!</div>
       <div className='w-full flex justify-center md:justify-start'>
       <Link to={"/affiliates/"} className='bg-whop-black px-4 py-2 text-base font-semibold font-sans text-white rounded-md '>Become an Affiliate </Link>

       </div>
        
        
      </div>
   </div>
</div>  )
}

export default MakeMoneyAsAffiliate