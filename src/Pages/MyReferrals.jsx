import React from 'react'

const MyReferrals = () => {
  return (
<div className="px-5 flex flex-col gap-10 pb-20 pt-10 sm:gap-[64px]">
   <div>
      <div className="text-whop-gray overline3 mb-10 flex flex-row items-center gap-2 overflow-x-scroll whitespace-nowrap uppercase">
         <a href="/affiliate/">Become an affiliate</a>
         <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" className="svg-inline--fa fa-chevron-right fa-fw w-[7px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path fill="currentColor" d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"></path>
         </svg>
         <a href="/affiliate/customer/">customer affiliates</a>
         <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" className="svg-inline--fa fa-chevron-right fa-fw w-[7px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path fill="currentColor" d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"></path>
         </svg>
         <span className="text-whop-dark-gray">my referrals</span>
      </div>
      <div className="mb-10 flex flex-col justify-start gap-6 lg:flex-row lg:justify-between lg:gap-0">
         <div className="space-y-2 ">
            <div className="display2 text-whop-black">Your Referrals</div>
            <p className="paragraph2 text-whop-dark-gray">Please be aware that running ads against Whop breaches our <a className="text-whop-field-highlight" href="/terms/">Terms of Service (ToS)</a>, disqualifying you from receiving payments. Refer to our ToS for a full understanding of Whop's policies.</p>
         </div>
         <div className="flex w-full justify-end">
            <a className="w-full lg:w-auto" href="/account/balance/">
               <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring w-full lg:w-auto bg-whop-background text-whop-black border-whop-stroke border text-button4 h-10 px-[15px]">
                  <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                  <div className="z-10 flex items-center justify-center">
                     <div className="font-semibold">Withdraw balance ($0.00)</div>
                     <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-fw ml-[7px] text-[12px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"></path>
                     </svg>
                  </div>
               </button>
            </a>
         </div>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-4">
         <div className="border-whop-stroke w-full flex-none rounded-md border px-6 py-4 shadow-lg sm:w-fit sm:flex-1">
            <div className="mb-1 flex items-center gap-1">
               <div className="subtitle3 text-whop-dark-gray">Total referrals</div>
               <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-info" className="svg-inline--fa fa-circle-info fa-fw text-whop-gray text-xs" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                     <path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V248c0-13.3-10.7-24-24-24H216c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v64H216zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path>
                  </svg>
               </div>
            </div>
            <div className="w-auto animate-none bg-none text-whop-black h-[32px] rounded-md text-2xl font-medium">0</div>
         </div>
         <div className="border-whop-stroke w-full flex-none rounded-md border px-6 py-4 shadow-lg sm:w-fit sm:flex-1">
            <div className="mb-1 flex items-center gap-1">
               <div className="subtitle3 text-whop-dark-gray">You’ve made</div>
               <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-info" className="svg-inline--fa fa-circle-info fa-fw text-whop-gray text-xs" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                     <path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V248c0-13.3-10.7-24-24-24H216c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v64H216zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path>
                  </svg>
               </div>
            </div>
            <div className="w-auto animate-none bg-none text-whop-black h-[32px] rounded-md text-2xl font-medium">$0.00</div>
         </div>
         <div className="border-whop-stroke w-full flex-none rounded-md border px-6 py-4 shadow-lg sm:w-fit sm:flex-1">
            <div className="mb-1 flex items-center gap-1">
               <div className="subtitle3 text-whop-dark-gray">MRR</div>
               <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-info" className="svg-inline--fa fa-circle-info fa-fw text-whop-gray text-xs" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                     <path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V248c0-13.3-10.7-24-24-24H216c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v64H216zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path>
                  </svg>
               </div>
            </div>
            <div className="w-auto animate-none bg-none text-whop-black h-[32px] rounded-md text-2xl font-medium">$0.00</div>
         </div>
         <div className="border-whop-stroke w-full flex-none rounded-md border px-6 py-4 shadow-lg sm:w-fit sm:flex-1">
            <div className="mb-1 flex items-center gap-1">
               <div className="subtitle3 text-whop-dark-gray">Link clicks this month</div>
               <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-info" className="svg-inline--fa fa-circle-info fa-fw text-whop-gray text-xs" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                     <path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V248c0-13.3-10.7-24-24-24H216c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v64H216zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path>
                  </svg>
               </div>
            </div>
            <div className="w-auto animate-none bg-none text-whop-black h-[32px] rounded-md text-2xl font-medium">0</div>
         </div>
      </div>
   </div>
   <div>
      <div className="flex flex-col items-center gap-10">
         <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="swords" className="svg-inline--fa fa-swords fa-fw text-whop-black text-[40px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M54.8 89.6L51.3 51.3l38.2 3.5L367.4 332.7l33.9-33.9L123.5 20.9C115.6 12.9 105.1 8 93.9 7L17.4 .1C12.7-.4 8 1.3 4.7 4.7S-.4 12.7 .1 17.4L7 93.9c1 11.2 5.9 21.7 13.9 29.6L298.7 401.4l33.9-33.9L54.8 89.6zM459.3 308.7c-6.2-6.2-16.4-6.2-22.6 0l-128 128c-6.2 6.2-6.2 16.4 0 22.6l16 16c4.7 4.7 11.8 6 17.8 3.3l62-27.5 56.2 56.2c6.2 6.2 16.4 6.2 22.6 0l24-24c6.2-6.2 6.2-16.4 0-22.6l-56.2-56.2 27.5-62c2.7-6.1 1.4-13.1-3.3-17.8l-16-16zm-112-109.3l33.9 33.9L491.1 123.5c7.9-7.9 12.8-18.4 13.9-29.6l7-76.5c.4-4.7-1.3-9.4-4.6-12.8s-8-5.1-12.8-4.6L418.1 7c-11.2 1-21.7 5.9-29.6 13.9L278.6 130.7l33.9 33.9L422.4 54.8l38.2-3.5-3.5 38.2L347.3 199.4zM233.4 381.3l-33.9-33.9-42.7 42.7-34.7-34.7 42.7-42.7-33.9-33.9L88 321.4 75.3 308.7c-6.2-6.2-16.4-6.2-22.6 0l-16 16c-4.7 4.7-6 11.8-3.3 17.8l27.5 62L4.7 460.7c-6.2 6.2-6.2 16.4 0 22.6l24 24c6.2 6.2 16.4 6.2 22.6 0l56.2-56.2 62 27.5c6 2.7 13.1 1.4 17.8-3.3l16-16c6.2-6.2 6.2-16.4 0-22.6L190.6 424l42.7-42.7z"></path>
         </svg>
         <div className="w-none flex flex-col items-center gap-2 sm:w-[620px]">
            <div className="display3 text-black">No customer referrals</div>
            <div className="paragraph2 text-whop-dark-gray text-center">You haven't received any affiliate payouts yet. Try sharing your link with more people or refer a different product.</div>
         </div>
         <a href="/affiliates/customer/">
            <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring w-fit bg-whop-background text-whop-black border-whop-stroke border text-button4 h-10 px-[15px]">
               <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
               <div className="z-10 flex items-center justify-center">
                  <div className="font-semibold">View your links</div>
               </div>
            </button>
         </a>
      </div>
   </div>
   <div className="border-whop-stroke bg-whop-hover-50 flex flex-col gap-6 rounded-[10px] border p-8">
      <div className="text-whop-black flex flex-col gap-2">
         <h4 className="font-bold">Business referrals</h4>
         <p className="paragraph2">Maximize your earnings as an affiliate by referring new businesses to sell on Whop.</p>
      </div>
      <a href="/affiliates/business/">
         <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring w-fit bg-whop-primary text-whop-fixed-white text-button4 h-10 px-[15px]">
            <div className="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
            <div className="z-10 flex items-center justify-center text-white font-semibold">
               <div className="text-white font-semibold">See rewards</div>
               <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-fw ml-[7px] text-[12px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"></path>
               </svg>
            </div>
         </button>
      </a>
   </div>
</div>
  )
}

export default MyReferrals