import React from 'react'
import { Link } from 'react-router-dom'

const SellOnWhop = () => {
  return (
<div className="unpadded-container px-0 py-0 [content-visibility:auto] md:p-10">
   <div className="border-stroke border-whop-stroke relative overflow-hidden bg-[#0E0E0F] md:rounded-xl md:border md:p-16">
      <div className="flex w-full justify-end md:hidden"><img alt="Sell On Whop Image Mobile" draggable="false" loading="lazy" width="2800" height="961" decoding="async" data-nimg="1" className="relative right-0 h-full w-auto pt-4 text-transparent" src='/assets/img/SellOnWhopImage.webp'/></div>
      <div className="z-10 px-8 pb-8 pt-2 md:p-0">
         <div>
            <div className="display2 text-white">Sell on Whop</div>
            <div className="paragraph2 pt-2 text-white">Sell your products to millions of new customers on Whop Marketplace.</div>
         </div>
         <div className="mt-10 flex gap-2">
            <Link className="flex-1 md:flex-none" to={"sell/"}>
               <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring w-full bg-whop-primary text-whop-fixed-white text-button4 h-10 px-[15px]">
                  <div className="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
                  <div className="z-10 flex items-center justify-center">
                     <div className="text-white font-semibold">Start Selling</div>
                  </div>
               </button>
            </Link>
            <Link target="_blank" className="flex-1 md:flex-none" to={"/"}>
               <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring w-full bg-whop-transparent text-whop-background border-whop-stroke border text-button4 h-10 px-[15px]">
                  <div className="absolute inset-0 transition group-hover/button:bg-whop-background/[12%] group-active/button:bg-whop-background/[18%]"></div>
                  <div className="z-10 flex items-center justify-center">
                     <div className="text-white font-semibold">Learn more</div>
                  </div>
               </button>
            </Link>
         </div>
      </div>
      <img alt="Sell On Whop Image Mobile" draggable="false" loading="lazy" width="2800" height="961" decoding="async" data-nimg="1" className="absolute bottom-0 right-0 top-0 mx-auto hidden h-full w-auto object-cover xl:block text-transparent"  src='/assets/img/SellOnWhopImage.webp' />
   </div>
</div>  )
}

export default SellOnWhop