import React from 'react'

const General = () => {
  return (
    <div className="flex flex-col gap-10 sm:flex-row">
    <div className="flex h-[120px] w-[120px] cursor-pointer items-center justify-center">
       <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-full ">
          <img className="border-whop-stroke border-[0.5px] rounded-full object-cover w-32 h-32 bg-slate-300" src=""  alt="Avatar" width="128" height="128" loading="eager" fetchpriority="high"  />
          <div className="absolute bottom-0 w-full  cursor-pointer bg-black/75 text-center"><span className="button4 text-white opacity-100">Edit</span></div>
       </div>
    </div>
    <input accept="image/jpeg, image/png, image/jpg, image/gif" type="file" name="image" className='hidden' />
    <div className="flex w-full max-w-[800px] flex-col">
       <h2 className="text-header5 mb-3">Account info</h2>
       <div className="border-whop-stroke w-full rounded-[10px] border-[1px]">
          <div className="h-18 flex items-center justify-between gap-4 px-6 py-4">
             <div className="flex flex-col gap-y-1 truncate text-black"><span className="text-subtitle3 ">Name</span><span className="text-text3 truncate break-all text-whop-dark-gray opacity-50">Name</span></div>
             <button type="button" className="group/button relative shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring block sm:hidden bg-whop-background text-whop-black border-whop-stroke-dark border text-button4 h-10 px-[15px] shadow-sm">
                <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                <div className="z-10 flex items-center justify-center">
                   <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" className="svg-inline--fa fa-plus fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"></path>
                   </svg>
                   <div className="">Add</div>
                </div>
             </button>
             <button type="button" className="group/button relative shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring hidden sm:block bg-whop-background text-whop-black border-whop-stroke-dark border text-button4 h-10 px-[15px] shadow-sm">
                <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                <div className="z-10 flex items-center justify-center">
                   <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" className="svg-inline--fa fa-plus fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"></path>
                   </svg>
                   <div className="">Add</div>
                </div>
             </button>
          </div>
          <div className="border-whop-stroke w-full border-b-[1px]"></div>
          <div className="h-18 flex items-center justify-between gap-4 px-6 py-4">
             <div className="flex flex-col gap-y-1 truncate text-black"><span className="text-subtitle3 ">Username</span><span className="text-text3 truncate break-all">praveenpn180</span></div>
             <button type="button" className="group/button relative shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring block sm:hidden bg-whop-background text-whop-black border-whop-stroke-dark border text-button4 h-10 px-[15px] shadow-sm">
                <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                <div className="z-10 flex items-center justify-center">
                   <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" className="svg-inline--fa fa-pen fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"></path>
                   </svg>
                   <div className="">Edit</div>
                </div>
             </button>
             <button type="button" className="group/button relative shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring hidden sm:block bg-whop-background text-whop-black border-whop-stroke-dark border text-button4 h-10 px-[15px] shadow-sm">
                <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                <div className="z-10 flex items-center justify-center">
                   <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" className="svg-inline--fa fa-pen fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"></path>
                   </svg>
                   <div className="">Edit</div>
                </div>
             </button>
          </div>
          <div className="border-whop-stroke w-full border-b-[1px]"></div>
          <div className="h-18 flex items-center justify-between gap-4 px-6 py-4">
             <div className="flex flex-col gap-y-1 truncate text-black"><span className="text-subtitle3 ">Email</span><span className="text-text3 truncate break-all">praveenpn180@gmail.com</span></div>
             <button type="button" className="group/button relative shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring block sm:hidden bg-whop-background text-whop-black border-whop-stroke-dark border text-button4 h-10 px-[15px] shadow-sm">
                <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                <div className="z-10 flex items-center justify-center">
                   <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" className="svg-inline--fa fa-pen fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"></path>
                   </svg>
                   <div className="">Edit</div>
                </div>
             </button>
             <button type="button" className="group/button relative shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring hidden sm:block bg-whop-background text-whop-black border-whop-stroke-dark border text-button4 h-10 px-[15px] shadow-sm">
                <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                <div className="z-10 flex items-center justify-center">
                   <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" className="svg-inline--fa fa-pen fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"></path>
                   </svg>
                   <div className="">Edit</div>
                </div>
             </button>
          </div>
          <div className="border-whop-stroke w-full border-b-[1px]"></div>
          <div className="h-18 flex items-center justify-between gap-4 px-6 py-4">
             <div className="flex flex-col gap-y-1 truncate text-black"><span className="text-subtitle3 ">Phone number</span><span className="text-text3 truncate break-all text-whop-dark-gray opacity-50">Phone number</span></div>
             <button type="button" className="group/button relative shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring block sm:hidden bg-whop-background text-whop-black border-whop-stroke-dark border text-button4 h-10 px-[15px] shadow-sm">
                <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                <div className="z-10 flex items-center justify-center">
                   <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" className="svg-inline--fa fa-plus fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"></path>
                   </svg>
                   <div className="">Add</div>
                </div>
             </button>
             <button type="button" className="group/button relative shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring hidden sm:block bg-whop-background text-whop-black border-whop-stroke-dark border text-button4 h-10 px-[15px] shadow-sm">
                <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                <div className="z-10 flex items-center justify-center">
                   <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" className="svg-inline--fa fa-plus fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"></path>
                   </svg>
                   <div className="">Add</div>
                </div>
             </button>
          </div>
       </div>
       <div className="my-8 w-full">
          <div className="border-whop-stroke w-full border-b-[1px]"></div>
       </div>
       <h5 className="text-header5 mb-3">Danger zone</h5>
       <div className="flex w-full flex-col gap-2 sm:flex-row">
          <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring w-auto bg-whop-background text-whop-black border-whop-stroke border text-button4 h-10 px-[15px]">
             <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
             <div className="z-10 flex items-center justify-center">
                <div className="">Sign out</div>
             </div>
          </button>
          <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring w-auto bg-whop-background text-whop-black border-whop-stroke border text-button4 h-10 px-[15px]">
             <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
             <div className="z-10 flex items-center justify-center">
                <div className="">Sign out of all devices</div>
             </div>
          </button>
          <button type="button" className="group/button relative shrink-0 items-center justify-center overflow-hidden rounded-md focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring hidden w-auto sm:block bg-whop-background text-whop-error-red border-whop-stroke border text-button4 h-10 px-[15px]">
             <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
             <div className="z-10 flex items-center justify-center">
                <div className="">Delete account</div>
             </div>
          </button>
          <button type="button" className="group/button relative shrink-0 items-center justify-center overflow-hidden rounded-md focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring block w-auto sm:hidden bg-whop-background text-whop-error-red border-whop-stroke border text-button4 h-10 px-[15px]">
             <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
             <div className="z-10 flex items-center justify-center">
                <div className="">Delete account</div>
             </div>
          </button>
       </div>
    </div>
 </div> 
  )
}

export default General