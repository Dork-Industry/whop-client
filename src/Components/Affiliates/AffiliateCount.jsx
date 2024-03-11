import React from 'react'
import CountUp from 'react-countup';


const AffiliateCount = () => {
  return (
    <div className="bg-whop-hover flex items-center justify-center overflow-hidden gap-16 p-8 [content-visibility:auto] lg:gap-32">
    <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-2 text-3xl text-whop-black font-medium" aria-label="$ 269,342,652">
            $ <CountUp start={0} end={5919291} duration={3} />
            <div className="relative h-[14px] w-[14px]">
                <div className="bg-whop-field-highlight/30 absolute h-[14px] w-[14px] animate-ping rounded-full"></div>
                <div className="bg-whop-field-highlight/30 absolute h-[14px] w-[14px] animate-pulse rounded-full"></div>
                <div className="bg-whop-field-highlight absolute left-[3px] top-[3px] h-2 w-2 rounded-full"></div>
            </div>
        </div>
        <span className="text-base text-whop-gray">Rewarded to affiliates</span>
    </div>
    <div className="flex-col items-center justify-center gap-2 hidden sm:block">
        <div className="flex items-center justify-center gap-2 text-3xl text-whop-black font-medium" aria-label=" 5,118,768">
            <CountUp start={0} end={610173} duration={3} />
            <div className="relative h-[14px] w-[14px]">
                <div className="bg-whop-field-highlight/30 absolute h-[14px] w-[14px] animate-ping rounded-full"></div>
                <div className="bg-whop-field-highlight/30 absolute h-[14px] w-[14px] animate-pulse rounded-full"></div>
                <div className="bg-whop-field-highlight absolute left-[3px] top-[3px] h-2 w-2 rounded-full"></div>
            </div>
        </div>
        <span className="text-base text-whop-gray">Affiliate referrals</span>
    </div>
    <div className="flex-col items-center justify-center gap-2 hidden md:block">
        <div className="flex items-center justify-center gap-2 text-3xl text-whop-black font-medium" aria-label=" 10,213">
            <CountUp start={0} end={35537} duration={3} />
            <div className="relative h-[14px] w-[14px]">
                <div className="bg-whop-field-highlight/30 absolute h-[14px] w-[14px] animate-ping rounded-full"></div>
                <div className="bg-whop-field-highlight/30 absolute h-[14px] w-[14px] animate-pulse rounded-full"></div>
                <div className="bg-whop-field-highlight absolute left-[3px] top-[3px] h-2 w-2 rounded-full"></div>
            </div>
        </div>
        <span className="text-base text-whop-gray">Whop affiliates</span>
    </div>
</div>  )
}

export default AffiliateCount