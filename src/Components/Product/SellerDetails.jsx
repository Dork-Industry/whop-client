import React from 'react'

const SellerDetails = () => {
  return (
<div className="border-t-whop-stroke flex flex-col gap-6 border-t py-10 md:py-16 lg:flex-row lg:gap-6">
   <div className="flex-1">
      <div className="font-display text-display3">About the seller</div>
   </div>
   <div className="lg:flex-1 lg:basis-[360px]">
      <div className="space-y-6">
         <div className="flex items-center gap-6">
            <img className="border-whop-stroke border-[0.5px] rounded-2xl object-cover w-16 h-16" src="https://img.whop.com/tVjPaYTPvFlvpxifDtv0cZKdyNaLZtEBTY_f0ckuXe0/rs:fill:64:64/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vYm90cy9pbWFnZXMvMzY2Lm9yaWdpbmFsLnBuZw" alt="Company image" width="64" height="64" loading="lazy" fetchpriority="auto" srcset="https://img.whop.com/tVjPaYTPvFlvpxifDtv0cZKdyNaLZtEBTY_f0ckuXe0/rs:fill:64:64/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vYm90cy9pbWFnZXMvMzY2Lm9yaWdpbmFsLnBuZw 1x, https://img.whop.com/rrBNaF15drpPZMXyRGpLD_lgfyfOv10NwrP-i22gbiE/rs:fill:64:64/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vYm90cy9pbWFnZXMvMzY2Lm9yaWdpbmFsLnBuZw 2x" />
            <div className="flex flex-col">
               <div className="mb-1 flex items-center gap-1.5">
                  <div className="display3 text-whop-black">Profit Lounge</div>
                  <div data-state="closed" className="text-whop-brandsDiscord focus:outline-none cursor-default inline-block">
                     <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="badge-check" className="svg-inline--fa fa-badge-check fa-fw text-whop-field-highlight" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M256 0c36.8 0 68.8 20.7 84.9 51.1C373.8 41 411 49 437 75s34 63.3 23.9 96.1C491.3 187.2 512 219.2 512 256s-20.7 68.8-51.1 84.9C471 373.8 463 411 437 437s-63.3 34-96.1 23.9C324.8 491.3 292.8 512 256 512s-68.8-20.7-84.9-51.1C138.2 471 101 463 75 437s-34-63.3-23.9-96.1C20.7 324.8 0 292.8 0 256s20.7-68.8 51.1-84.9C41 138.2 49 101 75 75s63.3-34 96.1-23.9C187.2 20.7 219.2 0 256 0zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path>
                     </svg>
                  </div>
               </div>
               <div className="text-whop-dark-gray text-text3">
                  Reselling   • General
               </div>
               <button className="text-whop-gray hover:text-whop-dark-gray text-text3 mt-1 flex cursor-pointer flex-row items-center gap-2 hover:underline">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="flag" className="w-5 h-5 text-[10px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                     <path fill="currentColor" d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"></path>
                  </svg>
                  Report this company
               </button>
            </div>
         </div>
         <div className="text-whop-black flex gap-6 overflow-x-auto">
            <div className="flex items-center gap-2">
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-fw " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
               </svg>
               <p className="text-paragraph2 whitespace-nowrap">
                  875  review s
               </p>
            </div>
            <div className="flex flex-nowrap items-center gap-2">
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="badge-check" className="svg-inline--fa fa-badge-check fa-fw " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M256 0c36.8 0 68.8 20.7 84.9 51.1C373.8 41 411 49 437 75s34 63.3 23.9 96.1C491.3 187.2 512 219.2 512 256s-20.7 68.8-51.1 84.9C471 373.8 463 411 437 437s-63.3 34-96.1 23.9C324.8 491.3 292.8 512 256 512s-68.8-20.7-84.9-51.1C138.2 471 101 463 75 437s-34-63.3-23.9-96.1C20.7 324.8 0 292.8 0 256s20.7-68.8 51.1-84.9C41 138.2 49 101 75 75s63.3-34 96.1-23.9C187.2 20.7 219.2 0 256 0zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path>
               </svg>
               <p className="text-paragraph2 whitespace-nowrap">Whop Verified</p>
            </div>
         </div>
         <div className="text-paragraph2 text-whop-black whitespace-pre-wrap">Welcome to Profit Lounge, the #1 reselling community on Discord! 
            Our community is dedicated to helping you make the most out of your reselling business. With our comprehensive range of features and services, you'll be able to save money, maximize profits, and stay ahead of the game. 
            Here's what we offer:
            Flips: Our team of experienced resellers are constantly on the lookout for the best deals, and we share them with you so you can turn them into profit.
            Price errors: We find the pricing mistakes that retailers make and show you how to take advantage of them to save money &amp; flip them for a profit.
            Hidden clearance: We uncover secret clearance deals from major retailers like Home Depot, Lowe's, Tractor Supply &amp; Co., and Samsung, so you can grab products at unbeatable prices.
            Free food: We provide exclusive deals and promotions on food items that can be used at popular fast-food chains and restaurants as well as food delivery apps.
            Glitches and deals: Our community is always on the lookout for pricing glitches and other deals that can help you save big.
            ACO: Automated checkouts for Amazon freebies
            Partnerships with other companies: We collaborate with other companies to offer special promotions, discounts, and exclusive access to products and services.
            Travel deals: We provide insights and tips on how to find the best travel deals, including flights, hotels, and vacation packages.
            Credit card churning: We offer guidance on how to maximize credit card rewards programs to earn points and cashback.
            At Profit Lounge, we're committed to helping you succeed as a reseller. Join our community today and start taking advantage of all the benefits we have to offer!
         </div>
      </div>
      <div className="border-whop-stroke flex justify-between border-b-[0.5px] py-4">
         <div className="text-whop-gray flex items-center gap-1.5">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="tiktok" className="svg-inline--fa fa-tiktok " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
               <path fill="currentColor" d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
            </svg>
            <div className="text-text3">TikTok</div>
         </div>
         <a className="text-whop-field-highlight flex cursor-pointer items-center gap-0.5" target="_blank" href="https://tiktok.com/@loungeprofit">
            <div className="text-subtitle3">@loungeprofit</div>
         </a>
      </div>
      <div className="border-whop-stroke flex justify-between border-b-[0.5px] py-4">
         <div className="text-whop-gray flex items-center gap-1.5">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" className="svg-inline--fa fa-discord " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
               <path fill="currentColor" d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
            </svg>
            <div className="text-text3">Discord</div>
         </div>
         <a className="text-whop-field-highlight flex cursor-pointer items-center gap-0.5" target="_blank" href="https://discord.gg/profitlounge">
            <div className="text-subtitle3">https://discord.gg/profitlounge</div>
         </a>
      </div>
      <div className="border-whop-stroke flex justify-between border-b-[0.5px] py-4">
         <div className="text-whop-gray flex items-center gap-1.5">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
               <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
            </svg>
            <div className="text-text3">Twitter</div>
         </div>
         <a className="text-whop-field-highlight flex cursor-pointer items-center gap-0.5" target="_blank" href="https://twitter.com/profit_lounge">
            <div className="text-subtitle3">@profit_lounge</div>
         </a>
      </div>
      <div className="border-whop-stroke flex justify-between border-b-[0.5px] py-4">
         <div className="text-whop-gray flex items-center gap-1.5">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="globe" className="svg-inline--fa fa-globe " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
               <path fill="currentColor" d="M256 464c7.4 0 27-7.2 47.6-48.4c8.8-17.7 16.4-39.2 22-63.6H186.4c5.6 24.4 13.2 45.9 22 63.6C229 456.8 248.6 464 256 464zM178.5 304h155c1.6-15.3 2.5-31.4 2.5-48s-.9-32.7-2.5-48h-155c-1.6 15.3-2.5 31.4-2.5 48s.9 32.7 2.5 48zm7.9-144H325.6c-5.6-24.4-13.2-45.9-22-63.6C283 55.2 263.4 48 256 48s-27 7.2-47.6 48.4c-8.8 17.7-16.4 39.2-22 63.6zm195.3 48c1.5 15.5 2.2 31.6 2.2 48s-.8 32.5-2.2 48h76.7c3.6-15.4 5.6-31.5 5.6-48s-1.9-32.6-5.6-48H381.8zm58.8-48c-21.4-41.1-56.1-74.1-98.4-93.4c14.1 25.6 25.3 57.5 32.6 93.4h65.9zm-303.3 0c7.3-35.9 18.5-67.7 32.6-93.4c-42.3 19.3-77 52.3-98.4 93.4h65.9zM53.6 208c-3.6 15.4-5.6 31.5-5.6 48s1.9 32.6 5.6 48h76.7c-1.5-15.5-2.2-31.6-2.2-48s.8-32.5 2.2-48H53.6zM342.1 445.4c42.3-19.3 77-52.3 98.4-93.4H374.7c-7.3 35.9-18.5 67.7-32.6 93.4zm-172.2 0c-14.1-25.6-25.3-57.5-32.6-93.4H71.4c21.4 41.1 56.1 74.1 98.4 93.4zM256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512z"></path>
            </svg>
            <div className="text-text3">Website</div>
         </div>
         <a className="text-whop-field-highlight flex cursor-pointer items-center gap-0.5" target="_blank" href="https://profitlounge.us">
            <div className="text-subtitle3">profitlounge.us</div>
         </a>
      </div>
      <div className="border-whop-stroke flex justify-between border-b-[0.5px] py-4">
         <div className="text-whop-gray flex items-center gap-1.5">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
               <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
            <div className="text-text3">Instagram</div>
         </div>
         <a className="text-whop-field-highlight flex cursor-pointer items-center gap-0.5" target="_blank" href="https://instagram.com/profit_lounge">
            <div className="text-subtitle3">@profit_lounge</div>
         </a>
      </div>
   </div>
</div> 
 )
}

export default SellerDetails