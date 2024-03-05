import React,{useState,useEffect} from 'react'
import Apiconnect from '../../services/Apiconnect.js';
const TrendingProducts = () => {
    const [List, setList] = useState([]);
    useEffect(() => {
        getInfoList();
    }, []);

    const getInfoList = () => {
        // console.log('---XXXX--->>call start 11');
        Apiconnect.getData('product/getAll?limit=3').then((response) => {
            console.log(response);
            let _xtract = Apiconnect.decrypt_obj(response.data.data);
            setList([..._xtract, ..._xtract, ..._xtract]);
        });
    };

  return (
    <div class="[content-visibility:auto] padded-container py-8 md:py-[60px]">
   <div class="">
      <div class="flex items-end">
         <div class="flex-1">
            <h2 class="text-2xl font-bold">Trending Products</h2>
            <div class="paragraph2 text-whop-dark-gray mt-1 hidden md:block">Products currently in high demand.</div>
         </div>
         <div class="flex items-center gap-2">
            <button type="button" class="group/icon-button relative shrink-0 items-center justify-center overflow-hidden focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring font-sans tracking-[-0.005em] h-10 !w-10 rounded-md bg-whop-white text-whop-black hidden sm:flex">
               <div class="absolute inset-0 transition group-hover/icon-button:bg-black/[4%] group-active/icon-button:bg-black/[8%] biz-dark-1:group-hover/icon-button:bg-white/[8%] biz-dark-1:group-active/icon-button:bg-white/[16%] biz-dark-2:group-hover/icon-button:bg-white/[8%] biz-dark-2:group-active/icon-button:bg-white/[16%]"></div>
               <div class="flex items-center justify-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-left" class="svg-inline--fa fa-arrow-left fa-fw text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                     <path fill="currentColor" d="M7.4 273.4C2.7 268.8 0 262.6 0 256s2.7-12.8 7.4-17.4l176-168c9.6-9.2 24.8-8.8 33.9 .8s8.8 24.8-.8 33.9L83.9 232 424 232c13.3 0 24 10.7 24 24s-10.7 24-24 24L83.9 280 216.6 406.6c9.6 9.2 9.9 24.3 .8 33.9s-24.3 9.9-33.9 .8l-176-168z"></path>
                  </svg>
               </div>
            </button>
            <button type="button" class="group/icon-button relative shrink-0 items-center justify-center overflow-hidden focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring font-sans tracking-[-0.005em] h-10 !w-10 !cursor-not-allowed opacity-40 rounded-md bg-whop-white text-whop-black hidden sm:flex" disabled="">
               <div class="absolute inset-0 transition"></div>
               <div class="flex items-center justify-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-fw text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                     <path fill="currentColor" d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"></path>
                  </svg>
               </div>
            </button>
            <a href="/charts/?tab=1">
               <button type="button" class="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-background text-whop-black border-whop-stroke border text-button4 h-10 px-[15px]">
                  <div class="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                  <div class="z-10 flex items-center justify-center">
                     <div class="">See all</div>
                     <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-fw ml-[7px] text-[12px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path fill="currentColor" d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"></path>
                     </svg>
                  </div>
               </button>
            </a>
         </div>
      </div>
      <div class="relative mt-6">
      <div class="-mx-2 -my-5 flex snap-mandatory scroll-p-3 flex-nowrap gap-2 overflow-x-auto px-2 py-5 sm:snap-x">
      {List.map((val, key) => (
                   <div key={key} class="ml-2 shrink-0 snap-start first-of-type:ml-0 sm:ml-3 sm:first-of-type:ml-0 lg:ml-5 lg:first-of-type:ml-0 w-[93%] sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-13.5px)]">
                   <a target="_blank" class="border-whop-stroke block select-none overflow-hidden rounded-[10px] border bg-white shadow-md transition duration-300 ease-in-out hover:scale-[102%] hover:shadow-lg" href={'/product/' + val.prod_code}>
                      <div class="group relative flex aspect-[2/1] overflow-hidden">
                         <div class="embla w-full">
                            <div class="embla__container flex h-full flex-row transform translate-x-0 translate-y-0 translate-z-0">
                               <div class="embla__slide aspect-[2/1] h-full w-full object-cover transition-all duration-200"><img class="h-full w-full object-cover"  src={val?.thumbnail} alt={val?.name} width="440" height="220" /></div>
                            </div>
                         </div>
                      </div>
                      <div class="flex gap-2 p-3">
                         <img class="border-whop-stroke border-[0.5px] rounded-[10px] object-cover  w-10 h-10"  src={val?.thumbnail} alt={val?.name} width="40" height="40" loading="lazy"/>
                         <div class="flex flex-1 gap-2 overflow-hidden">
                            <div class="flex-1 overflow-hidden">
                               <div class="flex gap-2">
                                  <div class=" flex-1 overflow-hidden">
                                     <div class="flex items-center gap-1 overflow-hidden">
                                        <div class="subtitle1 overflow-hidden text-ellipsis whitespace-nowrap">{val?.name}</div>
                                     </div>
                                     <div class="text3 text-whop-dark-gray mt-0.5 overflow-hidden text-ellipsis whitespace-nowrap">{val?.short_info}</div>
                                  </div>
                                  <div>
                                     <div class="button4 text-right">$345.00</div>
                                     <div class="text-whop-gray mt-0.5 text-right text-[9px]">30 days</div>
                                  </div>
                               </div>
                               <div class="text5 text-whop-gray mt-1.5 flex items-center gap-1 whitespace-nowrap">
                                  <div data-state="closed" class="text-whop-gray focus:outline-none cursor-default inline-block">
                                     <div class="flex">
                                        <span class="h-[13px] w-[13px] shrink-0">
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
                                        <div class="pl-[2px]">5 (13)</div>
                                        <div class="pl-[5px]">•</div>
                                     </div>
                                  </div>
                                  <div class="whitespace-nowrap">Reselling</div>
                                  <div>•</div>
                                  <div class="whitespace-nowrap">NFTs</div>
                                  <div>•</div>
                                  <div class="whitespace-nowrap">Discord</div>
                               </div>
                            </div>
                         </div>
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

export default TrendingProducts