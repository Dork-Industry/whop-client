import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <Link target="_blank" className="hover:bg-whop-hover border-whop-stroke group flex cursor-pointer flex-col items-stretch gap-2 overflow-x-hidden border-0 border-b border-solid p-5 transition md:flex-row md:items-center md:gap-5 md:rounded-lg md:border-b-0 md:p-4" to={`/product/${product?.prod_code}`}>
    <div className="border-whop-stroke aspect-[2/1] w-full overflow-hidden rounded-lg border-[0.5px] border-solid md:h-[110px] md:w-auto lg:h-[149px]">
       <div className="group relative flex aspect-[2/1] overflow-hidden">
          <div className="embla w-full">
             <div className="embla__container flex h-full flex-row " >
                <div className="embla__slide aspect-[2/1] h-full w-full object-cover transition-all duration-200">
                   <Image src={product?.thumbnail} alt={"product"}/>
                </div>
             </div>
          </div>
       </div>
    </div>
    <div className="flex-1 overflow-hidden">
       <div className="flex gap-6 overflow-hidden">
          <div className="flex-1 overflow-hidden">
             <div className="mb-2 flex items-center gap-2.5 overflow-x-hidden">
                <img className="border-whop-stroke border-[0.5px] rounded-md object-cover w-6 h-6"  src="https://img.whop.com/3crg4YaMsnev7zm6nlgIwidGhp9U7dVFVqNq1QqiJKg/rs:fill:24:24/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vYm90cy9pbWFnZXMvMzY2Lm9yaWdpbmFsLnBuZw" alt="Company image" width="24" height="24" loading="lazy" fetchpriority="auto" srcset="https://img.whop.com/3crg4YaMsnev7zm6nlgIwidGhp9U7dVFVqNq1QqiJKg/rs:fill:24:24/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vYm90cy9pbWFnZXMvMzY2Lm9yaWdpbmFsLnBuZw 1x, https://img.whop.com/Fvqx27U_YrnIzo3UIWSVOSp27uguIMGHhPhGSgoaGhI/rs:fill:24:24/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vYm90cy9pbWFnZXMvMzY2Lm9yaWdpbmFsLnBuZw 2x"/>
                <div className="subtitle1 overflow-x-hidden text-ellipsis whitespace-nowrap">
                   {product?.name} 
                   <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="badge-check" className="svg-inline--fa fa-badge-check text-whop-field-highlight" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                         <path fill="currentColor" d="M256 0c36.8 0 68.8 20.7 84.9 51.1C373.8 41 411 49 437 75s34 63.3 23.9 96.1C491.3 187.2 512 219.2 512 256s-20.7 68.8-51.1 84.9C471 373.8 463 411 437 437s-63.3 34-96.1 23.9C324.8 491.3 292.8 512 256 512s-68.8-20.7-84.9-51.1C138.2 471 101 463 75 437s-34-63.3-23.9-96.1C20.7 324.8 0 292.8 0 256s20.7-68.8 51.1-84.9C41 138.2 49 101 75 75s63.3-34 96.1-23.9C187.2 20.7 219.2 0 256 0zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path>
                      </svg>
                   </div>
                   <span className="hidden md:inline">
                      {' '}—  {product?.prod_tagline}
                   </span>
                </div>
             </div>
             <div data-headlessui-state="">
                <div className="group/reviews relative flex w-min flex-nowrap items-center gap-1">
                   <div className="flex items-center gap-0.5 text-[12px]">
                      <span className="h-[13px] w-[13px] shrink-0">
                         <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.92969 4.03906L12.2812 4.53125C12.5625 4.57812 12.7969 4.76562 12.8906 5.04688C12.9844 5.30469 12.9141 5.60938 12.7031 5.79688L10.2656 8.21094L10.8516 11.6328C10.8984 11.9141 10.7812 12.1953 10.5469 12.3594C10.3125 12.5469 10.0078 12.5469 9.75 12.4297L6.75 10.8125L3.72656 12.4297C3.49219 12.5469 3.16406 12.5469 2.95312 12.3594C2.71875 12.1953 2.60156 11.9141 2.64844 11.6328L3.21094 8.21094L0.773438 5.79688C0.5625 5.60938 0.492188 5.30469 0.585938 5.04688C0.679688 4.76562 0.914062 4.57812 1.19531 4.53125L4.57031 4.03906L6.07031 0.921875C6.1875 0.664062 6.44531 0.5 6.75 0.5C7.03125 0.5 7.28906 0.664062 7.40625 0.921875L8.92969 4.03906Z" fill="url(#paint0_linear_22149_17218)"></path>
                            <defs>
                               <linearGradient id="paint0_linear_22149_17218" x1="-0.890909" y1="9" x2="14.4062" y2="9.66561" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#E89236"></stop>
                                  <stop offset="0.641102" stopColor="#F7CE78"></stop>
                                  <stop offset="1" stopColor="#E5A53F"></stop>
                               </linearGradient>
                            </defs>
                         </svg>
                      </span>
                      <span className="h-[13px] w-[13px] shrink-0">
                         <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.92969 4.03906L12.2812 4.53125C12.5625 4.57812 12.7969 4.76562 12.8906 5.04688C12.9844 5.30469 12.9141 5.60938 12.7031 5.79688L10.2656 8.21094L10.8516 11.6328C10.8984 11.9141 10.7812 12.1953 10.5469 12.3594C10.3125 12.5469 10.0078 12.5469 9.75 12.4297L6.75 10.8125L3.72656 12.4297C3.49219 12.5469 3.16406 12.5469 2.95312 12.3594C2.71875 12.1953 2.60156 11.9141 2.64844 11.6328L3.21094 8.21094L0.773438 5.79688C0.5625 5.60938 0.492188 5.30469 0.585938 5.04688C0.679688 4.76562 0.914062 4.57812 1.19531 4.53125L4.57031 4.03906L6.07031 0.921875C6.1875 0.664062 6.44531 0.5 6.75 0.5C7.03125 0.5 7.28906 0.664062 7.40625 0.921875L8.92969 4.03906Z" fill="url(#paint0_linear_22149_17218)"></path>
                            <defs>
                               <linearGradient id="paint0_linear_22149_17218" x1="-0.890909" y1="9" x2="14.4062" y2="9.66561" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#E89236"></stop>
                                  <stop offset="0.641102" stopColor="#F7CE78"></stop>
                                  <stop offset="1" stopColor="#E5A53F"></stop>
                               </linearGradient>
                            </defs>
                         </svg>
                      </span>
                      <span className="h-[13px] w-[13px] shrink-0">
                         <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.92969 4.03906L12.2812 4.53125C12.5625 4.57812 12.7969 4.76562 12.8906 5.04688C12.9844 5.30469 12.9141 5.60938 12.7031 5.79688L10.2656 8.21094L10.8516 11.6328C10.8984 11.9141 10.7812 12.1953 10.5469 12.3594C10.3125 12.5469 10.0078 12.5469 9.75 12.4297L6.75 10.8125L3.72656 12.4297C3.49219 12.5469 3.16406 12.5469 2.95312 12.3594C2.71875 12.1953 2.60156 11.9141 2.64844 11.6328L3.21094 8.21094L0.773438 5.79688C0.5625 5.60938 0.492188 5.30469 0.585938 5.04688C0.679688 4.76562 0.914062 4.57812 1.19531 4.53125L4.57031 4.03906L6.07031 0.921875C6.1875 0.664062 6.44531 0.5 6.75 0.5C7.03125 0.5 7.28906 0.664062 7.40625 0.921875L8.92969 4.03906Z" fill="url(#paint0_linear_22149_17218)"></path>
                            <defs>
                               <linearGradient id="paint0_linear_22149_17218" x1="-0.890909" y1="9" x2="14.4062" y2="9.66561" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#E89236"></stop>
                                  <stop offset="0.641102" stopColor="#F7CE78"></stop>
                                  <stop offset="1" stopColor="#E5A53F"></stop>
                               </linearGradient>
                            </defs>
                         </svg>
                      </span>
                      <span className="h-[13px] w-[13px] shrink-0">
                         <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.92969 4.03906L12.2812 4.53125C12.5625 4.57812 12.7969 4.76562 12.8906 5.04688C12.9844 5.30469 12.9141 5.60938 12.7031 5.79688L10.2656 8.21094L10.8516 11.6328C10.8984 11.9141 10.7812 12.1953 10.5469 12.3594C10.3125 12.5469 10.0078 12.5469 9.75 12.4297L6.75 10.8125L3.72656 12.4297C3.49219 12.5469 3.16406 12.5469 2.95312 12.3594C2.71875 12.1953 2.60156 11.9141 2.64844 11.6328L3.21094 8.21094L0.773438 5.79688C0.5625 5.60938 0.492188 5.30469 0.585938 5.04688C0.679688 4.76562 0.914062 4.57812 1.19531 4.53125L4.57031 4.03906L6.07031 0.921875C6.1875 0.664062 6.44531 0.5 6.75 0.5C7.03125 0.5 7.28906 0.664062 7.40625 0.921875L8.92969 4.03906Z" fill="url(#paint0_linear_22149_17218)"></path>
                            <defs>
                               <linearGradient id="paint0_linear_22149_17218" x1="-0.890909" y1="9" x2="14.4062" y2="9.66561" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#E89236"></stop>
                                  <stop offset="0.641102" stopColor="#F7CE78"></stop>
                                  <stop offset="1" stopColor="#E5A53F"></stop>
                               </linearGradient>
                            </defs>
                         </svg>
                      </span>
                      <span className="h-[13px] w-[13px] shrink-0">
                         <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.92969 4.03906L12.2812 4.53125C12.5625 4.57812 12.7969 4.76562 12.8906 5.04688C12.9844 5.30469 12.9141 5.60938 12.7031 5.79688L10.2656 8.21094L10.8516 11.6328C10.8984 11.9141 10.7812 12.1953 10.5469 12.3594C10.3125 12.5469 10.0078 12.5469 9.75 12.4297L6.75 10.8125L3.72656 12.4297C3.49219 12.5469 3.16406 12.5469 2.95312 12.3594C2.71875 12.1953 2.60156 11.9141 2.64844 11.6328L3.21094 8.21094L0.773438 5.79688C0.5625 5.60938 0.492188 5.30469 0.585938 5.04688C0.679688 4.76562 0.914062 4.57812 1.19531 4.53125L4.57031 4.03906L6.07031 0.921875C6.1875 0.664062 6.44531 0.5 6.75 0.5C7.03125 0.5 7.28906 0.664062 7.40625 0.921875L8.92969 4.03906Z" fill="url(#paint0_linear_22149_17218)"></path>
                            <defs>
                               <linearGradient id="paint0_linear_22149_17218" x1="-0.890909" y1="9" x2="14.4062" y2="9.66561" gradientUnits="userSpaceOnUse">
                                  <stop stopColor="#E89236"></stop>
                                  <stop offset="0.641102" stopColor="#F7CE78"></stop>
                                  <stop offset="1" stopColor="#E5A53F"></stop>
                               </linearGradient>
                            </defs>
                         </svg>
                      </span>
                   </div>
                   <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down text-whop-gray text-[8px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z"></path>
                   </svg>
                   <div className="subtitle4">4.97</div>
                   <div className="text4 text-whop-dark-gray">
                  {`(825)`}
                   </div>
                </div>
             </div>
             <div ></div>
             <div className="text1 text-whop-dark-gray my-3 hidden max-h-[39px] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:2] md:[display:-webkit-box]">Welcome to Profit Lounge, the #1 reselling community on Discord! 
             {product?.short_info}
             </div>
          </div>
          <div>
             <div className="button4 text-right">{product?.base_price}</div>
             <div className="text-whop-gray text-right text-xs">/month</div>
          </div>
       </div>
       <div className="text3 text-whop-dark-gray overflow-x-hidden py-1.5 md:hidden">
          <div className="line-clamp-3">
            {product?.short_info}
          </div>
       </div>
       <div className="text5 text-whop-gray flex items-center gap-1 overflow-x-hidden">
          <div className="whitespace-nowrap">{product?.cat_name}</div>
          {/* <div>•</div>
          <div className="whitespace-nowrap">General</div> */}
       </div>
    </div>
 </Link>  )
}

export default ProductCard