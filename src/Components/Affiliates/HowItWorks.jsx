import React from 'react'

const HowItWorks = () => {
  return (
<div className="flex w-[100%] flex-col items-center">
   <h2 className="display3 mb-[40px] mt-[64px] w-[100%] text-whop-black font-semibold text-3xl text-center max-lg:mb-[45px]">How it works</h2>
   <div className="flex max-w-[1011px] flex-col gap-[40px] max-lg:gap-[60px]">
      <div className="max-lg:h flex gap-x-[32px] max-lg:mx-[10%] max-lg:max-w-[600px] max-lg:flex-col max-lg:items-center max-lg:gap-[30px]">
         <div className="outline-whop-stroke flex h-[72px] w-[72px] shrink-0 rounded-[18px] outline outline-1 max-lg:h-[108px] max-lg:w-[108px]">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="cube" className="w-7 h-7 text-whop-black fa-cube m-auto block place-self-center text-[30px] max-lg:text-[60px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
               <path fill="currentColor" d="M258.8 50.7c-1.8-.7-3.8-.7-5.7 0L63.6 122.6 256 198.2l192.4-75.6L258.8 50.7zM48 377.9c0 3.3 2.1 6.3 5.2 7.5L232 453.2V240.4L48 168.1V377.9zm232 75.3l178.8-67.8c3.1-1.2 5.2-4.2 5.2-7.5V168.1L280 240.4V453.2zM236.1 5.9c12.8-4.9 26.9-4.9 39.7 0l200 75.9C497.6 90 512 110.8 512 134.1V377.9c0 23.3-14.4 44.1-36.1 52.4l-200 75.9c-12.8 4.9-26.9 4.9-39.7 0l-200-75.9C14.4 422 0 401.2 0 377.9V134.1C0 110.8 14.4 90 36.1 81.7l200-75.9z"></path>
            </svg>
         </div>
         <div className="flex h-[72px] flex-col justify-center max-lg:h-[auto] max-lg:items-center max-lg:text-center">
            <h3 className="subtitle1 font-semibold mb-[8px]">Refer a product or merchant</h3>
            <div className="paragraph3 text-whop-dark-gray">Every product on Whop Marketplace has a unique affiliate reward for referring new customers. You can also receive a reward for referring new merchants to start selling on Whop.</div>
         </div>
      </div>
      <div className="max-lg:h flex gap-x-[32px] max-lg:mx-[10%] max-lg:max-w-[600px] max-lg:flex-col max-lg:items-center max-lg:gap-[30px]">
         <div className="outline-whop-stroke flex h-[72px] w-[72px] shrink-0 rounded-[18px] outline outline-1 max-lg:h-[108px] max-lg:w-[108px]">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="link-simple" className="w-7 h-7 text-whop-black fa-link-simple m-auto block place-self-center text-[30px] max-lg:text-[60px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
               <path fill="currentColor" d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path>
            </svg>
         </div>
         <div className="flex h-[72px] flex-col justify-center max-lg:h-[auto] max-lg:items-center max-lg:text-center">
            <h3 className="subtitle1 font-semibold mb-[8px]">Share your affiliate link</h3>
            <div className="paragraph3 text-whop-dark-gray">To earn an affiliate reward, simply copy your affiliate link and share it with your audience. You can find your affiliate links via the “Refer Customers” and “Refer Businesses” pages (see above).</div>
         </div>
      </div>
      <div className="max-lg:h flex gap-x-[32px] max-lg:mx-[10%] max-lg:max-w-[600px] max-lg:flex-col max-lg:items-center max-lg:gap-[30px]">
         <div className="outline-whop-stroke flex h-[72px] w-[72px] shrink-0 rounded-[18px] outline outline-1 max-lg:h-[108px] max-lg:w-[108px]">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="hand-holding-dollar" className="w-7 h-7 text-whop-black fa-hand-holding-dollar m-auto block place-self-center text-[30px] max-lg:text-[60px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
               <path fill="currentColor" d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3 0 0c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM187.4 352c-7.9 0-15.6 2.3-22.2 6.7L85.3 412c-3.9 2.6-8.6 4-13.3 4H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H64.7l73.8-49.2C153 309.1 170 304 187.4 304H344c35.3 0 64 28.7 64 64c0 .7 0 1.3 0 2l64.9-40c10.7-6.6 22.9-10 35.5-10h7.4c33.3 0 60.3 27 60.3 60.3c0 20.4-10.4 39.5-27.5 50.6l-95.6 61.9c-19.4 12.6-42.1 19.3-65.2 19.3H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H387.7c13.9 0 27.5-4 39.1-11.6l95.6-61.9c3.5-2.3 5.6-6.1 5.6-10.3c0-6.8-5.5-12.3-12.3-12.3h-7.4c-3.6 0-7.2 1-10.3 2.9l-93.5 57.5c-3.8 2.3-8.1 3.6-12.6 3.6H344 320 256c-13.3 0-24-10.7-24-24s10.7-24 24-24h64 24c8.8 0 16-7.2 16-16s-7.2-16-16-16H187.4z"></path>
            </svg>
         </div>
         <div className="flex h-[72px] flex-col justify-center max-lg:h-[auto] max-lg:items-center max-lg:text-center">
            <h3 className="subtitle1 font-semibold mb-[8px]">Get paid in cash</h3>
            <div className="paragraph3 text-whop-dark-gray">When any new customer purchases a product or a merchant gets their first sale, you'll get a cash reward. It's that easy.</div>
         </div>
      </div>
   </div>
   <a href="/affiliates/customer/">
      <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring mb-[67px] mt-[40px] w-[118px] max-lg:mt-[60px] bg-whop-primary text-whop-fixed-white text-button4 h-10 px-[15px]">
         <div className="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
         <div className="z-10 flex items-center justify-center">
            <div className="text-white font-semibold">Get Started</div>
         </div>
      </button>
   </a>
</div> 
 )
}

export default HowItWorks