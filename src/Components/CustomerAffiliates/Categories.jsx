import React from 'react'

const Categories = () => {
  return (
    <div className='pt-4'>
        <div className="space-y-6">
   <h5 className="text-whop-black">
      12  categories
   </h5>
   <div className="flex min-h-0 flex-col">
      <div className="flex-1 overflow-x-auto">
         <table cellpadding="8" className="w-full table-auto overflow-hidden">
            <thead className="border-whop-stroke border-b">
               <tr>
                  <th colspan="1" className="w-[150px] text-overline4 group whitespace-nowrap py-[11px] text-left uppercase">
                     <div className="flex items-center text-whop-black cursor-pointer select-none">
                        product
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort" className="w-4 h-4 fa-sort fa-fw text-whop-gray/40 group-hover:text-whop-gray h-2.5 w-2.5 transition-all" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                           <path fill="currentColor" d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"></path>
                        </svg>
                     </div>
                  </th>
                  <th colspan="1" className="w-[150px] text-overline4 group whitespace-nowrap py-[11px] text-left uppercase">
                     <div className="flex items-center text-whop-black">reward</div>
                  </th>
                  <th colspan="1" className="w-[150px] text-overline4 group whitespace-nowrap py-[11px] text-left uppercase">
                     <div className="flex items-center text-whop-black"></div>
                  </th>
               </tr>
            </thead>
            <tbody className="">
               <tr className="border-whop-stroke  !border-b">
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <a className="flex items-center gap-2" target="_blank" href="/">
                        <div className="border-whop-stroke flex h-10 w-10 items-center justify-center rounded-[10px] border-[0.5px]">
                           <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="house" className="w-4 h-4 fa-house fa-fw text-whop-black" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                              <path fill="currentColor" d="M303.5 5.7c-9-7.6-22.1-7.6-31.1 0l-264 224c-10.1 8.6-11.3 23.7-2.8 33.8s23.7 11.3 33.8 2.8L64 245.5V432c0 44.2 35.8 80 80 80H432c44.2 0 80-35.8 80-80V245.5l24.5 20.8c10.1 8.6 25.3 7.3 33.8-2.8s7.3-25.3-2.8-33.8l-264-224zM112 432V204.8L288 55.5 464 204.8V432c0 17.7-14.3 32-32 32H384V312c0-22.1-17.9-40-40-40H232c-22.1 0-40 17.9-40 40V464H144c-17.7 0-32-14.3-32-32zm128 32V320h96V464H240z"></path>
                           </svg>
                        </div>
                        <div className="subtitle3">Home (whop.com)</div>
                     </a>
                  </td>
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                        <div className="inline-flex w-auto items-center justify-center rounded px-1.5 text-subtitle4 h-[18px] bg-whop-tag-green-background text-whop-tag-green">Variable reward</div>
                     </div>
                  </td>
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <div className="flex w-full justify-end">
                        <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-primary text-whop-fixed-white text-button4 h-10 px-[15px]">
                           <div className="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
                           <div className="z-10 flex items-center justify-center">
                              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="link-simple" className="w-4 h-4 fa-link-simple fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                 <path fill="currentColor" d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path>
                              </svg>
                              <div className="">Copy link</div>
                           </div>
                        </button>
                     </div>
                  </td>
               </tr>
               <tr className="border-whop-stroke !border-b">
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <a className="flex items-center gap-2" target="_blank" href="/categories/reselling/">
                        <div className="border-whop-stroke flex h-10 w-10 items-center justify-center rounded-[10px] border-[0.5px]">
                           <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="cart-shopping-fast" className="w-4 h-4 fa-cart-shopping-fast fa-fw text-whop-black" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                              <path fill="currentColor" d="M64 24C64 10.7 74.7 0 88 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H234.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H552c13.3 0 24 10.7 24 24s-10.7 24-24 24H263.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H88C74.7 48 64 37.3 64 24zM225.6 240H523.2c10.9 0 20.4-7.3 23.2-17.8L584.7 80H195.1l30.5 160zM192 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM24 96h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H136c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path>
                           </svg>
                        </div>
                        <div className="subtitle3">Reselling</div>
                     </a>
                  </td>
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                        <div className="inline-flex w-auto items-center justify-center rounded px-1.5 text-subtitle4 h-[18px] bg-whop-tag-green-background text-whop-tag-green">Variable reward</div>
                     </div>
                  </td>
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <div className="flex w-full justify-end">
                        <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-primary text-whop-fixed-white text-button4 h-10 px-[15px]">
                           <div className="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
                           <div className="z-10 flex items-center justify-center">
                              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="link-simple" className="w-4 h-4 fa-link-simple fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                 <path fill="currentColor" d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path>
                              </svg>
                              <div className="">Copy link</div>
                           </div>
                        </button>
                     </div>
                  </td>
               </tr>
               <tr className="border-whop-stroke !border-b">
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <a className="flex items-center gap-2" target="_blank" href="/categories/trading/">
                        <div className="border-whop-stroke flex h-10 w-10 items-center justify-center rounded-[10px] border-[0.5px]">
                           <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-trend-up" className="w-4 h-4 fa-arrow-trend-up fa-fw text-whop-black" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                              <path fill="currentColor" d="M352 120c0-13.3 10.7-24 24-24H552c13.3 0 24 10.7 24 24V296c0 13.3-10.7 24-24 24s-24-10.7-24-24V177.9L337 369c-9.4 9.4-24.6 9.4-33.9 0l-111-111L41 409c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L175 207c9.4-9.4 24.6-9.4 33.9 0l111 111L494.1 144H376c-13.3 0-24-10.7-24-24z"></path>
                           </svg>
                        </div>
                        <div className="subtitle3">Trading</div>
                     </a>
                  </td>
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                        <div className="inline-flex w-auto items-center justify-center rounded px-1.5 text-subtitle4 h-[18px] bg-whop-tag-green-background text-whop-tag-green">Variable reward</div>
                     </div>
                  </td>
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <div className="flex w-full justify-end">
                        <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-primary text-whop-fixed-white text-button4 h-10 px-[15px]">
                           <div className="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
                           <div className="z-10 flex items-center justify-center">
                              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="link-simple" className="w-4 h-4 fa-link-simple fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                 <path fill="currentColor" d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path>
                              </svg>
                              <div className="">Copy link</div>
                           </div>
                        </button>
                     </div>
                  </td>
               </tr>
               <tr className="border-whop-stroke !border-b">
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <a className="flex items-center gap-2" target="_blank" href="/categories/sports-picks/">
                        <div className="border-whop-stroke flex h-10 w-10 items-center justify-center rounded-[10px] border-[0.5px]">
                           <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="futbol" className="w-4 h-4 fa-futbol fa-fw text-whop-black" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path fill="currentColor" d="M435.4 361.3l-89.7-6c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-22 87.2c-14.4 3.2-29.4 4.8-44.8 4.8s-30.3-1.7-44.8-4.8l-22-87.2c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-89.7 6C61.7 335.9 51.9 307 49 276.2L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15L100.4 118c19.9-22.4 44.6-40.5 72.4-52.7l69.1 57.6c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l69.1-57.6c27.8 12.2 52.5 30.3 72.4 52.7l-33.4 83.4c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9L463 276.2c-3 30.8-12.7 59.7-27.6 85.1zM256 48l.9 0h-1.8l.9 0zM56.7 196.2c.9-3 1.9-6.1 2.9-9.1l-2.9 9.1zM132 423l3.8 2.7c-1.3-.9-2.5-1.8-3.8-2.7zm248.1-.1c-1.3 1-2.7 2-4 2.9l4-2.9zm75.2-226.6l-3-9.2c1.1 3 2.1 6.1 3 9.2zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6h59.2c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z"></path>
                           </svg>
                        </div>
                        <div className="subtitle3">Sports picks</div>
                     </a>
                  </td>
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                        <div className="inline-flex w-auto items-center justify-center rounded px-1.5 text-subtitle4 h-[18px] bg-whop-tag-green-background text-whop-tag-green">Variable reward</div>
                     </div>
                  </td>
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <div className="flex w-full justify-end">
                        <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-primary text-whop-fixed-white text-button4 h-10 px-[15px]">
                           <div className="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
                           <div className="z-10 flex items-center justify-center">
                              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="link-simple" className="w-4 h-4 fa-link-simple fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                 <path fill="currentColor" d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path>
                              </svg>
                              <div className="">Copy link</div>
                           </div>
                        </button>
                     </div>
                  </td>
               </tr>
               <tr className="border-whop-stroke !border-b">
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <a className="flex items-center gap-2" target="_blank" href="/categories/ecommerce/">
                        <div className="border-whop-stroke flex h-10 w-10 items-center justify-center rounded-[10px] border-[0.5px]">
                           <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="truck-fast" className="w-4 h-4 fa-truck-fast fa-fw text-whop-black" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                              <path fill="currentColor" d="M352 48H128c-8.8 0-16 7.2-16 16V96H240c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H64V64C64 28.7 92.7 0 128 0H352c35.3 0 64 28.7 64 64V96h42.7c14.9 0 29.1 5.9 39.6 16.4l93.3 93.3c10.5 10.5 16.4 24.7 16.4 39.6V368h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H576c0 53-43 96-96 96s-96-43-96-96h-8H352 320 256c0 53-43 96-96 96s-96-43-96-96V368 288h48v44.8c14.1-8.2 30.5-12.8 48-12.8c35.5 0 66.6 19.3 83.2 48H320h32c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16zM557.7 239.6l-93.3-93.3c-1.5-1.5-3.5-2.3-5.7-2.3H416v96H558l-.2-.2-.2-.2zM208 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm272 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM48 160H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16s7.2-16 16-16zM16 224H240c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
                           </svg>
                        </div>
                        <div className="subtitle3">E-commerce</div>
                     </a>
                  </td>
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                        <div className="inline-flex w-auto items-center justify-center rounded px-1.5 text-subtitle4 h-[18px] bg-whop-tag-green-background text-whop-tag-green">Variable reward</div>
                     </div>
                  </td>
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <div className="flex w-full justify-end">
                        <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-primary text-whop-fixed-white text-button4 h-10 px-[15px]">
                           <div className="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
                           <div className="z-10 flex items-center justify-center">
                              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="link-simple" className="w-4 h-4 fa-link-simple fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                 <path fill="currentColor" d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path>
                              </svg>
                              <div className="">Copy link</div>
                           </div>
                        </button>
                     </div>
                  </td>
               </tr>
               <tr className="border-whop-stroke !border-b">
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <a className="flex items-center gap-2" target="_blank" href="/categories/life-hacks/">
                        <div className="border-whop-stroke flex h-10 w-10 items-center justify-center rounded-[10px] border-[0.5px]">
                           <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="wand-magic-sparkles" className="w-4 h-4 fa-wand-magic-sparkles fa-fw text-whop-black" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                              <path fill="currentColor" d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM461.4 48L496 82.6 386.2 192.3l-34.6-34.6L461.4 48zM80 429.4L317.7 191.7l34.6 34.6L114.6 464 80 429.4zM427.4 14.1L46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"></path>
                           </svg>
                        </div>
                        <div className="subtitle3">Life hacks</div>
                     </a>
                  </td>
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                        <div className="inline-flex w-auto items-center justify-center rounded px-1.5 text-subtitle4 h-[18px] bg-whop-tag-green-background text-whop-tag-green">Variable reward</div>
                     </div>
                  </td>
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <div className="flex w-full justify-end">
                        <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-primary text-whop-fixed-white text-button4 h-10 px-[15px]">
                           <div className="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
                           <div className="z-10 flex items-center justify-center">
                              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="link-simple" className="w-4 h-4 fa-link-simple fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                 <path fill="currentColor" d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path>
                              </svg>
                              <div className="">Copy link</div>
                           </div>
                        </button>
                     </div>
                  </td>
               </tr>
               <tr className="border-whop-stroke !border-b">
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <a className="flex items-center gap-2" target="_blank" href="/categories/business/">
                        <div className="border-whop-stroke flex h-10 w-10 items-center justify-center rounded-[10px] border-[0.5px]">
                           <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chart-simple" className="w-4 h-4 fa-chart-simple fa-fw text-whop-black" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                              <path fill="currentColor" d="M240 80V432H208V80h32zM208 32c-26.5 0-48 21.5-48 48V432c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H208zM80 272V432H48V272H80zM48 224c-26.5 0-48 21.5-48 48V432c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48H48zm320-80h32V432H368V144zm-48 0V432c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48z"></path>
                           </svg>
                        </div>
                        <div className="subtitle3">Business</div>
                     </a>
                  </td>
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                        <div className="inline-flex w-auto items-center justify-center rounded px-1.5 text-subtitle4 h-[18px] bg-whop-tag-green-background text-whop-tag-green">Variable reward</div>
                     </div>
                  </td>
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <div className="flex w-full justify-end">
                        <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-primary text-whop-fixed-white text-button4 h-10 px-[15px]">
                           <div className="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
                           <div className="z-10 flex items-center justify-center">
                              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="link-simple" className="w-4 h-4 fa-link-simple fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                 <path fill="currentColor" d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path>
                              </svg>
                              <div className="">Copy link</div>
                           </div>
                        </button>
                     </div>
                  </td>
               </tr>
               <tr className="border-whop-stroke !border-b">
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <a className="flex items-center gap-2" target="_blank" href="/categories/students/">
                        <div className="border-whop-stroke flex h-10 w-10 items-center justify-center rounded-[10px] border-[0.5px]">
                           <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="backpack" className="w-4 h-4 fa-backpack fa-fw text-whop-black" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                              <path fill="currentColor" d="M192 48h64c4.4 0 8 3.6 8 8V80H184V56c0-4.4 3.6-8 8-8zm-56 8V80h-8C57.3 80 0 137.3 0 208V448c0 35.3 28.7 64 64 64h40H344h40c35.3 0 64-28.7 64-64V208c0-70.7-57.3-128-128-128h-8V56c0-30.9-25.1-56-56-56H192c-30.9 0-56 25.1-56 56zM368 464V376 312c0-39.8-32.2-72-72-72H152c-39.8 0-72 32.2-72 72v64 88H64c-8.8 0-16-7.2-16-16V208c0-44.2 35.8-80 80-80h32H288h32c44.2 0 80 35.8 80 80V448c0 8.8-7.2 16-16 16H368zm-240 0V400H320v64H128zm16-304c-13.3 0-24 10.7-24 24s10.7 24 24 24H304c13.3 0 24-10.7 24-24s-10.7-24-24-24H144zM320 352H128V312c0-13.3 10.7-24 24-24H296c13.3 0 24 10.7 24 24v40z"></path>
                           </svg>
                        </div>
                        <div className="subtitle3">Students</div>
                     </a>
                  </td>
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                        <div className="inline-flex w-auto items-center justify-center rounded px-1.5 text-subtitle4 h-[18px] bg-whop-tag-green-background text-whop-tag-green">Variable reward</div>
                     </div>
                  </td>
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <div className="flex w-full justify-end">
                        <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-primary text-whop-fixed-white text-button4 h-10 px-[15px]">
                           <div className="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
                           <div className="z-10 flex items-center justify-center">
                              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="link-simple" className="w-4 h-4 fa-link-simple fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                 <path fill="currentColor" d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path>
                              </svg>
                              <div className="">Copy link</div>
                           </div>
                        </button>
                     </div>
                  </td>
               </tr>
               <tr className="border-whop-stroke !border-b">
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <a className="flex items-center gap-2" target="_blank" href="/categories/gaming/">
                        <div className="border-whop-stroke flex h-10 w-10 items-center justify-center rounded-[10px] border-[0.5px]">
                           <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="gamepad-modern" className="w-4 h-4 fa-gamepad-modern fa-fw text-whop-black" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                              <path fill="currentColor" d="M216 336H424c22 0 41.2 15 46.6 36.4l3.6 14.3c6.7 26.6 30.6 45.3 58 45.3c33 0 59.8-26.8 59.8-59.8v-2.8c0-3.5-.3-7.1-.9-10.6L558.4 168c-6.2-36-27.8-60.4-54.6-67.1C461.4 90.3 399.7 80 320 80s-141.5 10.3-183.7 20.9C109.4 107.6 87.8 132 81.6 168L48.9 358.8c-.6 3.5-.9 7-.9 10.6v2.8c0 33 26.8 59.8 59.8 59.8c27.4 0 51.4-18.7 58-45.3l3.6-14.3C174.8 351 194 336 216 336zm211.6 62.3L424 384H216l-3.6 14.3c-12 48-55.1 81.7-104.6 81.7C48.3 480 0 431.7 0 372.2v-2.8c0-6.3 .5-12.5 1.6-18.7L34.3 159.8c8.6-50.2 40.9-93.2 90.3-105.5C170.5 42.9 236.2 32 320 32s149.5 10.9 195.3 22.3c49.4 12.3 81.7 55.3 90.3 105.5l32.7 190.9c1.1 6.2 1.6 12.4 1.6 18.7v2.8C640 431.7 591.7 480 532.2 480c-49.5 0-92.6-33.7-104.6-81.7zM232 168v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H232v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V248H152c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V168c0-13.3 10.7-24 24-24s24 10.7 24 24zm168 72a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm32-64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
                           </svg>
                        </div>
                        <div className="subtitle3">Gaming</div>
                     </a>
                  </td>
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                        <div className="inline-flex w-auto items-center justify-center rounded px-1.5 text-subtitle4 h-[18px] bg-whop-tag-green-background text-whop-tag-green">Variable reward</div>
                     </div>
                  </td>
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <div className="flex w-full justify-end">
                        <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-primary text-whop-fixed-white text-button4 h-10 px-[15px]">
                           <div className="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
                           <div className="z-10 flex items-center justify-center">
                              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="link-simple" className="w-4 h-4 fa-link-simple fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                 <path fill="currentColor" d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path>
                              </svg>
                              <div className="">Copy link</div>
                           </div>
                        </button>
                     </div>
                  </td>
               </tr>
               <tr className="border-whop-stroke !border-b">
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <a className="flex items-center gap-2" target="_blank" href="/categories/social-media/">
                        <div className="border-whop-stroke flex h-10 w-10 items-center justify-center rounded-[10px] border-[0.5px]">
                           <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="thumbs-up" className="w-4 h-4 fa-thumbs-up fa-fw text-whop-black" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path fill="currentColor" d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.1s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"></path>
                           </svg>
                        </div>
                        <div className="subtitle3">Social media</div>
                     </a>
                  </td>
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                        <div className="inline-flex w-auto items-center justify-center rounded px-1.5 text-subtitle4 h-[18px] bg-whop-tag-green-background text-whop-tag-green">Variable reward</div>
                     </div>
                  </td>
                  <td className="w-[150px] text-text3 text-whop-black overflow-hidden py-1 whitespace-nowrap">
                     <div className="flex w-full justify-end">
                        <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-primary text-whop-fixed-white text-button4 h-10 px-[15px]">
                           <div className="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
                           <div className="z-10 flex items-center justify-center">
                              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="link-simple" className="w-4 h-4 fa-link-simple fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                 <path fill="currentColor" d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path>
                              </svg>
                              <div className="">Copy link</div>
                           </div>
                        </button>
                     </div>
                  </td>
               </tr>
            </tbody>
            <tfoot>
               <tr>
                  <th></th>
                  <th></th>
                  <th></th>
               </tr>
            </tfoot>
         </table>
      </div>
      <div className="flex w-full justify-between">
         <div className="flex items-center gap-x-2"><button className="text-whop-black flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium leading-[17px] tracking-[-0.01em] hover:bg-whop-hover active:bg-whop-hover-press outline-none transition border-whop-black border-2">1</button><button className="text-whop-black flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium leading-[17px] tracking-[-0.01em] hover:bg-whop-hover active:bg-whop-hover-press outline-none transition">2</button></div>
         <div className="flex items-center gap-x-[10px]">
            <p className="text-text4 text-whop-gray hidden whitespace-nowrap sm:block">
               Showing  1  -  10  of  12
            </p>
            <div className="flex gap-x-2">
               <button className="text-whop-black flex h-8 w-8 items-center justify-center rounded-md font-medium tracking-[-0.01em] hover:bg-whop-hover active:bg-whop-hover-press outline-none transition cursor-not-allowed opacity-40 text-[14px]" disabled="">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" className="w-4 h-4 fa-chevron-left fa-fw " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                     <path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
                  </svg>
               </button>
               <button className="text-whop-black flex h-8 w-8 items-center justify-center rounded-md font-medium tracking-[-0.01em] hover:bg-whop-hover active:bg-whop-hover-press outline-none transition text-[14px]">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" className="w-4 h-4 fa-chevron-right fa-fw " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                     <path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                  </svg>
               </button>
            </div>
         </div>
      </div>
   </div>
</div>
    </div>
  )
}

export default Categories