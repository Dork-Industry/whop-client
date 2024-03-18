import React, { useEffect, useState } from 'react'
import CustomerReview from '../Components/Product/CustomerReview'
import Faq from '../Components/Product/Faq'
import SellerDetails from '../Components/Product/SellerDetails'
import YouMightLike from '../Components/Product/YouMightLike'
import api from '../services/Apiconnect'
import { useParams } from 'react-router-dom'

const Product = () => {
   let { id } = useParams();
   const [productId, setProductId] = useState(id);
   const [product, setProduct] = useState();
   const [storeDetails, setStoreDetails] = useState();

   useEffect(() => {
      console.log("h1");
      async function getProduct() {
         console.log("h2");
         await api.getData(`product/get/${productId}`).then((response) => {
            let _xtract = api.decrypt_obj(response.data.data);
            console.log(_xtract);
            const storeData = {
               store_name : _xtract.store_name,
               store_info : _xtract.store_info,
               facebook : _xtract.facebook,
               instagram : _xtract.instagram,
               youtube : _xtract.youtube,
               twitter : _xtract.twitter
            }
            setStoreDetails(storeData);
            setProduct(_xtract);
         })
      }
      getProduct();
   }, [productId])

   const handlePayment = (event) => {
      event.preventDefault();
      const data = {
         name: "KAPIL SAHITYA",
         number: "8154804417",
         amount: 100
      }
      api.postData('users/phonepe/payment', data).then((response) => {
         // console.log("response", response);
         // const redirectUrl = response.data.resdata.data.instrumentResponse.redirectInfo.url;
         // console.log("redirectUrl", redirectUrl)
         window.location.href = response.data.url;
      })
   }

   return (
      <>{
         product && (
            <div className='px-2 lg:px-5'>
               <div className=" hidden py-10 md:block">
                  <div className="flex items-center justify-between">
                     <nav>
                        <ul className="flex gap-px overflow-x-auto whitespace-nowrap">
                           <li className="flex items-center">
                              <a href="/categories/reselling/">
                                 <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring !text-overline3 !text-whop-gray uppercase bg-whop-white text-whop-dark-gray text-subtitle4 h-6 px-[7px]">
                                    <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                                    <div className="z-10 flex items-center justify-center">
                                       <div className="">{product.cat_name}</div>
                                    </div>
                                 </button>
                              </a>
                           </li>
                           <li className="flex items-center">
                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" className="svg-inline--fa fa-chevron-right fa-fw fa-sm text-whop-gray h-2.5 !w-2.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                 <path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                              </svg>
                           </li>
                           <li className="flex items-center">
                              <a href="/categories/reselling/general/">
                                 <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring !text-overline3 !text-whop-gray uppercase bg-whop-white text-whop-dark-gray text-subtitle4 h-6 px-[7px]">
                                    <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                                    <div className="z-10 flex items-center justify-center">
                                       <div className="">{product.store_name}</div>
                                    </div>
                                 </button>
                              </a>
                           </li>
                           <li className="flex items-center">
                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" className="svg-inline--fa fa-chevron-right fa-fw fa-sm text-whop-gray h-2.5 !w-2.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                 <path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                              </svg>
                           </li>
                           <li className="flex items-center">
                              <div className="text-overline3 text-whop-dark-gray flex h-6 items-center justify-center px-[7px] uppercase">
                                 {product.name}
                              </div>
                           </li>
                        </ul>
                     </nav>
                     <div className="flex">
                        <div>
                           <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-white text-whop-dark-gray text-subtitle4 h-6 px-[7px]">
                              <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                              <div className="z-10 flex items-center justify-center">
                                 <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hand-holding-dollar" className="svg-inline--fa fa-hand-holding-dollar fa-fw mr-[5px] text-[12px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path fill="currentColor" d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3 0 0c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"></path>
                                 </svg>
                                 <div className="">Refer friends</div>
                              </div>
                           </button>
                        </div>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/intent/tweet?text=Profit+Lounge+is+live+on+Whop.+Check+out+what+all+of+the+hype+is+about&amp;url=https%3A%2F%2Fwhop.com%2Fmarketplace%2Fprofitlounge%2F">
                           <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-white text-whop-dark-gray text-subtitle4 h-6 px-[7px]">
                              <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                              <div className="z-10 flex items-center justify-center">
                                 <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up-from-bracket" className="svg-inline--fa fa-arrow-up-from-bracket fa-fw mr-[5px] text-[12px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"></path>
                                 </svg>
                                 <div className="">Share</div>
                              </div>
                           </button>
                        </a>
                     </div>
                  </div>
               </div>

               <div className="mt-10">
                  <div className="mb-10 flex flex-col gap-0 gap-y-6 md:mb-16 md:flex-row md:gap-x-10 lg:gap-x-[60px]">
                     <div className="flex flex-1 flex-col gap-x-0 gap-y-[60px] px-4 xl:flex-row xl:gap-x-[60px] xl:gap-y-0">
                        <div className="relative hidden basis-0 md:block xl:flex-1">
                           <div>
                              <div className="embla">
                                 <div className="embla__viewport">
                                    <div className="embla__container" >
                                       <div className="embla__slide relative">
                                          <div className="embla__slide__number text-subtitle5 absolute bottom-5 right-5 z-10 block select-none rounded-md bg-black/75 px-2 py-0.5 text-sm text-white backdrop-blur-md md:hidden">
                                             <span>
                                                1 / 1
                                             </span>
                                          </div>
                                          <video className="embla__slide__img border-whop-stroke block aspect-[2/1] w-full min-w-0 cursor-pointer border-[0.5px] object-cover md:rounded-[10px]" src="https://img.whop.com/HnOXUVEzgECCDq0Rb2QNGsWkJIFbjo-7YNlMwd-9yhw/rs:fill:500:250/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vaW1hZ2VzL2ltYWdlcy81NDEyNS5vcmlnaW5hbC5naWY.mp4" autoplay="" playsinline="" loop="" muted="" width="500" height="250" ></video>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="basis-0 xl:flex-1">
                           <h1 className="text-whop-black font-display text-display2 mb-2">
                              {product.store_name}
                              <span className="ml-1.5 align-middle font-sans text-base">
                                 <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="badge-check" className="svg-inline--fa fa-badge-check text-whop-field-highlight" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                       <path fill="currentColor" d="M256 0c36.8 0 68.8 20.7 84.9 51.1C373.8 41 411 49 437 75s34 63.3 23.9 96.1C491.3 187.2 512 219.2 512 256s-20.7 68.8-51.1 84.9C471 373.8 463 411 437 437s-63.3 34-96.1 23.9C324.8 491.3 292.8 512 256 512s-68.8-20.7-84.9-51.1C138.2 471 101 463 75 437s-34-63.3-23.9-96.1C20.7 324.8 0 292.8 0 256s20.7-68.8 51.1-84.9C41 138.2 49 101 75 75s63.3-34 96.1-23.9C187.2 20.7 219.2 0 256 0zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path>
                                    </svg>
                                 </div>
                              </span>
                           </h1>
                           <div className="mb-6 flex items-center gap-1">
                              <div className="flex flex-wrap-reverse items-center gap-1">
                                 <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                                    <div className="flex gap-1">
                                       <div className="flex items-center gap-0.5 text-[12px]">
                                          {/* <span className="h-[13px] w-[13px] shrink-0">
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
                                          </span> */}
                                       </div>
                                       <div className="subtitle3 text-whop-black">{product.review_num ? product.review_num : 0}</div>
                                    </div>
                                 </div>
                                 <div className="text-whop-dark-gray text3 cursor-pointer underline">
                                    {` (${product.review_count ? product.review_num : 0} reviews)`}
                                 </div>
                              </div>
                           </div>
                           <p className="paragraph1 text-whop-black mb-6">{product.store_tagline}</p>
                           <div className="mb-6 grid grid-cols-2 gap-2">
                              <div className="border-whop-primary border-2 px-[15px] py-[11px] shadow-sm hover:bg-whop-hover cursor-pointer rounded-[6px] ">
                                 <div className="font-semibold text-whop-black line-clamp-2">{product.name}</div>
                                 <div className="text-whop-darkGray text5 line-clamp-1">{product.base_price === 0 ? 'Free' : `Rs.${product.base_price}`} / month</div>
                              </div>
                              {/* <div className="border-whop-stroke border px-4 py-3 hover:bg-whop-hover cursor-pointer rounded-[6px] transition-colors">
                           <div className="font-semibold text-whop-black line-clamp-2">Quarterly Membership (INSTANT ACCESS - Saves $20)&nbsp;</div>
                           <div className="text-whop-darkGray text5 line-clamp-1">$250.00 / 3-months</div>
                        </div> */}
                           </div>
                           <div className="mb-6 space-y-2">
                              <div className=" ">
                                 <div className="[&amp;_a]:text-whop-fieldHighlight [&amp;>p]:text-paragraph2 [&amp;>*]:text-whop-darkGray  [&amp;>*:last-child]:pb-0 [&amp;>*]:pb-2 [&amp;_ol]:list-decimal [&amp;_ol]:pl-8 [&amp;_pre]:whitespace-pre-wrap [&amp;_ul]:list-disc [&amp;_ul]:pl-4">
                                    {/* <p>At <strong>Profit Lounge</strong>, we offer the key to a successful reselling business. Discover the best flips, take advantage of retailer pricing errors and uncover hidden clearance deals. Enjoy <em>exclusive food deals</em>, <em>Amazon freebies</em> with automated checkouts and make the most out of collaborations and special promotions. Explore best travel deals and learn how to maximize credit card rewards. A supportive and thriving community - we're dedicated to your reselling success.</p> */}
                                    {product.prod_info}
                                 </div>
                              </div>
                              {/* <button type="button" className="group/button  flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-fieldHighlight focus-visible:ring-whop-fieldHighlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-white text-whop-field-highlight text-subtitle4 h-6 px-[7px]">
                           <div className=" inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                           <div className="z-10 flex items-center justify-center">
                              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down fa-fw mr-[5px] text-[12px] transition rotate-0" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                 <path fill="currentColor" d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z"></path>
                              </svg>
                              <div className="">
                                 <div className="text-button4">Show more</div>
                              </div>
                           </div>
                        </button> */}
                           </div>
                           <div className="space-y-3">
                              <div className="overline3 text-whop-dark-gray uppercase">includes</div>

                              {product.prod_type === "discord" && (<div className="flex items-center gap-3">
                                 <img className="border-whop-stroke border-[0.5px] rounded-[10px] object-cover w-10 h-10" 
                                 src="/assets/iconz/discord.svg" alt="Discord access icon" width="40" height="40" loading="lazy" fetchpriority="auto"  />
                                 <div>
                                    <p className="text-subtitle3 text-whop-black mb-0">Discord access</p>
                                    <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                                       <p className="text-text5 text-whop-dark-gray truncate max-w-[200px] mb-0" >Members</p>
                                    </div>
                                 </div>
                              </div>)}

                              {product.prod_type === "telegram" && (
                                 <div className="flex items-center gap-3">
                                    <img className="border-whop-stroke border-[0.5px] rounded-[10px] object-cover w-10 h-10" 
                                 src="/assets/iconz/telegram.svg" alt="Giveaways icon" width="40" height="40" loading="lazy" fetchpriority="auto" 
                                  />
                                    <div>
                                       <p className="text-subtitle3 text-whop-black mb-0">Telegram Access</p>
                                       <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                                          <p className="text-text5 text-whop-dark-gray truncate max-w-[200px] mb-0" >New Years Giveaway</p>
                                       </div>
                                    </div>
                                 </div>
                              )}

                              {product.type === "whatsapp" && (
                                 <div className="flex items-center gap-3">
                                    <img className="border-whop-stroke border-[0.5px] rounded-[10px] object-cover w-10 h-10" 
                                       src="/assets/iconz/whatsapp.svg" alt="Merch icon" width="40" height="40" loading="lazy" fetchpriority="auto" 
                                        />
                                    <div>
                                       <p className="text-subtitle3 text-whop-black mb-0">Whats App Access</p>
                                       <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                                          <p className="text-text5 text-whop-dark-gray truncate max-w-[200px] mb-0" >PL Merch</p>
                                       </div>
                                    </div>
                                 </div>
                              )}
                           </div>
                        </div>
                     </div>
                     <div className="relative">
                        <div className="sticky flex w-full flex-col items-center gap-6 md:w-[340px] top-[141px]">
                           <iframe aria-hidden="true" width="0" height="0" src="/auth/iframe/init/" ></iframe>
                           <div className="border-whop-stroke hidden h-fit w-[340px] flex-col gap-3 rounded-[10px] border px-6 pb-[30px] pt-6 shadow-xl md:flex">
                              <div>
                                 <h4 className="text-whop-black font-semibold">{product.name}</h4>
                              </div>
                              <div className="space-y-6 transition">
                                 <div className="space-y-2">
                                    <div className="flex flex-col gap-1.5">
                                       <div></div>
                                       <div className="flex gap-1.5">
                                          <div className="flex-1">
                                             <button type="button"
                                                className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring w-full bg-whop-primary text-whop-fixed-white text-button2 h-12 px-[19px]"
                                                onClick={handlePayment}
                                             >
                                                <div className="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
                                                <div className="z-10 flex items-center justify-center">
                                                   <div className="text-white font-semibold">Get Access</div>
                                                </div>
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                    <div role="alert" aria-live="polite" className="relative flex items-start justify-between rounded-md border py-3 pl-3.5 pr-[46px] bg-whop-fieldHighlight/[10%] border-whop-fieldHighlight">
                                       <div className="flex items-start">
                                          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clipboard-user" className="svg-inline--fa fa-clipboard-user fa-fw mr-2 h-[18px] w-[18px] text-whop-field-highlight" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                             <path fill="currentColor" d="M320 64H280h-9.6C263 27.5 230.7 0 192 0s-71 27.5-78.4 64H104 64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM80 112v24c0 13.3 10.7 24 24 24h88 88c13.3 0 24-10.7 24-24V112h16c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H304c0-44.2-35.8-80-80-80H160c-44.2 0-80 35.8-80 80H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16H80zm88-32a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 208a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"></path>
                                          </svg>
                                          <div className="space-y-1">
                                             <p className="text-subtitle2 text-whop-fieldHighlight">Join this waitlist!</p>
                                             <p className="text-paragraph3 text-whop-fieldHighlight">You’ll only be charged if you’re accepted.</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="mt-6">
                                    <div className="space-y-1">
                                       <div className="flex gap-1.5">
                                          <p className="text-subtitle1 font-semibold text-whop-black">{product.base_price === 0 ? 'Free' : `Rs.${product.base_price}`}</p>
                                          <p className="text-text1 text-whop-dark-gray">/ month</p>
                                       </div>
                                       <div className="flex gap-1"></div>
                                    </div>
                                 </div>
                              </div>
                              <div className="flex flex-col gap-y-[6px]">
                                 <div className="flex justify-center">
                                    <div className="text-whop-gray text-text5">Cancel subscription at any time</div>
                                 </div>
                                 <div className="flex items-center justify-center space-x-1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="shield-check" className="svg-inline--fa fa-shield-check fa-fw text-whop-gray text-sm" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                       <path fill="currentColor" d="M73 127L256 49.4 439 127c5.9 2.5 9.1 7.8 9 12.8c-.4 91.4-38.4 249.3-186.3 320.1c-3.6 1.7-7.8 1.7-11.3 0C102.4 389 64.5 231.2 64 139.7c0-5 3.1-10.2 9-12.8zM457.7 82.8L269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.8 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path>
                                    </svg>
                                    <div className="text-whop-gray text-text5">Secured by Whop_Copy</div>
                                    {/* <img alt="whop-dark-gray" loading="lazy" width="38" height="16" decoding="async" data-nimg="1" className="h-[16px] pt-0.5 text-transparent" src="/v2/whop-dark-gray.svg" /> */}
                                 </div>
                              </div>
                           </div>
                           <div className="h-[188px] w-full">
                              <div className="flex h-full flex-col gap-2">
                                 <div className="flex items-center gap-2">
                                    <div className="header4">Recent purchases</div>
                                    <div className="flex items-center gap-1">
                                       <div className="relative h-[14px] w-[14px]">
                                          <div className="bg-whop-field-highlight/30 absolute h-[14px] w-[14px] animate-ping rounded-full"></div>
                                          <div className="bg-whop-field-highlight/30 absolute h-[14px] w-[14px] animate-pulse rounded-full"></div>
                                          <div className="bg-whop-field-highlight absolute left-[3px] top-[3px] h-2 w-2 rounded-full"></div>
                                       </div>
                                       <div className="text-whop-field-highlight overline3 h-[14px]">LIVE</div>
                                    </div>
                                 </div>
                                 <div className="relative -m-3 flex h-auto flex-col gap-2 overflow-y-hidden p-3">
                                    <div className="absolute bottom-0 left-0 right-0 z-10 h-14 bg-gradient-to-b from-transparent to-white"></div>
                                    <a className="transition-all" href="/marketplace/profitlounge/?pass=pass_Ux1I2iNOAAyCO">
                                       <div className="border-whop-stroke flex items-center gap-2 rounded-[20px] border border-solid p-2 shadow-md transition duration-300 hover:scale-[101%] hover:shadow-lg">
                                          <img className="border-whop-stroke border-[0.5px] rounded-lg object-cover w-8 h-8" src="https://img.whop.com/tI8l7KseMpyOYnMxvxNTJKrnOS8rW8XHPDSWZ8sdJ9M/rs:fill:32:32/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vYm90cy9pbWFnZXMvMzY2Lm9yaWdpbmFsLnBuZw" srcset="https://img.whop.com/tI8l7KseMpyOYnMxvxNTJKrnOS8rW8XHPDSWZ8sdJ9M/rs:fill:32:32/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vYm90cy9pbWFnZXMvMzY2Lm9yaWdpbmFsLnBuZw 1x, https://img.whop.com/Kyz3qjg1bt7ws0c1I1iAWHbTUj8xkzgHcdqFk0N1t9Y/rs:fill:32:32/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vYm90cy9pbWFnZXMvMzY2Lm9yaWdpbmFsLnBuZw 2x" alt="Event image" width="32" height="32" loading="eager" fetchpriority="high" />
                                          <div className="flex-1 overflow-hidden">
                                             <div className="mr-2 flex items-center justify-between">
                                                <div className="subtitle1 overflow-hidden text-ellipsis whitespace-nowrap text-subtitle5">Someone just bought Affiliate Plan</div>
                                                <div className="text5 text-whop-gray shrink-0 whitespace-nowrap">6h ago</div>
                                             </div>
                                             <p className="text3 text-whop-dark-gray mt-1 text-ellipsis whitespace-nowrap text-text5">$90.00</p>
                                          </div>
                                       </div>
                                    </a>
                                    <a className="transition-all" href="/marketplace/profitlounge/?pass=pass_RDO9nrcMwI7L9">
                                       <div className="border-whop-stroke flex items-center gap-2 rounded-[20px] border border-solid p-2 shadow-md transition duration-300 hover:scale-[101%] hover:shadow-lg">
                                          <img className="border-whop-stroke border-[0.5px] rounded-lg w-8 h-8 object-cover" src="https://img.whop.com/tI8l7KseMpyOYnMxvxNTJKrnOS8rW8XHPDSWZ8sdJ9M/rs:fill:32:32/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vYm90cy9pbWFnZXMvMzY2Lm9yaWdpbmFsLnBuZw" srcset="https://img.whop.com/tI8l7KseMpyOYnMxvxNTJKrnOS8rW8XHPDSWZ8sdJ9M/rs:fill:32:32/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vYm90cy9pbWFnZXMvMzY2Lm9yaWdpbmFsLnBuZw 1x, https://img.whop.com/Kyz3qjg1bt7ws0c1I1iAWHbTUj8xkzgHcdqFk0N1t9Y/rs:fill:32:32/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vYm90cy9pbWFnZXMvMzY2Lm9yaWdpbmFsLnBuZw 2x" alt="Event image" width="32" height="32" loading="eager" fetchpriority="high" />
                                          <div className="flex-1 overflow-hidden">
                                             <div className="mr-2 flex items-center justify-between">
                                                <div className="subtitle1 overflow-hidden text-ellipsis whitespace-nowrap text-subtitle5">Someone just bought Profit Lounge Membership</div>
                                                <div className="text5 text-whop-gray shrink-0 whitespace-nowrap">7h ago</div>
                                             </div>
                                             <p className="text3 text-whop-dark-gray mt-1 text-ellipsis whitespace-nowrap text-text5">$90.00</p>
                                          </div>
                                       </div>
                                    </a>
                                    <a className="transition-all" href="/marketplace/profitlounge/?pass=pass_RDO9nrcMwI7L9">
                                       <div className="border-whop-stroke flex items-center gap-2 rounded-[20px] border border-solid p-2 shadow-md transition duration-300 hover:scale-[101%] hover:shadow-lg">
                                          <img className="border-whop-stroke border-[0.5px] rounded-lg object-cover w-8 h-8" src="https://img.whop.com/tI8l7KseMpyOYnMxvxNTJKrnOS8rW8XHPDSWZ8sdJ9M/rs:fill:32:32/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vYm90cy9pbWFnZXMvMzY2Lm9yaWdpbmFsLnBuZw" srcset="https://img.whop.com/tI8l7KseMpyOYnMxvxNTJKrnOS8rW8XHPDSWZ8sdJ9M/rs:fill:32:32/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vYm90cy9pbWFnZXMvMzY2Lm9yaWdpbmFsLnBuZw 1x, https://img.whop.com/Kyz3qjg1bt7ws0c1I1iAWHbTUj8xkzgHcdqFk0N1t9Y/rs:fill:32:32/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vYm90cy9pbWFnZXMvMzY2Lm9yaWdpbmFsLnBuZw 2x" alt="Event image" width="32" height="32" loading="eager" fetchpriority="high" />
                                          <div className="flex-1 overflow-hidden">
                                             <div className="mr-2 flex items-center justify-between">
                                                <div className="subtitle1 overflow-hidden text-ellipsis whitespace-nowrap text-subtitle5">Someone just bought Profit Lounge Membership</div>
                                                <div className="text5 text-whop-gray shrink-0 whitespace-nowrap">9h ago</div>
                                             </div>
                                             <p className="text3 text-whop-dark-gray mt-1 text-ellipsis whitespace-nowrap text-text5">$90.00</p>
                                          </div>
                                       </div>
                                    </a>
                                    <a className="transition-all" href="/marketplace/profitlounge/?pass=pass_58YzHtDkcHwwU">
                                       <div className="border-whop-stroke flex items-center gap-2 rounded-[20px] border border-solid p-2 shadow-md transition duration-300 hover:scale-[101%] hover:shadow-lg">
                                          <img className="border-whop-stroke border-[0.5px] rounded-lg object-cover w-8 h-8" src="data:image/svg+xml;charset=utf-8,%3Csvg width='32' height='32' viewBox='0 0 96 96' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M34.4375 39.4375C34.4375 36.8594 36.8984 34.75 40.0625 34.75H56.9375C59.9844 34.75 62.5625 36.8594 62.5625 39.4375V42.25C62.5625 48.4609 57.5234 53.5 51.3125 53.5H45.6875C39.4766 53.5 34.4375 48.4609 34.4375 42.25V39.4375ZM41.4688 43.6562L42.4062 46.5859C42.5234 47.0547 43.1094 47.0547 43.2266 46.5859L44.2812 43.6562L47.0938 42.7188C47.5625 42.6016 47.5625 42.0156 47.0938 41.8984L44.2812 40.8438L43.2266 38.0312C43.1094 37.5625 42.5234 37.5625 42.4062 38.0312L41.4688 40.8438L38.5391 41.8984C38.0703 42.0156 38.0703 42.6016 38.5391 42.7188L41.4688 43.6562Z' fill='%23535961'%3E%3C/path%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M96 0H0V96H96V0ZM44.75 83.5H41.9866C41.6562 83.4444 41.3273 83.3844 41 83.3199V77.875C41 76.9375 41.8203 76 42.875 76C43.8125 76 44.75 76.9375 44.75 77.875V83.5ZM37.25 76V82.3676C31.8507 80.6805 26.9979 77.7561 23.0234 73.9263C24.7725 67.7643 29.3441 62.8057 35.2578 60.5312C39.0078 63.2266 43.5781 64.75 48.5 64.75C53.3047 64.75 57.875 63.2266 61.625 60.5312C67.2977 62.713 71.8005 67.3646 73.7297 73.179C69.8617 77.1311 65.0905 80.1957 59.75 82.0388V76C59.75 74.0078 57.9922 72.25 56 72.25H41C38.8906 72.25 37.25 74.0078 37.25 76ZM54.125 76C53.0703 76 52.25 76.9375 52.25 77.875C52.25 78.9297 53.0703 79.75 54.125 79.75C55.0625 79.75 56 78.9297 56 77.875C56 76.9375 55.0625 76 54.125 76ZM29.75 49.75H31.2734C34.2031 56.4297 40.7656 61 48.5 61C56.1172 61 62.6797 56.4297 65.6094 49.75H67.25C68.1875 49.75 69.125 48.9297 69.125 47.875V36.625C69.125 35.6875 68.1875 34.75 67.25 34.75H65.6094C62.6797 28.1875 56.1172 23.5 48.5 23.5C40.7656 23.5 34.2031 28.1875 31.2734 34.75H29.75C28.6953 34.75 27.875 35.6875 27.875 36.625V47.875C27.875 48.9297 28.6953 49.75 29.75 49.75Z' fill='%23535961'%3E%3C/path%3E%3C/svg%3E" alt="Event image" width="32" height="32" loading="eager" fetchpriority="high" />
                                          <div className="flex-1 overflow-hidden">
                                             <div className="mr-2 flex items-center justify-between">
                                                <div className="subtitle1 overflow-hidden text-ellipsis whitespace-nowrap text-subtitle5">Someone just claimed Profit Lounge (Staff)</div>
                                                <div className="text5 text-whop-gray shrink-0 whitespace-nowrap">11h ago</div>
                                             </div>
                                             <p className="text3 text-whop-dark-gray mt-1 text-ellipsis whitespace-nowrap text-text5">Free</p>
                                          </div>
                                       </div>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="border-t-whop-stroke flex flex-col gap-6 border-t py-10 md:py-16 lg:flex-row lg:gap-6">
                     <div className="flex-1">
                        <div className="font-display text-display3">Features</div>
                     </div>
                     <div className="lg:flex-1 lg:basis-[360px]">
                        <div className="flex flex-col gap-6">
                           <div className="flex gap-6">
                              <div className="bg-whop-hover flex h-16 w-16 items-center justify-center rounded-[10px] text-[32px]">🥇</div>
                              <div className="flex flex-1 flex-col gap-2 overflow-hidden">
                                 <div className="text-header4">Community</div>
                                 <div className="text-paragraph2 text-whop-dark-gray">Supportive community full of like-minded individuals that never leaves anyone behind to ensure that you succeed.</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="border-t-whop-stroke flex flex-col gap-6 border-t py-10 md:py-16 lg:flex-row lg:gap-6">
                     <div className="flex-1">
                        <div className="font-display text-display3">Customer question &amp; answers</div>
                     </div>
                     <div className="lg:flex-1 lg:basis-[360px]">
                        <div className="flex flex-col items-start justify-start gap-6">
                           <div className="space-y-6">
                              <div className="flex flex-col gap-3 sm:flex-row-reverse sm:gap-6">
                                 <div className="w-full space-y-3">
                                    <div className="flex">
                                       <div className="text-subtitle1 hidden min-w-[100px] text-black md:block">Question:</div>
                                       <div className="text-whop-black text-subtitle1">When you join the waitlist, do you pay the $90 while waiting to be excepted?</div>
                                    </div>
                                    <div className="flex">
                                       <div className="text-subtitle1 hidden min-w-[100px] text-black md:block">Answer:</div>
                                       <div className="text-whop-dark-gray text-paragraph2 whitespace-pre-wrap">No, Profit Lounge will only charge you if you are accepted from the waitlist.</div>
                                    </div>
                                    <div className="text-whop-gray text-paragraph5 md:pl-[100px]">
                                       <div data-state="closed" className="text-whop-gray focus:outline-none cursor-default inline-block">
                                          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar" className="svg-inline--fa fa-calendar fa-fw " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                             <path fill="currentColor" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"></path>
                                          </svg>
                                          Answered 9 months ago
                                       </div>
                                    </div>
                                 </div>
                                 <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring w-full sm:w-auto bg-whop-background text-whop-black border-whop-stroke-dark border text-button4 h-10 px-[15px] shadow-sm">
                                    <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                                    <div className="z-10 flex items-center justify-center">
                                       <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="caret-up" className="svg-inline--fa fa-caret-up fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                          <path fill="currentColor" d="M160 182.6L70.6 272H249.4L160 182.6zm-22.6-45.3c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128z"></path>
                                       </svg>
                                       <div className="">411</div>
                                    </div>
                                 </button>
                              </div>
                           </div>
                           <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-background text-whop-black border-whop-stroke-dark border text-button4 h-10 px-[15px] shadow-sm">
                              <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                              <div className="z-10 flex items-center justify-center">
                                 <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="message-question" className="svg-inline--fa fa-message-question fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M0 64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V416H64c-35.3 0-64-28.7-64-64V64zm169.8 53.3l-.4 1.2c-4.4 12.5 2.1 26.2 14.6 30.6s26.2-2.1 30.6-14.6l.4-1.2c1.1-3.2 4.2-5.3 7.5-5.3h58.3c8.4 0 15.1 6.8 15.1 15.1c0 5.4-2.9 10.4-7.6 13.1l-44.3 25.4c-7.5 4.3-12.1 12.2-12.1 20.8V216c0 13.3 10.7 24 24 24c13.1 0 23.8-10.5 24-23.6l32.3-18.5c19.6-11.3 31.7-32.2 31.7-54.8c0-34.9-28.3-63.1-63.1-63.1H222.6c-23.7 0-44.8 14.9-52.8 37.3zM288 304a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                                 </svg>
                                 <div className="">Ask a question</div>
                              </div>
                           </button>
                        </div>
                     </div>
                  </div>
                  <CustomerReview />
                  <Faq />
                  <SellerDetails storeData={storeDetails}/>
                  <YouMightLike />
               </div>
            </div >
         )
      }
      </>

   )
}

export default Product