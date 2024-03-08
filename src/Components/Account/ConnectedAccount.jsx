import React from 'react'

const ConnectedAccount = () => {
  return (
<div className="flex flex-col gap-y-8">
   <div>
      <h5 className="text-header5 mb-3 ">Connected accounts</h5>
      <div className="border-whop-stroke-dark bg-whop-background w-full rounded-[10px] px-10 py-6 border">
         <div className="mx-auto flex max-w-[400px] flex-col gap-6 text-center">
            <div className="border-whop-stroke-dark bg-whop-background mx-auto flex animate-pulse items-center justify-center border drop-shadow-lg h-12 w-12 rounded-2xl">
               <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plug" className="svg-inline--fa fa-plug fa-fw text-whop-gray h-6 w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor" d="M128 24c0-13.3-10.7-24-24-24S80 10.7 80 24v88h48V24zm176 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v88h48V24zM24 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v64c0 80.2 59 146.6 136 158.2V488c0 13.3 10.7 24 24 24s24-10.7 24-24V414.2c77-11.6 136-78 136-158.2V192h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8H304 80 32 24zM192 368c-61.9 0-112-50.1-112-112V192H304v64c0 61.9-50.1 112-112 112z"></path>
               </svg>
            </div>
            <div>
               <p className="text-whop-off-black text-header4">No connected accounts</p>
               <p className="text-whop-dark-gray mt-1 text-paragraph3">Connect accounts below</p>
            </div>
            <div className="mx-auto flex w-full flex-col-reverse gap-2 sm:flex-row sm:justify-center"></div>
         </div>
      </div>
   </div>
   <div>
      <h5 className="text-header5 mb-3">Add an account</h5>
      <div className="border-whop-stroke rounded-[10px] border-[1px]">
         <div className="flex items-center justify-between gap-x-1 px-6 py-4">
            <div className="flex flex-row items-center gap-x-4">
               <div className="shrink-0">
                  <svg width="32" height="32" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className='rounded-lg'>
                     <g clip-path="url(#clip0_3187_37871)">
                        <path d="M80 0H0V80H80V0Z" fill="url(#paint0_linear_3187_37871)"></path>
                        <path d="M59.125 22.5625C59.125 22.5625 59.125 22.5625 59.0312 22.5625C55.4688 20.875 51.7188 19.75 47.875 19.0938C47.7812 19 47.6875 19.0938 47.6875 19.0938C47.125 20.0312 46.6562 21.0625 46.2812 22C42.0625 21.3438 37.8438 21.3438 33.625 22C33.25 21.0625 32.7812 20.0312 32.2188 19.0938C32.2188 19.0938 32.125 19 32.0312 19.0938C28.1875 19.75 24.4375 20.875 20.875 22.5625C20.7812 22.5625 20.7812 22.5625 20.7812 22.5625C13.6562 33.25 11.6875 43.6562 12.625 53.9688C12.625 53.9688 12.625 54.0625 12.7188 54.0625C16.8438 57.1562 21.5312 59.5 26.5 61C26.5 61.0938 26.5938 61 26.6875 61C27.7188 59.5 28.6562 58 29.5 56.4062C29.5 56.3125 29.5 56.2188 29.4062 56.125C27.9062 55.5625 26.4062 54.9062 25.0938 54.0625C25 54.0625 24.9062 53.875 25.0938 53.7812C25.375 53.5938 25.6562 53.4062 25.9375 53.125C25.9375 53.125 26.0312 53.125 26.125 53.125C35.125 57.25 44.875 57.25 53.7812 53.125C53.875 53.125 53.875 53.125 53.9688 53.125C54.25 53.4062 54.5312 53.5938 54.8125 53.7812C54.9062 53.875 54.9062 54.0625 54.8125 54.0625C53.4062 54.9062 52 55.5625 50.5 56.125C50.4062 56.2188 50.4062 56.3125 50.4062 56.4062C51.25 58 52.1875 59.5 53.2188 61C53.3125 61 53.3125 61.0938 53.4062 61C58.375 59.5 63.0625 57.1562 67.1875 54.0625C67.2812 54.0625 67.2812 53.9688 67.2812 53.9688C68.4062 42.0625 65.3125 31.75 59.125 22.5625ZM30.8125 47.6875C28.0938 47.6875 25.8438 45.1562 25.8438 42.1562C25.8438 39.0625 28.0938 36.625 30.8125 36.625C33.625 36.625 35.7812 39.0625 35.7812 42.1562C35.7812 45.1562 33.5312 47.6875 30.8125 47.6875ZM49.0938 47.6875C46.375 47.6875 44.2188 45.1562 44.2188 42.1562C44.2188 39.0625 46.375 36.625 49.0938 36.625C51.9062 36.625 54.1562 39.0625 54.0625 42.1562C54.0625 45.1562 51.9062 47.6875 49.0938 47.6875Z" fill="white"></path>
                     </g>
                     <defs>
                        <linearGradient id="paint0_linear_3187_37871" x1="80" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#5865F2"></stop>
                           <stop offset="1" stop-color="#3E48C2"></stop>
                        </linearGradient>
                        <clipPath id="clip0_3187_37871">
                           <rect width="80" height="80" fill="white"></rect>
                        </clipPath>
                     </defs>
                  </svg>
               </div>
               <span className="text-subtitle3 break-words">Discord</span>
            </div>
            <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-background text-whop-black border-whop-stroke-dark border text-button4 h-10 px-[15px] shadow-sm">
               <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
               <div className="z-10 flex items-center justify-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" className="svg-inline--fa fa-plus fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                     <path fill="currentColor" d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"></path>
                  </svg>
                  <div className="">Add account</div>
               </div>
            </button>
         </div>
         <div className="border-whop-stroke w-full border-b-[1px]"></div>
         <div className="flex items-center justify-between gap-x-1 px-6 py-4">
            <div className="flex flex-row items-center gap-x-4">
               <div className="shrink-0">
                  <svg width="32" height="32" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className='rounded-lg'>
                     <g clip-path="url(#clip0_3344_37641)">
                        <rect width="80" height="80" fill="url(#paint0_linear_3344_37641)"></rect>
                        <path d="M80 0H0V80H80V0Z" fill="url(#paint1_linear_3344_37641)"></path>
                        <path d="M59.1155 30.6751C59.1155 31.1448 59.1155 31.5205 59.1155 31.9902C59.1155 45.047 49.2524 59.9824 31.1233 59.9824C25.4873 59.9824 20.3209 58.3855 16 55.5675C16.7515 55.6615 17.5029 55.7554 18.3483 55.7554C22.9511 55.7554 27.1781 54.1585 30.5597 51.5284C26.2387 51.4344 22.5753 48.6164 21.3542 44.6712C22.0117 44.7652 22.5753 44.8591 23.2329 44.8591C24.0783 44.8591 25.0176 44.6712 25.7691 44.4834C21.2603 43.544 17.8787 39.5988 17.8787 34.8082V34.7143C19.1937 35.4658 20.7906 35.8415 22.3875 35.9354C19.6634 34.1507 17.9726 31.1448 17.9726 27.7632C17.9726 25.8845 18.4423 24.1937 19.2877 22.7847C24.1722 28.7025 31.499 32.6478 39.6712 33.1174C39.4834 32.3659 39.3894 31.6145 39.3894 30.863C39.3894 25.4149 43.8043 21 49.2524 21C52.0704 21 54.6067 22.1272 56.4853 24.0998C58.6458 23.6301 60.8063 22.7847 62.6849 21.6575C61.9335 24.0059 60.4305 25.8845 58.364 27.1057C60.3366 26.9178 62.3092 26.3542 64 25.6027C62.6849 27.5753 60.9941 29.2661 59.1155 30.6751Z" fill="white"></path>
                     </g>
                     <defs>
                        <linearGradient id="paint0_linear_3344_37641" x1="80" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#31B5FF"></stop>
                           <stop offset="1" stop-color="#1DA1F2"></stop>
                        </linearGradient>
                        <linearGradient id="paint1_linear_3344_37641" x1="80" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#31B5FF"></stop>
                           <stop offset="1" stop-color="#1DA1F2"></stop>
                        </linearGradient>
                        <clipPath id="clip0_3344_37641">
                           <rect width="80" height="80" fill="white"></rect>
                        </clipPath>
                     </defs>
                  </svg>
               </div>
               <span className="text-subtitle3 break-words">Twitter</span>
            </div>
            <a href="https://whop.com/api/v4/auth/twitter?wru=https%3A%2F%2Fwhop.com%2Faccount%2Fconnected-accounts%2F&amp;wa=connect">
               <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-background text-whop-black border-whop-stroke-dark border text-button4 h-10 px-[15px] shadow-sm">
                  <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                  <div className="z-10 flex items-center justify-center">
                     <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" className="svg-inline--fa fa-plus fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"></path>
                     </svg>
                     <div className="">Add account</div>
                  </div>
               </button>
            </a>
         </div>
         <div className="border-whop-stroke w-full border-b-[1px]"></div>
         <div className="flex items-center justify-between gap-x-1 px-6 py-4">
            <div className="flex flex-row items-center gap-x-4">
               <div className="shrink-0">
                  <svg width="32" height="32" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className='rounded-lg'>
                     <g clip-path="url(#clip0_3187_37876)">
                        <path d="M80 0H0V80H80V0Z" fill="url(#paint0_linear_3187_37876)"></path>
                        <path d="M40 16.75C27.1562 16.75 16.75 27.25 16.75 40C16.75 52.8438 27.1562 63.25 40 63.25C52.75 63.25 63.25 52.8438 63.25 40C63.25 27.25 52.75 16.75 40 16.75ZM50.6875 32.5938C50.4062 36.25 48.9062 45.25 48.0625 49.2812C47.7812 51.0625 47.125 51.625 46.4688 51.7188C45.1562 51.8125 44.125 50.7812 42.8125 49.9375C40.75 48.625 39.625 47.7812 37.6562 46.4688C35.3125 44.9688 36.8125 44.125 38.125 42.8125C38.5 42.4375 44.4062 37 44.5 36.5312C44.5938 36.4375 44.5938 36.25 44.4062 36.0625C44.3125 35.9688 44.125 36.0625 43.9375 36.0625C43.75 36.0625 40.4688 38.2188 34.1875 42.5312C33.25 43.1875 32.4062 43.4688 31.6562 43.4688C30.8125 43.4688 29.2188 43 28 42.625C26.5938 42.1562 25.375 41.875 25.4688 41.125C25.5625 40.6562 26.125 40.2812 27.25 39.8125C34 36.8125 38.5 34.9375 40.75 34C47.2188 31.2812 48.625 30.8125 49.4688 30.8125C49.6562 30.8125 50.125 30.8125 50.4062 31.0938C50.5 31.1875 50.6875 31.4688 50.6875 31.6562C50.7812 32.0312 50.7812 32.3125 50.6875 32.5938Z" fill="white"></path>
                     </g>
                     <defs>
                        <linearGradient id="paint0_linear_3187_37876" x1="80" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#56A8E8"></stop>
                           <stop offset="1" stop-color="#4E9BD4"></stop>
                        </linearGradient>
                        <clipPath id="clip0_3187_37876">
                           <rect width="80" height="80" fill="white"></rect>
                        </clipPath>
                     </defs>
                  </svg>
               </div>
               <span className="text-subtitle3 break-words">Telegram</span>
            </div>
            <button type="button" className="group/button relative shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring hidden sm:block bg-whop-background text-whop-black border-whop-stroke-dark border text-button4 h-10 px-[15px] shadow-sm">
               <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
               <div className="z-10 flex items-center justify-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" className="svg-inline--fa fa-plus fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                     <path fill="currentColor" d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"></path>
                  </svg>
                  <div className="">Add account</div>
               </div>
            </button>
            <button type="button" className="group/button relative shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring block sm:hidden bg-whop-background text-whop-black border-whop-stroke-dark border text-button4 h-10 px-[15px] shadow-sm">
               <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
               <div className="z-10 flex items-center justify-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" className="svg-inline--fa fa-plus fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                     <path fill="currentColor" d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"></path>
                  </svg>
                  <div className="">Add account</div>
               </div>
            </button>
         </div>
         <div className="border-whop-stroke w-full border-b-[1px]"></div>
         <div className="flex items-center justify-between gap-x-1 px-6 py-4">
            <div className="flex flex-row items-center gap-x-4">
               <div className="shrink-0">
                  <svg width="32" height="32" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className='rounded-lg'>
                     <g clip-path="url(#clip0_3187_37792)">
                        <path d="M80 0H0V80H80V0Z" fill="url(#paint0_linear_3187_37792)"></path>
                        <path d="M33.8703 54.5H22.4352V36.7947H11V25.5H33.8188V54.5H33.8703ZM56.7407 54.5H43.7087L55.968 25.5H69L56.7407 54.5ZM43.6572 25.5C47.2629 25.5 50.1989 28.4 50.1989 31.9614C50.1989 35.5228 47.2629 38.4228 43.6572 38.4228C40.0515 38.4228 37.1155 35.5228 37.1155 31.9614C37.167 28.4 40.0515 25.5 43.6572 25.5Z" fill="white"></path>
                     </g>
                     <defs>
                        <linearGradient id="paint0_linear_3187_37792" x1="80" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#5FB0DF"></stop>
                           <stop offset="1" stop-color="#1131F3"></stop>
                        </linearGradient>
                        <clipPath id="clip0_3187_37792">
                           <rect width="80" height="80" fill="white"></rect>
                        </clipPath>
                     </defs>
                  </svg>
               </div>
               <span className="text-subtitle3 break-words">TradingView</span>
            </div>
            <button type="button" className="group/button relative shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring hidden sm:block bg-whop-background text-whop-black border-whop-stroke-dark border text-button4 h-10 px-[15px] shadow-sm">
               <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
               <div className="z-10 flex items-center justify-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" className="svg-inline--fa fa-plus fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                     <path fill="currentColor" d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"></path>
                  </svg>
                  <div className="">Add account</div>
               </div>
            </button>
            <button type="button" className="group/button relative shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring block sm:hidden bg-whop-background text-whop-black border-whop-stroke-dark border text-button4 h-10 px-[15px] shadow-sm">
               <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
               <div className="z-10 flex items-center justify-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" className="svg-inline--fa fa-plus fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                     <path fill="currentColor" d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"></path>
                  </svg>
                  <div className="">Add account</div>
               </div>
            </button>
         </div>
         <div className="border-whop-stroke w-full border-b-[1px]"></div>
         <div className="flex items-center justify-between gap-x-1 px-6 py-4">
            <div className="flex flex-row items-center gap-x-4">
               <div className="shrink-0">
                  <svg width="32" height="32" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className='rounded-lg'>
                     <g clip-path="url(#clip0_3348_37643)">
                        <path d="M80 0H0V80H80V0Z" fill="url(#paint0_linear_3348_37643)"></path>
                        <path d="M57 20C58.5179 20 59.8571 21.3393 59.8571 22.8571C59.8571 24.4643 58.5179 25.7143 57 25.7143H24.1429C23.3393 25.7143 22.7143 26.4286 22.7143 27.1429C22.7143 27.9464 23.3393 28.5714 24.1429 28.5714H57C60.125 28.5714 62.7143 31.1607 62.7143 34.2857V54.2857C62.7143 57.5 60.125 60 57 60H22.7143C19.5 60 17 57.5 17 54.2857V25.7143C17 22.5893 19.5 20 22.7143 20H57ZM54.1429 47.1429C55.6607 47.1429 57 45.8929 57 44.2857C57 42.7679 55.6607 41.4286 54.1429 41.4286C52.5357 41.4286 51.2857 42.7679 51.2857 44.2857C51.2857 45.8929 52.5357 47.1429 54.1429 47.1429Z" fill="white"></path>
                     </g>
                     <defs>
                        <linearGradient id="paint0_linear_3348_37643" x1="80" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
                           <stop stop-color="#888E96"></stop>
                           <stop offset="1" stop-color="#0E0E0F"></stop>
                        </linearGradient>
                        <clipPath id="clip0_3348_37643">
                           <rect width="80" height="80" fill="white"></rect>
                        </clipPath>
                     </defs>
                  </svg>
               </div>
               <span className="text-subtitle3 break-words">Verified Ethereum wallet</span>
            </div>
            <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-background text-whop-black border-whop-stroke-dark border text-button4 h-10 px-[15px] shadow-sm">
               <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
               <div className="z-10 flex items-center justify-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" className="svg-inline--fa fa-plus fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                     <path fill="currentColor" d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"></path>
                  </svg>
                  <div className="">Add account</div>
               </div>
            </button>
         </div>
      </div>
   </div>
</div>  )
}

export default ConnectedAccount