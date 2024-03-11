import React from 'react'

const ResolutionCenter = () => {
  return (
    <div className="flex min-h-screen w-full  flex-row justify-center py-12 sm:min-h-[calc(100vh-115px)]">
    <div className="w-full max-w-[1300px] items-center lg:px-5 sm:px-0">
      
       <h5 className="text-header5 mb-4 font-semibold">Your resolution center</h5>
       <div className="border-b-whop-stroke flex w-full items-center justify-between pb-3">
          <div className="h-fit w-[180px] group">
             <div className="relative flex items-center w-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                   <span className="sm:text-sm">
                      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="magnifying-glass" className="fa-magnifying-glass fa-fw text-whop-dark-gray/[75%] absolute top-1/2 -translate-y-1/2 h-3 w-3 ml-[-5px] group-focus-within:text-whop-field-highlight" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                         <path fill="currentColor" d="M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"></path>
                      </svg>
                   </span>
                </div>
                <input data-hj-allow="true" placeholder="search" autocomplete="off" spellcheck="false" autocorrect="off" className="block appearance-none pr-3 shadow-sm focus-within:border-whop-field-highlight focus-within:ring-whop-field-highlight/30 border transition focus-within:outline-none focus-within:ring placeholder:text-whop-dark-gray/[50%] outline-none w-full group-focus-within:border-whop-field-highlight bg-whop-field-highlight/6 text-whop-field-highlight text-subtitle4 border-whop-stroke-dark h-6 rounded-full pl-[28px]" type="search" value="" />
             </div>
          </div>
          <span className="text-text4 text-whop-gray">0 results</span>
       </div>
       <div className="border-whop-stroke-dark bg-whop-background w-full rounded-[10px] px-10 py-6 border">
          <div className="mx-auto flex max-w-[400px] flex-col gap-6 text-center">
             <div className="border-whop-stroke-dark bg-whop-background mx-auto flex animate-pulse items-center justify-center border drop-shadow-lg h-12 w-12 rounded-2xl">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="receipt" className=" fa-receipt fa-fw text-whop-gray h-6 w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                   <path fill="currentColor" d="M39.6 5.8C32.5-.3 22.5-1.7 14 2.2S0 14.6 0 24V488c0 9.4 5.5 17.9 14 21.8s18.5 2.5 25.6-3.6L80 471.6l40.4 34.6c9 7.7 22.3 7.7 31.2 0L192 471.6l40.4 34.6c9 7.7 22.3 7.7 31.2 0L304 471.6l40.4 34.6c7.1 6.1 17.1 7.5 25.6 3.6s14-12.4 14-21.8V24c0-9.4-5.5-17.9-14-21.8s-18.5-2.5-25.6 3.6L304 40.4 263.6 5.8c-9-7.7-22.3-7.7-31.2 0L192 40.4 151.6 5.8c-9-7.7-22.3-7.7-31.2 0L80 40.4 39.6 5.8zm8.4 430V76.2l16.4 14c9 7.7 22.3 7.7 31.2 0L136 55.6l40.4 34.6c9 7.7 22.3 7.7 31.2 0L248 55.6l40.4 34.6c9 7.7 22.3 7.7 31.2 0l16.4-14V435.8l-16.4-14c-9-7.7-22.3-7.7-31.2 0L248 456.4l-40.4-34.6c-9-7.7-22.3-7.7-31.2 0L136 456.4 95.6 421.8c-9-7.7-22.3-7.7-31.2 0L48 435.8zM120 144c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 176c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zM96 256c0 13.3 10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-13.3 0-24 10.7-24 24z"></path>
                </svg>
             </div>
             <div>
                <p className="text-whop-off-black text-header4">No resolutions</p>
                <p className="text-whop-dark-gray mt-1 text-paragraph3">You have no resolutions.</p>
             </div>
             <div className="mx-auto flex w-full flex-col-reverse gap-2 sm:flex-row sm:justify-center"></div>
          </div>
       </div>
       <div className="flex items-center justify-between">
          <div className="flex items-center gap-2"></div>
          <div className="flex items-center gap-2">
             <div className="subtitle flex h-8 w-8 select-none items-center justify-center rounded-md border-2 transition border-transparent cursor-not-allowed opacity-50">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" className="w-5 h-5 fa-chevron-left " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                   <path fill="currentColor" d="M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L15 239z"></path>
                </svg>
             </div>
             <div className="subtitle flex h-8 w-8 select-none items-center justify-center rounded-md border-2 transition border-transparent cursor-not-allowed opacity-50">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" className="w-5 h-5 fa-chevron-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                   <path fill="currentColor" d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"></path>
                </svg>
             </div>
             <div className="text4 text-whop-gray">Showing 1 - 0 of 0</div>
          </div>
       </div>
    </div>
 </div>
  )
}

export default ResolutionCenter