import React from 'react'

const SellOnWhop = () => {
  return (
<div class="unpadded-container px-0 py-0 [content-visibility:auto] md:p-10">
   <div class="border-stroke border-whop-stroke relative overflow-hidden bg-[#0E0E0F] md:rounded-xl md:border md:p-16">
      <div class="flex w-full justify-end md:hidden"><img alt="Sell On Whop Image Mobile" draggable="false" loading="lazy" width="2800" height="961" decoding="async" data-nimg="1" class="relative right-0 h-full w-auto pt-4 text-transparent" src='/assets/img/SellOnWhopImage.webp'/></div>
      <div class="z-10 px-8 pb-8 pt-2 md:p-0">
         <div>
            <div class="display2 text-white">Sell on Whop</div>
            <div class="paragraph2 pt-2 text-white">Sell your products to millions of new customers on Whop Marketplace.</div>
         </div>
         <div class="mt-10 flex gap-2">
            <a class="flex-1 md:flex-none" href="https://whop.com/sell/">
               <button type="button" class="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring w-full bg-whop-primary text-whop-fixed-white text-button4 h-10 px-[15px]">
                  <div class="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
                  <div class="z-10 flex items-center justify-center">
                     <div class="text-white font-semibold">Start Selling</div>
                  </div>
               </button>
            </a>
            <a target="_blank" class="flex-1 md:flex-none" href="https://docs.whop.com">
               <button type="button" class="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring w-full bg-whop-transparent text-whop-background border-whop-stroke border text-button4 h-10 px-[15px]">
                  <div class="absolute inset-0 transition group-hover/button:bg-whop-background/[12%] group-active/button:bg-whop-background/[18%]"></div>
                  <div class="z-10 flex items-center justify-center">
                     <div class="text-white font-semibold">Learn more</div>
                  </div>
               </button>
            </a>
         </div>
      </div>
      <img alt="Sell On Whop Image Mobile" draggable="false" loading="lazy" width="2800" height="961" decoding="async" data-nimg="1" class="absolute bottom-0 right-0 top-0 mx-auto hidden h-full w-auto object-cover xl:block text-transparent"  src='/assets/img/SellOnWhopImage.webp' />
   </div>
</div>  )
}

export default SellOnWhop