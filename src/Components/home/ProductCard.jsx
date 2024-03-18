import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ val }) => {

   return (
      <div className="ml-2 shrink-0 snap-start first-of-type:ml-0 sm:ml-3 sm:first-of-type:ml-0 lg:ml-5 lg:first-of-type:ml-0 w-[93%] sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-13.5px)]">
         {/* <Link target="_blank" className="border-whop-stroke block select-none overflow-hidden rounded-[10px] border bg-white shadow-md transition duration-300 ease-in-out hover:scale-[102%] hover:shadow-lg" to={'/product/' + val.prod_code}> */}
         <Link target="_blank" className="border-whop-stroke block select-none overflow-hidden rounded-[10px] border bg-white shadow-md transition duration-300 ease-in-out hover:scale-[102%] hover:shadow-lg" to={'/product/' + val.id}>
            <div className="group relative flex aspect-[2/1] overflow-hidden">
               <div className="embla w-full">
                  <div className="embla__container flex h-full flex-row transform translate-x-0 translate-y-0 translate-z-0">
                     <div className="embla__slide aspect-[2/1] h-full w-full object-cover transition-all duration-200"><img className="h-full w-full object-cover" src={val?.thumbnail} alt={val?.name} width="440" height="220" /></div>
                  </div>
               </div>
            </div>
            <div className="flex gap-2 p-3">
               <img className="border-whop-stroke border-[0.5px] rounded-[10px] object-cover  w-10 h-10" src={val?.thumbnail} alt={val?.name} width="40" height="40" loading="lazy" />
               <div className="flex flex-1 gap-2 overflow-hidden">
                  <div className="flex-1 overflow-hidden">
                     <div className="flex gap-2">
                        <div className=" flex-1 overflow-hidden">
                           <div className="flex items-center gap-1 overflow-hidden">
                              <div className="subtitle1 overflow-hidden text-ellipsis whitespace-nowrap">{val?.name}</div>
                           </div>
                           <div className="text3 text-whop-dark-gray mt-0.5 overflow-hidden text-ellipsis whitespace-nowrap">{val?.short_info}</div>
                        </div>
                        <div>
                           <div className="button4 text-right">${val?.base_price}</div>
                           <div className="text-whop-gray mt-0.5 text-right text-[9px]">30 days</div>
                        </div>
                     </div>
                     <div className="text5 text-whop-gray mt-1.5 flex items-center gap-1 whitespace-nowrap">
                        <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                           <div className="flex">
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
                              <div className="pl-[2px]">5 (13)</div>
                              <div className="pl-[5px]">•</div>
                           </div>
                        </div>
                        <div className="whitespace-nowrap">{val?.cat_name}</div>
                        {/* <div>•</div>
                   <div className="whitespace-nowrap">NFTs</div>
                   <div>•</div>
                   <div className="whitespace-nowrap">Discord</div> */}
                     </div>
                  </div>
               </div>
            </div>
         </Link>
      </div>
   )
}

export default ProductCard