import React from 'react'
import CountUp from 'react-countup';
const SellerCounts = () => {
  return (
    <div className="sell bg-black flex items-center justify-center gap-16 py-20  p-8 [content-visibility:auto] lg:gap-32">
    <div className="flex flex-col items-center justify-center gap-2">
       
        <span className="text-base text-whop-gray">Total Sellers on Whop</span>
        <div className="flex items-center justify-center gap-2 text-3xl text-whop-black font-medium" aria-label="$ 269,342,652">
            $ <CountUp start={0} end={123456789} duration={3} className='text-white' />
         
        </div>
    </div>
    <div className="flex-col items-center justify-center gap-2 hidden sm:block">
       
        <span className="text-base text-whop-gray">Total Processed on Whop</span>
        <div className="flex items-center justify-center gap-2 text-3xl text-white font-medium" aria-label=" 5,118,768">
            <CountUp start={0} end={456789} duration={3} />
           
        </div>
    </div>
    <div className="flex-col items-center justify-center gap-2 hidden md:block">
      
        <span className="text-base text-whop-gray">Memberships Sold on Whop</span>
        <div className="flex items-center justify-center gap-2 text-3xl text-white font-medium" aria-label=" 10,213">
            <CountUp start={0} end={6789} duration={3} />
           
        </div>
    </div>
</div>
  )
}

export default SellerCounts