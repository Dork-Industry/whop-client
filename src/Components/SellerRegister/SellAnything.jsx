import React from 'react'

const SellAnything = () => {
  return (
<div className="  px-6 sm:px-6 lg:px-8 relative sell bg-black z-10 overflow-hidden pt-[200px]">
<div className="absolute left-1/2 top-[130px] -z-10 h-[480px] w-[900px] -translate-x-1/2 transform">
   <svg xmlns="http://www.w3.org/2000/svg" width="900" height="462" fill="none">
      <path stroke="white" stroke-opacity="0.06" fill="transparent" stroke-width="0.5" d="M143 0C84 0 43 26 12 55L0 67l130 130L259 67C235 34 188 0 143 0Zm320 0c-59 0-100 26-131 55l-12 12-160 161 130 129L579 67C555 34 508 0 463 0Zm321 0c-59 0-100 26-131 55l-12 12-321 321 34 34c53 52 139 52 191 0L900 67C875 34 829 0 784 0Z"></path>
   </svg>
   <div className="big-w-dots-container absolute top-0 flex h-full w-full flex-col gap-[7px]">
      <div className="relative pt-[3px]">
         <canvas width="900" height="480" className="dots-canvas"></canvas>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-big-w"></div>
   </div>
</div>

<hgroup className="flex flex-col gap-4 sm:text-center">
   <h2 className="text-3xl font-semibold tracking-[-1.2px] text-white sm:text-5xl">Sell literally <span className="text-orange-emphasis-container"><span className="text-orange-emphasis text-orange-glow-1">anything</span><span className="emphasis-shadow" aria-hidden="true">anything</span></span></h2>
   <p className="max-w-[488px] text-base text-shark-gray-300 sm:mx-auto sm:text-lg">Whop App Templates allows anyone to launch the business of their dreams.​​​​‌</p>
</hgroup>

<div className="grid grid-cols-12 gap-2 pt-16">
<div className="col-span-full -mx-6 grid overflow-hidden bg-shark-gray-950 shadow-bento-card md:mx-0 md:rounded-2xl xl:h-[400px] xl:grid-cols-[392px_auto] ">
   <div className="pl-12 pr-12 pt-[40px] sm:pr-0 xl:pt-[104px]">
      <div className="flex flex-row gap-2">
         <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
               <rect width="16.5" height="16.5" x="3.75" y="3.75" fill="#FF6243" fill-opacity=".2" stroke="#FF6243" rx="8.25"></rect>
               <path fill="#FF6243" d="M11.975 16.5496c-.3452 0-.625-.2798-.625-.625v-.445c-1.0629-.1918-1.7682-.786-2.00857-1.5886-.10298-.3439.19959-.6414.55857-.6414.359 0 .6414.3218.8727.5962.256.3037.7202.5038 1.3273.5038 1 0 1.4-.39 1.4-.9 0-.41-.25-.74-1.15-.9l-1.2-.2c-1.21-.2-1.75-.9-1.75-1.9 0-.98999.7-1.82999 1.95-2.03999v-.435c0-.34518.2798-.625.625-.625s.625.27982.625.625v.415c1.1259.16889 1.7991.78409 2.0195 1.61669.0919.347-.2105.6433-.5695.6433s-.6333-.32-.8493-.6067c-.2227-.29577-.6287-.49329-1.2007-.49329-.91 0-1.3.39-1.3.89999 0 .4.2.67.95.8l1.1.2c1.41.25 2.05.84 2.05 2 0 1.1-.72 1.91-2.2 2.07v.405c0 .3452-.2798.625-.625.625Z"></path>
            </svg>
         </div>
         <h3 className="pb-4 text-xs font-semibold text-brand">Make money‌</h3>
      </div>
      <h4 className="pb-3 text-xl font-semibold text-white sm:text-2xl">Sell Whop App Templates</h4>
      <p className="pb-6 text-sm text-shark-gray-300">Whop App Templates are pre-built products you can sell access to in minutes.‌</p>
      <a className="inline-flex justify-center rounded-md py-2 px-3 text-xs font-semibold outline-2 outline-offset-2  focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-2 transition-all bg-gray-button text-white outline-white" target="_blank" href="https://whop.com/app-store/"><span className="flex items-center gap-2">View all apps‌</span></a>
   </div>
   <div className="grid-row flex flex-col gap-4 px-12 pb-6 pt-6 sm:grid sm:grid-cols-[auto,repeat(2,_208px),auto] sm:grid-rows-[repeat(5,_100px)] sm:px-0 sm:pb-0 sm:pt-0 xl:ml-[-105px] xl:mt-[-80px] xl:grid-cols-[repeat(4,208px)] xl:grid-rows-[repeat(5,_100px)]">
      <a href="https://dash.whop.com/login?action=signup" target="_blank" className="app-card-background rounded-lg border-white/[.05] p-4 outline-none outline-2 outline-offset-2 focus-visible:outline-white row-start-2 xl:ml-[112px] xl:-mr-[112px] col-start-3">
         <div className="flex flex-row items-center gap-2 pb-1">
            <div>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" width="16" height="16">
                  <path fill="#D9D9DE" d="m17 3-4-2-1 1H8L7 1 3 3c-3 4-3 7-3 11l5 3 1-2-1-1h10l-1 1 1 2 5-3c0-4-1-8-3-11ZM7 12l-2-2 2-2 1 2-1 2Zm6 0-1-2 1-2 2 2-2 2Z"></path>
               </svg>
            </div>
            <h5 className="font-semibold text-off-white">Discord​​​​‌‌</h5>
         </div>
         <p className="text-xs leading-5 text-shark-gray-400">Sell access to an exclusive Discord community.</p>
      </a>
      <a href="https://dash.whop.com/login?action=signup" target="_blank" className="app-card-background rounded-lg border-white/[.05] p-4 outline-none outline-2 outline-offset-2 focus-visible:outline-white row-start-3 col-start-2">
         <div className="flex flex-row items-center gap-2 pb-1">
            <div>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" width="16" height="16">
                  <path fill="#D9D9DE" d="M10 1a9 9 0 0 0 0 18 9 9 0 0 0 0-18Zm4 6-1 6-1 1h-1l-2-2v-1l3-2h-1a59 59 0 0 0-4 2H5v-1a221 221 0 0 1 9-3Z"></path>
               </svg>
            </div>
            <h5 className="font-semibold text-off-white">Telegram​​​​‌‌</h5>
         </div>
         <p className="text-xs leading-5 text-shark-gray-400">Sell access to an exclusive Telegram community.</p>
      </a>
      <a href="https://dash.whop.com/login?action=signup" target="_blank" className="app-card-background rounded-lg border-white/[.05] p-4 outline-none outline-2 outline-offset-2 focus-visible:outline-white row-start-3  col-start-3">
         <div className="flex flex-row items-center gap-2 pb-1">
            <div>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" width="16" height="16">
                  <path fill="#D9D9DE" d="M8 15H4V9H0V5h8v10Zm8 0h-5l5-10h4l-4 10ZM11 5c2 0 3 1 3 2s-1 2-3 2L9 7l2-2Z"></path>
               </svg>
            </div>
            <h5 className="font-semibold text-off-white">TradingView​​​​‌‌</h5>
         </div>
         <p className="text-xs leading-5 text-shark-gray-400">Sell access to your TradingView Indicators.‌</p>
      </a>
      <a href="https://dash.whop.com/login?action=signup" target="_blank" className="app-card-background rounded-lg border-white/[.05] p-4 outline-none outline-2 outline-offset-2 focus-visible:outline-white row-start-4 xl:col-start-4 col-start-3 xl:row-start-3 xl:col-span-1">
         <div className="flex flex-row items-center gap-2 pb-1">
            <div>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" width="16" height="16">
                  <path fill="#D9D9DE" d="m19 6-8-3H9L1 6 0 7l1 1h1v2l-1 1v7h2V9l6 2h2l8-3 1-1-1-1Zm-8 6H9l-5-2v5c0 1 3 3 6 3s6-2 6-3v-5l-5 2Z"></path>
               </svg>
            </div>
            <h5 className="font-semibold text-off-white">Course</h5>
         </div>
         <p className="text-xs leading-5 text-shark-gray-400">Sell access to an online course or program.‌</p>
      </a>
      <a href="https://dash.whop.com/login?action=signup" target="_blank" className="app-card-background rounded-lg border-white/[.05] p-4 outline-none outline-2 outline-offset-2 focus-visible:outline-white row-start-4 hidden xl:block xl:ml-[112px] xl:-mr-[112px] xl:col-start-3">
         <div className="flex flex-row items-center gap-2 pb-1">
            <div>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="16" height="16">
                  <path fill="#D9D9DE" fill-rule="evenodd" d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM8 14V7l1-1 5 5-1 1h-3l-1 2H8Z" clip-rule="evenodd"></path>
               </svg>
            </div>
            <h5 className="font-semibold text-off-white">Software app‌</h5>
         </div>
         <p className="text-xs leading-5 text-shark-gray-400">Sell access to software via license key.​​​​‌</p>
      </a>
      <a href="https://dash.whop.com/login?action=signup" target="_blank" className="app-card-background rounded-lg border-white/[.05] p-4 outline-none outline-2 outline-offset-2 focus-visible:outline-white row-start-2 xl:ml-[112px] xl:-mr-[112px] col-start-2 ">
         <div className="flex flex-row items-center gap-2 pb-1">
            <div>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" width="16" height="16">
                  <path fill="#D9D9DE" fill-rule="evenodd" d="M4 1C2 1 1 2 1 4v12c0 2 1 3 3 3h12c2 0 3-1 3-3V4c0-2-1-3-3-3H4Zm1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"></path>
                  <rect width="7.5" height="1.9" x="8.1" y="4.4" fill="#92939E" rx=".6"></rect>
               </svg>
            </div>
            <h5 className="font-semibold text-off-white">Web app​​​​‌‌</h5>
         </div>
         <p className="text-xs leading-5 text-shark-gray-400">Sell access to your web app via OAuth.‌</p>
      </a>
      <a href="https://dash.whop.com/login?action=signup" target="_blank" className="app-card-background rounded-lg border-white/[.05] p-4 outline-none outline-2 outline-offset-2 focus-visible:outline-white row-start-4 xl:ml-[112px] xl:-mr-[112px] col-start-2">
         <div className="flex flex-row items-center gap-2 pb-1">
            <div>
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 1C2.44772 1 2 1.44772 2 2V14C2 14.5523 2.44772 15 3 15H13C13.5523 15 14 14.5523 14 14V6L9 1H3ZM6 10C6.82843 10 7.5 10.6716 7.5 11.5C8.05228 11.5 8.5 11.9477 8.5 12.5C8.5 13.0523 8.05228 13.5 7.5 13.5H4.5C3.94772 13.5 3.5 13.0523 3.5 12.5C3.5 11.9477 3.94772 11.5 4.5 11.5C4.5 10.6716 5.17157 10 6 10Z" fill="#D9D9DE"></path>
                  <path d="M9 5V1L14 6H10C9.44772 6 9 5.55228 9 5Z" fill="#92939E"></path>
               </svg>
            </div>
            <h5 className="font-semibold text-off-white">Files​​​​‌</h5>
         </div>
         <p className="text-xs leading-5 text-shark-gray-400">Sell access to exclusive files.‌</p>
      </a>
      <article aria-hidden="true" className="faded-app-placeholder c app-card-placeholder faded-app-placeholder-mobile row-span-3 row-start-2 mb-[-32px] hidden rounded-lg border border-white/[0.04] sm:block xl:row-span-2 xl:row-start-1 xl:mb-0 xl:mr-[-112px]"></article>
      <article aria-hidden="true" className="app-card-placeholder t faded-app-placeholder-mobile top col-span-2 col-start-2 hidden rounded-lg border border-white/[0.04] sm:block xl:col-span-2 xl:col-start-2 xl:row-span-1 xl:row-start-1 xl:ml-[112px] xl:mr-[-112px]"></article>
      <article aria-hidden="true" className="app-card-placeholder faded-app-placeholder-mobile r row-span-3 row-start-2 mb-[-32px] hidden rounded-lg border border-white/[0.04] sm:block xl:col-start-4 xl:row-span-2 xl:row-start-1 xl:mb-0 xl:ml-[112px] xl:mr-[-112px]"></article>
      <article aria-hidden="true" className="faded-app-placeholder row-span-2 row-start-4 mr-[-112px] hidden rounded-lg border border-white/[0.04] xl:block"></article>
      <article aria-hidden="true" className="app-card-placeholder faded-app-placeholder-mobile b col-span-2 col-start-2 row-span-1 row-start-5 hidden rounded-lg border border-white/[0.04] sm:block xl:ml-[112px] xl:mr-[-112px]"></article>
      <article aria-hidden="true" className="app-card-placeholder col-start-4 row-span-2 row-start-4 ml-[112px] mr-[-112px] hidden rounded-lg border border-white/[0.04] xl:block"></article>
   </div>
</div>
<div className="col-span-full -mx-6 flex flex-col justify-between overflow-hidden bg-shark-gray-950 shadow-bento-card sm:h-[520px] md:mx-0 md:rounded-2xl lg:col-span-5">
<div className="pl-12 pr-12 pt-12 sm:pr-12">
   <div className="flex flex-row gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
         <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4" fill="#FF6243" fill-opacity="0.2" stroke="#FF6243" stroke-width="1.5"></rect>
         <path d="M10.25 9.75L7.75 12L10.25 14.25" stroke="#FF6243" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
         <path d="M13.75 9.75L16.25 12L13.75 14.25" stroke="#FF6243" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      <h3 className="pb-4 text-xs font-semibold text-brand">Easy-to-use API​​​​‌‌</h3>
   </div>
   <h4 className="pb-3 text-xl font-semibold text-white sm:text-2xl">Build apps yourself‌</h4>
   <p className="max-w-lg text-sm text-shark-gray-300">Integrate Whop’s payment, membership, and fulfillment features into your software with just a few lines of code.​​​​‌‌</p>
   <a className="inline-flex justify-center rounded-md py-2 px-3 text-xs font-semibold outline-2 outline-offset-2  focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-2 transition-all bg-gray-button text-white outline-white mt-6" target="_blank" href="https://dev.whop.com/introduction"><span className="flex items-center gap-2">Read the docs​​​​‌﻿‍﻿​‍​‍‌‍﻿﻿‌﻿​‍‌‍‍‌‌‍‌﻿‌‍‍‌‌‍﻿‍​‍​‍​﻿‍‍​‍​‍‌﻿​﻿‌‍​‌‌‍﻿‍‌‍‍‌‌﻿‌​‌﻿‍‌​‍﻿‍‌‍‍‌‌‍﻿﻿​‍​‍​‍﻿​​‍​‍‌‍‍​‌﻿​‍‌‍‌‌‌‍‌‍​‍​‍​﻿‍‍​‍​‍​‍﻿﻿‌﻿​﻿‌‍‌‌‌‍﻿​‌‍﻿​​‍﻿﻿‌‍​﻿‌‍﻿‌‌﻿​﻿​‍﻿‌‌﻿​﻿‌﻿‌​‌﻿‌‌‌‍‌​‌‍‍‌‌‍﻿﻿​‍﻿﻿‌‍‍‌‌‍﻿‍‌﻿‌​‌‍‌‌‌‍﻿‍‌﻿‌​​‍﻿﻿‌‍‌‌‌‍‌​‌‍‍‌‌﻿‌​​‍﻿﻿‌‍‍‌‌‍‌​​﻿﻿‌‌‍‌​​﻿​﻿​﻿​‍​﻿‌​​﻿‍​​﻿‌﻿​﻿​‍​﻿‍‌​‍﻿‌​﻿​‍​﻿‌‌​﻿​﻿​﻿‌﻿​‍﻿‌​﻿‌​‌‍​‍‌‍​‌​﻿‌﻿​‍﻿‌‌‍​‌‌‍​﻿‌‍​‍‌‍‌‌​‍﻿‌​﻿​​‌‍‌‍​﻿​﻿​﻿‍​​﻿​‌​﻿‍‌​﻿‍​​﻿​​‌‍​‍​﻿‍​​﻿​‍​﻿‌‌​﻿‍﻿‌﻿‌​‌﻿‍‌‌﻿​​‌‍‌‌​﻿﻿‌‌‍﻿​‌‍​‌‌‍﻿‍‌‍‌​‌‍‍‌‌‍﻿‍‌‍‌﻿‌‌​​‌‍​‌‌‍‌﻿‌‍‌‌​﻿‍﻿‌﻿​​‌‍​‌‌﻿‌​‌‍‍​​﻿﻿‌‌‍​‌‌﻿​​‌‍‍‌‌​​﻿‌‍​‌‌﻿​‍‌‍‌​​‍﻿‍‌‍​‍‌﻿‌‌‌﻿‌​‌﻿‌​‌‍﻿﻿‌‍﻿‍​‍﻿‍‌‍﻿​‌‍​‌‌‍​‍‌‍‌‌‌‍﻿​​‍​‍‌﻿﻿‌</span></a>
</div>
<div className="relative mt-7 h-[240px] w-full -translate-x-12 sm:mt-0 sm:translate-x-0" aria-hidden="true" aria-label="A circuit with strobes of light beaming from it towards a snippet of code.">
   <div className="checkers relative h-full w-[336px]">
      <div className="checkers-top-line absolute top-0"></div>
      <div className="circuit-cover relative z-10 h-[104px] w-[104px] rounded-lg p-2 translate-x-[67px] translate-y-[68px]">
         <svg className="circuit-glow absolute -right-1 top-0" xmlns="http://www.w3.org/2000/svg" width="62" height="104" viewBox="0 0 62 104" fill="none">
            <g opacity="1" filter="url(#filter0_f_954_14753)">
               <ellipse cx="31" cy="52" rx="32" ry="11" transform="rotate(-90 31 52)" fill="url(#paint0_linear_954_14753)"></ellipse>
            </g>
            <defs>
               <filter id="filter0_f_954_14753" x="0" y="0" width="62" height="104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_954_14753"></feGaussianBlur>
               </filter>
               <linearGradient id="paint0_linear_954_14753" x1="68.1892" y1="63" x2="-15.8837" y2="63" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFED4C"></stop>
                  <stop offset="0.66866" stop-color="#FF6A4C"></stop>
               </linearGradient>
            </defs>
         </svg>
         <div className="inner-circuit relative h-full w-full rounded-[2px]">
            <svg className="translate-x-[20px] translate-y-[34px]" xmlns="http://www.w3.org/2000/svg" width="48" height="25" viewBox="0 0 48 25" fill="none">
               <g filter="url(#filter0_di_954_14755)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M47.9077 4.3812C43.962 0.243529 37.5806 0.248804 33.641 4.39703L17.6861 21.1227C22.0139 25.1117 28.5708 24.9501 32.6488 20.6562L48 4.49211L47.9077 4.3812ZM16.3576 3.85589C20.3022 -0.297615 26.6949 -0.297615 30.6395 3.85589L30.7594 3.98213L15.97 19.5546L8.70917 11.9093L16.3576 3.85589ZM7.24426 10.2051L0 2.6448C3.96719 -1.03197 10.0163 -0.875187 13.8059 3.11513L13.9236 3.23905L7.24426 10.2051Z" fill="#1D1D20" fill-opacity="0.3" shape-rendering="crispEdges"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M47.9077 4.3812C43.962 0.243529 37.5806 0.248804 33.641 4.39703L17.6861 21.1227C22.0139 25.1117 28.5708 24.9501 32.6488 20.6562L48 4.49211L47.9077 4.3812ZM16.3576 3.85589C20.3022 -0.297615 26.6949 -0.297615 30.6395 3.85589L30.7594 3.98213L15.97 19.5546L8.70917 11.9093L16.3576 3.85589ZM7.24426 10.2051L0 2.6448C3.96719 -1.03197 10.0163 -0.875187 13.8059 3.11513L13.9236 3.23905L7.24426 10.2051Z" fill="url(#paint0_linear_954_14755)" fill-opacity="0.4" shape-rendering="crispEdges"></path>
               </g>
               <defs>
                  <filter id="filter0_di_954_14755" x="0" y="0" width="48" height="24.7813" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                     <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                     <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                     <feOffset dy="0.781253"></feOffset>
                     <feComposite in2="hardAlpha" operator="out"></feComposite>
                     <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.07 0"></feColorMatrix>
                     <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_954_14755"></feBlend>
                     <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_954_14755" result="shape"></feBlend>
                     <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                     <feOffset dy="0.781253"></feOffset>
                     <feGaussianBlur stdDeviation="0.390626"></feGaussianBlur>
                     <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                     <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix>
                     <feBlend mode="normal" in2="shape" result="effect2_innerShadow_954_14755"></feBlend>
                  </filter>
                  <linearGradient id="paint0_linear_954_14755" x1="24" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                     <stop></stop>
                     <stop offset="0.827922" stop-opacity="0"></stop>
                  </linearGradient>
               </defs>
            </svg>
            <p className="sdk-text absolute bottom-1 left-2 text-[8px] font-medium text-shark-gray-300">SDK</p>
            <p className="serial-text absolute bottom-1 right-2 translate-y-[2px] font-mono text-[6px] font-medium leading-[16px] text-[rgba(146,_147,_158,_0.30)]">0114453</p>
         </div>
      </div>
      <div className="impact-glow impact-glow-2 absolute left-[240px] z-20 h-12 w-[1px]  translate-y-[-30px]"></div>
      <div className="impact-glow impact-glow-3 absolute left-[240px] z-20 h-12 w-[1px] translate-y-[-30px]" ></div>
      <div className="impact-glow static-impact-glow absolute left-[240px] z-20 h-12 w-[1px]  translate-y-[-30px]" id="static"></div>
      <div className="impact-glow impact-glow-2 absolute left-[240px] z-20 h-12 w-[1px]  translate-y-[-7px]" ></div>
      <div className="impact-glow impact-glow-2 absolute left-[240px] z-20 h-12 w-[1px]  translate-y-[-7px]" ></div>
      <div className="impact-glow static-impact-glow absolute left-[240px] z-20 h-12 w-[1px]  translate-y-[-7px]" id="static"></div>
      <div className="impact-glow impact-glow-2 absolute left-[240px] z-20 h-12 w-[1px]  translate-y-[16px]" ></div>
      <div className="impact-glow impact-glow-1 absolute left-[240px] z-20 h-12 w-[1px] translate-y-[16px]" ></div>
      <div className="impact-glow static-impact-glow absolute left-[240px] z-20 h-12 w-[1px]  translate-y-[16px]" id="static"></div>
      <div>
         <div className="relative -translate-y-[14px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none" className="circuit-comet absolute" >
               <path d="M6 6L12 6" stroke="url(#paint0_linear_954_14703)" stroke-width="1.5" stroke-linecap="round"></path>
               <g filter="url(#filter0_f_954_14703)">
                  <path d="M6 6L12 6" stroke="url(#paint1_linear_954_14703)" stroke-opacity="0.7" stroke-linecap="round"></path>
               </g>
               <defs>
                  <filter id="filter0_f_954_14703" x="0.5" y="0.5" width="17" height="11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                     <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                     <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                     <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_954_14703"></feGaussianBlur>
                  </filter>
                  <linearGradient id="paint0_linear_954_14703" x1="12.7097" y1="6" x2="5.45174" y2="5.72985" gradientUnits="userSpaceOnUse">
                     <stop stop-color="#FFA24C"></stop>
                     <stop offset="0.484936" stop-color="#FF6A4C"></stop>
                     <stop offset="0.860711" stop-color="#FF6243" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_954_14703" x1="12.7097" y1="6" x2="5.45174" y2="5.72985" gradientUnits="userSpaceOnUse">
                     <stop stop-color="#FFA24C"></stop>
                     <stop offset="0.484936" stop-color="#FF6A4C"></stop>
                     <stop offset="0.860711" stop-color="#FF6243" stop-opacity="0"></stop>
                  </linearGradient>
               </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="12" viewBox="0 0 34 12" fill="none" className="circuit-comet absolute" >
               <path d="M6 6L28 6" stroke="url(#paint0_linear_954_14704)" stroke-width="1.5" stroke-linecap="round"></path>
               <g filter="url(#filter0_f_954_14704)">
                  <path d="M6 6L28 6" stroke="url(#paint1_linear_954_14704)" stroke-opacity="0.7" stroke-linecap="round"></path>
               </g>
               <defs>
                  <filter id="filter0_f_954_14704" x="0.5" y="0.5" width="33" height="11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                     <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                     <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                     <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_954_14704"></feGaussianBlur>
                  </filter>
                  <linearGradient id="paint0_linear_954_14704" x1="30.6022" y1="6" x2="4.44014" y2="2.4295" gradientUnits="userSpaceOnUse">
                     <stop stop-color="#FFA24C"></stop>
                     <stop offset="0.484936" stop-color="#FF6A4C"></stop>
                     <stop offset="0.860711" stop-color="#FF6243" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_954_14704" x1="30.6022" y1="6" x2="4.44014" y2="2.4295" gradientUnits="userSpaceOnUse">
                     <stop stop-color="#FFA24C"></stop>
                     <stop offset="0.484936" stop-color="#FF6A4C"></stop>
                     <stop offset="0.860711" stop-color="#FF6243" stop-opacity="0"></stop>
                  </linearGradient>
               </defs>
            </svg>
         </div>
         <div className="relative translate-y-[10.5px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="12" viewBox="0 0 34 12" fill="none" className="circuit-comet absolute" >
               <path d="M6 6L28 6" stroke="url(#paint0_linear_954_14704)" stroke-width="1.5" stroke-linecap="round"></path>
               <g filter="url(#filter0_f_954_14704)">
                  <path d="M6 6L28 6" stroke="url(#paint1_linear_954_14704)" stroke-opacity="0.7" stroke-linecap="round"></path>
               </g>
               <defs>
                  <filter id="filter0_f_954_14704" x="0.5" y="0.5" width="33" height="11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                     <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                     <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                     <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_954_14704"></feGaussianBlur>
                  </filter>
                  <linearGradient id="paint0_linear_954_14704" x1="30.6022" y1="6" x2="4.44014" y2="2.4295" gradientUnits="userSpaceOnUse">
                     <stop stop-color="#FFA24C"></stop>
                     <stop offset="0.484936" stop-color="#FF6A4C"></stop>
                     <stop offset="0.860711" stop-color="#FF6243" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_954_14704" x1="30.6022" y1="6" x2="4.44014" y2="2.4295" gradientUnits="userSpaceOnUse">
                     <stop stop-color="#FFA24C"></stop>
                     <stop offset="0.484936" stop-color="#FF6A4C"></stop>
                     <stop offset="0.860711" stop-color="#FF6243" stop-opacity="0"></stop>
                  </linearGradient>
               </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="12" viewBox="0 0 34 12" fill="none" className="circuit-comet absolute" >
               <path d="M6 6L28 6" stroke="url(#paint0_linear_954_14704)" stroke-width="1.5" stroke-linecap="round"></path>
               <g filter="url(#filter0_f_954_14704)">
                  <path d="M6 6L28 6" stroke="url(#paint1_linear_954_14704)" stroke-opacity="0.7" stroke-linecap="round"></path>
               </g>
               <defs>
                  <filter id="filter0_f_954_14704" x="0.5" y="0.5" width="33" height="11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                     <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                     <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                     <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_954_14704"></feGaussianBlur>
                  </filter>
                  <linearGradient id="paint0_linear_954_14704" x1="30.6022" y1="6" x2="4.44014" y2="2.4295" gradientUnits="userSpaceOnUse">
                     <stop stop-color="#FFA24C"></stop>
                     <stop offset="0.484936" stop-color="#FF6A4C"></stop>
                     <stop offset="0.860711" stop-color="#FF6243" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_954_14704" x1="30.6022" y1="6" x2="4.44014" y2="2.4295" gradientUnits="userSpaceOnUse">
                     <stop stop-color="#FFA24C"></stop>
                     <stop offset="0.484936" stop-color="#FF6A4C"></stop>
                     <stop offset="0.860711" stop-color="#FF6243" stop-opacity="0"></stop>
                  </linearGradient>
               </defs>
            </svg>
         </div>
         <div className="relative translate-y-[34.5px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="12" viewBox="0 0 50 12" fill="none"  className="circuit-comet absolute circuit-comet">
               <path d="M6 6L44 6" stroke="url(#paint0_linear_954_14708)" stroke-width="1.5" stroke-linecap="round"></path>
               <g filter="url(#filter0_f_954_14708)">
                  <path d="M6 6L44 6" stroke="url(#paint1_linear_954_14708)" stroke-opacity="0.7" stroke-linecap="round"></path>
               </g>
               <defs>
                  <filter id="filter0_f_954_14708" x="0.5" y="0.5" width="49" height="11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                     <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                     <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                     <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_954_14708"></feGaussianBlur>
                  </filter>
                  <linearGradient id="paint0_linear_954_14708" x1="48.4946" y1="6" x2="4.88727" y2="-4.27965" gradientUnits="userSpaceOnUse">
                     <stop stop-color="#FFA24C"></stop>
                     <stop offset="0.484936" stop-color="#FF6A4C"></stop>
                     <stop offset="0.860711" stop-color="#FF6243" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_954_14708" x1="48.4946" y1="6" x2="4.88727" y2="-4.27965" gradientUnits="userSpaceOnUse">
                     <stop stop-color="#FFA24C"></stop>
                     <stop offset="0.484936" stop-color="#FF6A4C"></stop>
                     <stop offset="0.860711" stop-color="#FF6243" stop-opacity="0"></stop>
                  </linearGradient>
               </defs>   
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="12" viewBox="0 0 34 12" fill="none" className="circuit-comet absolute">
               <path d="M6 6L28 6" stroke="url(#paint0_linear_954_14704)" stroke-width="1.5" stroke-linecap="round"></path>
               <g filter="url(#filter0_f_954_14704)">
                  <path d="M6 6L28 6" stroke="url(#paint1_linear_954_14704)" stroke-opacity="0.7" stroke-linecap="round"></path>
               </g>
               <defs>
                  <filter id="filter0_f_954_14704" x="0.5" y="0.5" width="33" height="11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                     <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                     <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                     <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_954_14704"></feGaussianBlur>
                  </filter>
                  <linearGradient id="paint0_linear_954_14704" x1="30.6022" y1="6" x2="4.44014" y2="2.4295" gradientUnits="userSpaceOnUse">
                     <stop stop-color="#FFA24C"></stop>
                     <stop offset="0.484936" stop-color="#FF6A4C"></stop>
                     <stop offset="0.860711" stop-color="#FF6243" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_954_14704" x1="30.6022" y1="6" x2="4.44014" y2="2.4295" gradientUnits="userSpaceOnUse">
                     <stop stop-color="#FFA24C"></stop>
                     <stop offset="0.484936" stop-color="#FF6A4C"></stop>
                     <stop offset="0.860711" stop-color="#FF6243" stop-opacity="0"></stop>
                  </linearGradient>
               </defs>
            </svg>
         </div>
      </div>
   </div>
   <div className="absolute left-[240px] top-0 h-[480px] w-[353px] -translate-y-6 rounded-lg border border-white/[0.05] bg-[#2A2A2D] p-6 shadow-code-mockup">
      <pre>
        <code className="text-[12px] text-shark-gray-300">
          {`import { WhopApp } from '@whop-apps/sdk';

const submitReceipt = (receiptId) => {
  // Your submitReceipt function logic here
  console.log('Receipt ID submitted:', receiptId);
};

const fetchData = async () => {
  try {
    const result = await WhopApp.inAppPurchase({
      line_item_id: 'li_XXX',
    });

    if (result.status === 'ok') {
      submitReceipt(result.data.receipt_id);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

fetchData();
`}
        </code>
      </pre>
    </div>
   {/* <div className="absolute left-[240px] top-0 h-[480px] w-[353px] -translate-y-6 rounded-lg border border-white/[0.05] bg-[#2A2A2D] p-6 shadow-code-mockup">
      <pre><code className="text-[12px] text-shark-gray-300"><span>import <span className="text-white">{</span> <span className="text-brand">WhopApp</span> <span className="text-white">}</span> from <span className="text-brand">'@whop-apps/sdk'</span><br><br><span>const <span className="text-white">result</span> = await<!-- --> <span className="text-white"><span className="text-brand">WhopApp</span></span> </span><br><span className="text-white">  <!-- -->.inAppPurchase<!-- -->({</span> <br><span>    <!-- -->line_item_id:<!-- --> <span className="text-white">'li_XXX',</span></span><br><span>  });</span><br><br><span>if (result.status ===<!-- --> <span className="text-white">'ok'</span>)<!-- --> <!-- -->{</span><br><span>  <span className="text-brand">submitReceipt</span>(result.data.receipt_id);</span><br><span>}</span></span></code></pre>
   </div> */}
</div>
</div>


</div>
</div> 
 )
}

export default SellAnything