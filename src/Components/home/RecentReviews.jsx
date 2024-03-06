import React from 'react'

const RecentReviews = () => {
  return (
<div className="padded-container py-8 md:py-[60px]">
   <div className="">
      <div className="flex items-end">
         <div className="flex-1">
            <div className="display3">Recent Reviews</div>
         </div>
         <div className="flex items-center gap-2">
            <button type="button" className="group/icon-button relative shrink-0 items-center justify-center overflow-hidden focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring font-sans tracking-[-0.005em] h-10 !w-10 rounded-md bg-whop-white text-whop-black hidden sm:flex">
               <div className="absolute inset-0 transition group-hover/icon-button:bg-black/[4%] group-active/icon-button:bg-black/[8%] biz-dark-1:group-hover/icon-button:bg-white/[8%] biz-dark-1:group-active/icon-button:bg-white/[16%] biz-dark-2:group-hover/icon-button:bg-white/[8%] biz-dark-2:group-active/icon-button:bg-white/[16%]"></div>
               <div className="flex items-center justify-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-left" className="svg-inline--fa fa-arrow-left fa-fw text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                     <path fill="currentColor" d="M7.4 273.4C2.7 268.8 0 262.6 0 256s2.7-12.8 7.4-17.4l176-168c9.6-9.2 24.8-8.8 33.9 .8s8.8 24.8-.8 33.9L83.9 232 424 232c13.3 0 24 10.7 24 24s-10.7 24-24 24L83.9 280 216.6 406.6c9.6 9.2 9.9 24.3 .8 33.9s-24.3 9.9-33.9 .8l-176-168z"></path>
                  </svg>
               </div>
            </button>
            <button type="button" className="group/icon-button relative shrink-0 items-center justify-center overflow-hidden focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring font-sans tracking-[-0.005em] h-10 !w-10 rounded-md bg-whop-white text-whop-black hidden sm:flex">
               <div className="absolute inset-0 transition group-hover/icon-button:bg-black/[4%] group-active/icon-button:bg-black/[8%] biz-dark-1:group-hover/icon-button:bg-white/[8%] biz-dark-1:group-active/icon-button:bg-white/[16%] biz-dark-2:group-hover/icon-button:bg-white/[8%] biz-dark-2:group-active/icon-button:bg-white/[16%]"></div>
               <div className="flex items-center justify-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-fw text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                     <path fill="currentColor" d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"></path>
                  </svg>
               </div>
            </button>
         </div>
      </div>
      <div className="relative mt-6">

         <div className="-mx-2 -my-5 flex snap-mandatory scroll-p-3 gap-2 flex-nowrap overflow-x-auto px-2 py-5 sm:snap-x">
         {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(() => (
           
            <div className="ml-2 shrink-0 snap-start first-of-type:ml-0 sm:ml-3 sm:first-of-type:ml-0 lg:ml-5 lg:first-of-type:ml-0 w-[93%] sm:w-[calc(50%-6px)] md:w-[calc(33.333%-8px)] lg:w-[calc(25%-15px)]">
               <a className=" border-whop-stroke block cursor-pointer rounded-[10px] border border-solid p-4 shadow-md transition duration-300 ease-in-out  hover:scale-[102%]  hover:shadow-lg " href="/marketplace/thehaven/">
                  <div className="mb-4 flex items-center gap-2">
                     <img className="border-whop-stroke border-[0.5px] rounded-full object-cover w-10 h-10"  src="https://img.whop.com/cfhBUc9jbeqYhlOkUCJDDy3E0U6VDo_IcSuLE72L4o8/rs:fill:40:40/el:1/aHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXZhdGFycy8xNzY1MTg2OTc1Mzg1NTE4MDgvNTU2YjU5ZDdlZGMxZmJiOTQ4NDQ3YjhhYzBkZjk1YWY" alt="Reviewer avatar" width="40" height="40" loading="lazy" fetchpriority="auto" srcset="https://img.whop.com/cfhBUc9jbeqYhlOkUCJDDy3E0U6VDo_IcSuLE72L4o8/rs:fill:40:40/el:1/aHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXZhdGFycy8xNzY1MTg2OTc1Mzg1NTE4MDgvNTU2YjU5ZDdlZGMxZmJiOTQ4NDQ3YjhhYzBkZjk1YWY 1x, https://img.whop.com/7jnKzk6zhmymhvyxP2pV7jOczt7nyzrm0dEK41IiuMU/rs:fill:40:40/el:1/dpr:2/aHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXZhdGFycy8xNzY1MTg2OTc1Mzg1NTE4MDgvNTU2YjU5ZDdlZGMxZmJiOTQ4NDQ3YjhhYzBkZjk1YWY 2x"/>
                     <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                           <div className="subtitle1 overflow-hidden text-ellipsis whitespace-nowrap">chaunceystjohn</div>
                           <div className="text4 text-whop-gray mt-0.5 whitespace-nowrap">7h</div>
                        </div>
                        <div className="text4 text-whop-gray mt-0.5 overflow-hidden text-ellipsis whitespace-nowrap">
                           Member for 2d
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-[12px]">
                     <span className="h-[13px] w-[13px] shrink-0">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M8.92969 4.03906L12.2812 4.53125C12.5625 4.57812 12.7969 4.76562 12.8906 5.04688C12.9844 5.30469 12.9141 5.60938 12.7031 5.79688L10.2656 8.21094L10.8516 11.6328C10.8984 11.9141 10.7812 12.1953 10.5469 12.3594C10.3125 12.5469 10.0078 12.5469 9.75 12.4297L6.75 10.8125L3.72656 12.4297C3.49219 12.5469 3.16406 12.5469 2.95312 12.3594C2.71875 12.1953 2.60156 11.9141 2.64844 11.6328L3.21094 8.21094L0.773438 5.79688C0.5625 5.60938 0.492188 5.30469 0.585938 5.04688C0.679688 4.76562 0.914062 4.57812 1.19531 4.53125L4.57031 4.03906L6.07031 0.921875C6.1875 0.664062 6.44531 0.5 6.75 0.5C7.03125 0.5 7.28906 0.664062 7.40625 0.921875L8.92969 4.03906Z" fill="url(#paint0_linear_22149_17218)"></path>
                           <defs>
                              <linearGradient id="paint0_linear_22149_17218" x1="-0.890909" y1="9" x2="14.4062" y2="9.66561" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#E89236"></stop>
                                 <stop offset="0.641102" stop-color="#F7CE78"></stop>
                                 <stop offset="1" stop-color="#E5A53F"></stop>
                              </linearGradient>
                           </defs>
                        </svg>
                     </span>
                     <span className="h-[13px] w-[13px] shrink-0">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M8.92969 4.03906L12.2812 4.53125C12.5625 4.57812 12.7969 4.76562 12.8906 5.04688C12.9844 5.30469 12.9141 5.60938 12.7031 5.79688L10.2656 8.21094L10.8516 11.6328C10.8984 11.9141 10.7812 12.1953 10.5469 12.3594C10.3125 12.5469 10.0078 12.5469 9.75 12.4297L6.75 10.8125L3.72656 12.4297C3.49219 12.5469 3.16406 12.5469 2.95312 12.3594C2.71875 12.1953 2.60156 11.9141 2.64844 11.6328L3.21094 8.21094L0.773438 5.79688C0.5625 5.60938 0.492188 5.30469 0.585938 5.04688C0.679688 4.76562 0.914062 4.57812 1.19531 4.53125L4.57031 4.03906L6.07031 0.921875C6.1875 0.664062 6.44531 0.5 6.75 0.5C7.03125 0.5 7.28906 0.664062 7.40625 0.921875L8.92969 4.03906Z" fill="url(#paint0_linear_22149_17218)"></path>
                           <defs>
                              <linearGradient id="paint0_linear_22149_17218" x1="-0.890909" y1="9" x2="14.4062" y2="9.66561" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#E89236"></stop>
                                 <stop offset="0.641102" stop-color="#F7CE78"></stop>
                                 <stop offset="1" stop-color="#E5A53F"></stop>
                              </linearGradient>
                           </defs>
                        </svg>
                     </span>
                     <span className="h-[13px] w-[13px] shrink-0">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M8.92969 4.03906L12.2812 4.53125C12.5625 4.57812 12.7969 4.76562 12.8906 5.04688C12.9844 5.30469 12.9141 5.60938 12.7031 5.79688L10.2656 8.21094L10.8516 11.6328C10.8984 11.9141 10.7812 12.1953 10.5469 12.3594C10.3125 12.5469 10.0078 12.5469 9.75 12.4297L6.75 10.8125L3.72656 12.4297C3.49219 12.5469 3.16406 12.5469 2.95312 12.3594C2.71875 12.1953 2.60156 11.9141 2.64844 11.6328L3.21094 8.21094L0.773438 5.79688C0.5625 5.60938 0.492188 5.30469 0.585938 5.04688C0.679688 4.76562 0.914062 4.57812 1.19531 4.53125L4.57031 4.03906L6.07031 0.921875C6.1875 0.664062 6.44531 0.5 6.75 0.5C7.03125 0.5 7.28906 0.664062 7.40625 0.921875L8.92969 4.03906Z" fill="url(#paint0_linear_22149_17218)"></path>
                           <defs>
                              <linearGradient id="paint0_linear_22149_17218" x1="-0.890909" y1="9" x2="14.4062" y2="9.66561" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#E89236"></stop>
                                 <stop offset="0.641102" stop-color="#F7CE78"></stop>
                                 <stop offset="1" stop-color="#E5A53F"></stop>
                              </linearGradient>
                           </defs>
                        </svg>
                     </span>
                     <span className="h-[13px] w-[13px] shrink-0">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M8.92969 4.03906L12.2812 4.53125C12.5625 4.57812 12.7969 4.76562 12.8906 5.04688C12.9844 5.30469 12.9141 5.60938 12.7031 5.79688L10.2656 8.21094L10.8516 11.6328C10.8984 11.9141 10.7812 12.1953 10.5469 12.3594C10.3125 12.5469 10.0078 12.5469 9.75 12.4297L6.75 10.8125L3.72656 12.4297C3.49219 12.5469 3.16406 12.5469 2.95312 12.3594C2.71875 12.1953 2.60156 11.9141 2.64844 11.6328L3.21094 8.21094L0.773438 5.79688C0.5625 5.60938 0.492188 5.30469 0.585938 5.04688C0.679688 4.76562 0.914062 4.57812 1.19531 4.53125L4.57031 4.03906L6.07031 0.921875C6.1875 0.664062 6.44531 0.5 6.75 0.5C7.03125 0.5 7.28906 0.664062 7.40625 0.921875L8.92969 4.03906Z" fill="url(#paint0_linear_22149_17218)"></path>
                           <defs>
                              <linearGradient id="paint0_linear_22149_17218" x1="-0.890909" y1="9" x2="14.4062" y2="9.66561" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#E89236"></stop>
                                 <stop offset="0.641102" stop-color="#F7CE78"></stop>
                                 <stop offset="1" stop-color="#E5A53F"></stop>
                              </linearGradient>
                           </defs>
                        </svg>
                     </span>
                     <span className="h-[13px] w-[13px] shrink-0">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M8.92969 4.03906L12.2812 4.53125C12.5625 4.57812 12.7969 4.76562 12.8906 5.04688C12.9844 5.30469 12.9141 5.60938 12.7031 5.79688L10.2656 8.21094L10.8516 11.6328C10.8984 11.9141 10.7812 12.1953 10.5469 12.3594C10.3125 12.5469 10.0078 12.5469 9.75 12.4297L6.75 10.8125L3.72656 12.4297C3.49219 12.5469 3.16406 12.5469 2.95312 12.3594C2.71875 12.1953 2.60156 11.9141 2.64844 11.6328L3.21094 8.21094L0.773438 5.79688C0.5625 5.60938 0.492188 5.30469 0.585938 5.04688C0.679688 4.76562 0.914062 4.57812 1.19531 4.53125L4.57031 4.03906L6.07031 0.921875C6.1875 0.664062 6.44531 0.5 6.75 0.5C7.03125 0.5 7.28906 0.664062 7.40625 0.921875L8.92969 4.03906Z" fill="url(#paint0_linear_22149_17218)"></path>
                           <defs>
                              <linearGradient id="paint0_linear_22149_17218" x1="-0.890909" y1="9" x2="14.4062" y2="9.66561" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#E89236"></stop>
                                 <stop offset="0.641102" stop-color="#F7CE78"></stop>
                                 <stop offset="1" stop-color="#E5A53F"></stop>
                              </linearGradient>
                           </defs>
                        </svg>
                     </span>
                  </div>
                  <div className="paragraph2 mt-4 h-[120px] overflow-hidden [-webkit-box-orient:vertical] [display:-webkit-box] [-webkit-line-clamp:5]">I made 5x my monthly subscription in my first day of being in The Haven community. The holistic effect of having (1) excellent analysis, (2) great trade setups, (3) an active community to bounce ideas off, and (4) highly engaged analysts constantly commenting and sharing insights is unmatched.
                     No days are boring. Whatever market you might be interested in, there's something for you here. As someone learning TA better while following others' lead, this community strikes the sweet spot.
                  </div>
                  <div className="bg-whop-stroke my-4 h-[0.5px] rounded-full"></div>
                  <div className="flex items-center gap-2">
                     <img className="border-whop-stroke border-[0.5px] rounded-[10px] object-cover w-10 h-10"  src="https://img.whop.com/WngCCAsu6k0Sf1GkVfAGmhah2Cr0Ql0l77m2EYGqJTU/rs:fill:40:40/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTAyLTIxL3VzZXJfNDA2NDBfMTU2NzQzOTktZGU4My00NDE2LTg1MDgtNzJkZDgyZTVlZjdjLnBuZw" alt="Product image" width="40" height="40" loading="lazy" fetchpriority="auto" srcset="https://img.whop.com/WngCCAsu6k0Sf1GkVfAGmhah2Cr0Ql0l77m2EYGqJTU/rs:fill:40:40/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTAyLTIxL3VzZXJfNDA2NDBfMTU2NzQzOTktZGU4My00NDE2LTg1MDgtNzJkZDgyZTVlZjdjLnBuZw 1x, https://img.whop.com/2F0tEOlxTZjPOAxL4_TdssN8kwM3GFu8q6G6dis1yFg/rs:fill:40:40/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTAyLTIxL3VzZXJfNDA2NDBfMTU2NzQzOTktZGU4My00NDE2LTg1MDgtNzJkZDgyZTVlZjdjLnBuZw 2x"/>
                     <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                           <div className="subtitle1 overflow-hidden text-ellipsis whitespace-nowrap">The Haven</div>
                           <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="badge-check" className="w-4 h-4 text-whop-fieldHighlight text-sm" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path fill="currentColor" d="M256 0c36.8 0 68.8 20.7 84.9 51.1C373.8 41 411 49 437 75s34 63.3 23.9 96.1C491.3 187.2 512 219.2 512 256s-20.7 68.8-51.1 84.9C471 373.8 463 411 437 437s-63.3 34-96.1 23.9C324.8 491.3 292.8 512 256 512s-68.8-20.7-84.9-51.1C138.2 471 101 463 75 437s-34-63.3-23.9-96.1C20.7 324.8 0 292.8 0 256s20.7-68.8 51.1-84.9C41 138.2 49 101 75 75s63.3-34 96.1-23.9C187.2 20.7 219.2 0 256 0zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path>
                           </svg>
                        </div>
                        <div className="text4 text-whop-gray mt-0.5 overflow-hidden text-ellipsis whitespace-nowrap">Cryptocurrency Trading Educational Platform</div>
                     </div>
                     <div className="text-whop-fieldHighlight subtitle3 cursor-pointer hover:underline">View</div>
                  </div>
               </a>
            </div>
         ))}
           
         </div>
      </div>
   </div>
</div> 
 )
}

export default RecentReviews