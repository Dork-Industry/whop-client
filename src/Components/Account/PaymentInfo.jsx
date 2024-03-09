import React from 'react'

const PaymentInfo = () => {
  return (
<div>
   <h5 className="mb-3 font-semibold">Cards on file</h5>
   <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring mt-3 bg-whop-background text-whop-fieldHighlight border-whop-stroke border text-button4 font-semibold h-10 px-[15px]">
      <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
      <div className="z-10 flex items-center justify-center">
         <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" className="svg-inline--fa fa-plus fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"></path>
         </svg>
         <div className="">Add a payment method</div>
      </div>
   </button>
   <h5 className="mb-3 mt-10 font-semibold">Crypto wallets</h5>
   <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring mb-10 mt-3 bg-whop-background text-whop-fieldHighlight border-whop-stroke border text-button4 font-semibold h-10 px-[15px]">
      <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
      <div className="z-10 flex items-center justify-center">
         <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" className="svg-inline--fa fa-plus fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"></path>
         </svg>
         <div className="">Add a wallet</div>
      </div>
   </button>
</div>  )
}

export default PaymentInfo