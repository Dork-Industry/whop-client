import React from 'react'

const CustomerSupport = () => {
  return (
<div className="my-20 cursor-pointer overflow-y-clip py-16 [content-visibility:auto] lg:py-32">
   <div className="relative mx-auto flex max-w-[662px] text-whop-offBlack flex-col items-center">
      <h2 className="display3 md:display2 md:text-3xl text-whop-black text-center">Customer support is always here to <br /> help you</h2>
      <div className="paragraph2 mt-2 text-center">We work around the clock to assist you. Drop us a message any time, and one of us will be happy to get back to you quickly</div>
      <div className="mt-10 flex w-full max-w-[662px] items-stretch justify-center">
         <div className="flex-1 undefined">
            <div className="text-whop-off-black text-center text-[28px] font-medium leading-[33px]">24/7</div>
            <div className="text3 text-whop-gray text-center">always available</div>
         </div>
         <div className="w-[1px] bg-black/10"></div>
         <div className="flex-1 undefined">
            <div className="text-whop-off-black text-center text-[28px] font-medium leading-[33px]">97%</div>
            <div className="text3 text-whop-gray text-center">satisfaction rate</div>
         </div>
         <div className="hidden w-[1px] bg-black/10 md:block"></div>
         <div className="flex-1 hidden md:block">
            <div className="text-whop-off-black text-center text-[28px] font-medium leading-[33px]">&lt;5 min</div>
            <div className="text3 text-whop-gray text-center">avg. response time on live chat</div>
         </div>
      </div>
      <div className="bg-whop-field-highlight absolute left-1/2 top-1/2 h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] opacity-50 blur-[250px] lg:h-[300px] lg:w-[1000px]"></div>
   </div>
</div>  )
}

export default CustomerSupport