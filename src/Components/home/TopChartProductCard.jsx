import React from 'react'

const TopChartProductCard = ({product}) => {
  return (
    <a className="flex flex-1 items-center gap-4 overflow-hidden" href="/marketplace/blitzer-ai/">
    <img className="border-whop-stroke border-[0.5px] rounded-2xl object-cover w-16 h-16"  src="https://img.whop.com/70HI5x6znN_usDdN6oI_fShLgbJkbcKGyvpTLpEHNxw/rs:fill:64:64/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTAxLTEyL3VzZXJfMTA5NjgyMF85ZjFjYWMzMC01NDdlLTRhOTQtYjk5Zi0xNjQ4MmYzNDgzOTAucG5n" alt="Company image" width="64" height="64" loading="lazy" fetchpriority="auto" srcset="https://img.whop.com/70HI5x6znN_usDdN6oI_fShLgbJkbcKGyvpTLpEHNxw/rs:fill:64:64/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTAxLTEyL3VzZXJfMTA5NjgyMF85ZjFjYWMzMC01NDdlLTRhOTQtYjk5Zi0xNjQ4MmYzNDgzOTAucG5n 1x, https://img.whop.com/HgnUFJoiHAU2GQiDHAGaCSzyaqTJjsG-1lXEKvamuEE/rs:fill:64:64/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTAxLTEyL3VzZXJfMTA5NjgyMF85ZjFjYWMzMC01NDdlLTRhOTQtYjk5Zi0xNjQ4MmYzNDgzOTAucG5n 2x" />
    <div className="border-whop-stroke flex flex-1 items-stretch gap-2 overflow-hidden border-b-[0.5px] border-l-0 border-r-0 border-t-0 border-solid py-3">
       <div className="subtitle3 w-[19px]">{product?.no}</div>
       <div className="flex flex-1 gap-2 overflow-hidden">
          <div className="flex-1 overflow-hidden">
             <div className="flex gap-2">
                <div className=" flex-1 overflow-hidden">
                   <div className="flex items-center gap-1 overflow-hidden">
                      <div className="subtitle1 overflow-hidden text-ellipsis whitespace-nowrap">Blitzer.Ai ⚡</div>
                   </div>
                   <div className="text3 text-whop-dark-gray mt-0.5 overflow-hidden text-ellipsis whitespace-nowrap">$1-$2 A DAY FOR THE MOST PROFITABLE AI BASED BETTING MODELS &amp; PICKS 📈</div>
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
                                  <stop stop-color="#E89236"></stop>
                                  <stop offset="0.641102" stop-color="#F7CE78"></stop>
                                  <stop offset="1" stop-color="#E5A53F"></stop>
                               </linearGradient>
                            </defs>
                         </svg>
                      </span>
                      <div className="pl-[2px]">
                         4.6 (60)
                      </div>
                      <div className="pl-[5px]">•</div>
                   </div>
                </div>
                <div className="whitespace-nowrap">Sports Picks</div>
                <div>•</div>
                <div className="whitespace-nowrap">Betting Algorithms</div>
                <div>•</div>
                <div className="whitespace-nowrap">Discord</div>
             </div>
          </div>
          <div>
             <div className="button4 text-right">$15.00</div>
             <div className="text-whop-gray mt-0.5 text-right text-[9px]">/week</div>
             <div className="subtitle5 mt-1.5 rounded-[2px] bg-[#E6F7CF] px-[5px] py-[1.5px] text-[#38863E]">Free Trial</div>
          </div>
       </div>
    </div>
 </a>
   )
}

export default TopChartProductCard