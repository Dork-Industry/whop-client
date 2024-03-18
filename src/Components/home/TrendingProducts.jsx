import React, { useState, useEffect } from 'react'
import Apiconnect from '../../services/Apiconnect.js';
import ProductCard from './ProductCard.jsx';
import { Link } from 'react-router-dom';
const TrendingProducts = () => {
   const [List, setList] = useState([]);
   useEffect(() => {
      getInfoList();
   }, []);

   const getInfoList = () => {
      // console.log('---XXXX--->>call start 11');
      Apiconnect.getData('product/getAll?limit=3').then((response) => {
         let _xtract = Apiconnect.decrypt_obj(response.data.data);
         // setList([..._xtract, ..._xtract, ..._xtract]);
         console.log("Products", _xtract)
         setList([ ..._xtract]);
      });
   };

   return (
      <div className="[content-visibility:auto] padded-container py-8 md:py-[60px]">
         <div className="">
            <div className="flex items-end">
               <div className="flex-1">
                  <h2 className="text-2xl font-bold">Trending Products</h2>
                  <div className="paragraph2 text-whop-dark-gray mt-1 hidden md:block">Products currently in high demand.</div>
               </div>
               <div className="flex items-center gap-2">
                  {/* <button type="button" className="group/icon-button relative shrink-0 items-center justify-center overflow-hidden focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring font-sans tracking-[-0.005em] h-10 !w-10 rounded-md bg-whop-white text-whop-black hidden sm:flex">
               <div className="absolute inset-0 transition group-hover/icon-button:bg-black/[4%] group-active/icon-button:bg-black/[8%] biz-dark-1:group-hover/icon-button:bg-white/[8%] biz-dark-1:group-active/icon-button:bg-white/[16%] biz-dark-2:group-hover/icon-button:bg-white/[8%] biz-dark-2:group-active/icon-button:bg-white/[16%]"></div>
               <div className="flex items-center justify-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-left" className="svg-inline--fa fa-arrow-left fa-fw text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                     <path fill="currentColor" d="M7.4 273.4C2.7 268.8 0 262.6 0 256s2.7-12.8 7.4-17.4l176-168c9.6-9.2 24.8-8.8 33.9 .8s8.8 24.8-.8 33.9L83.9 232 424 232c13.3 0 24 10.7 24 24s-10.7 24-24 24L83.9 280 216.6 406.6c9.6 9.2 9.9 24.3 .8 33.9s-24.3 9.9-33.9 .8l-176-168z"></path>
                  </svg>
               </div>
            </button>
            <button type="button" className="group/icon-button relative shrink-0 items-center justify-center overflow-hidden focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring font-sans tracking-[-0.005em] h-10 !w-10 !cursor-not-allowed opacity-40 rounded-md bg-whop-white text-whop-black hidden sm:flex" disabled="">
               <div className="absolute inset-0 transition"></div>
               <div className="flex items-center justify-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-fw text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                     <path fill="currentColor" d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"></path>
                  </svg>
               </div>
            </button> */}
                  <Link to={"/charts/?tab=1"}>
                     <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-background text-whop-black border-whop-stroke border text-button4 h-10 px-[15px]">
                        <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                        <div className="z-10 flex items-center justify-center">
                           <div className="">See all</div>
                           <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" className="svg-inline--fa fa-chevron-right fa-fw ml-[7px] text-[12px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                              <path fill="currentColor" d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"></path>
                           </svg>
                        </div>
                     </button>
                  </Link>
               </div>
            </div>
            <div className="relative mt-6">
               <div className="-mx-2 -my-5 flex snap-mandatory scroll-p-3 flex-nowrap gap-2 overflow-x-auto px-2 py-5 sm:snap-x">
                  {List?.map((val, key) => (
                     <ProductCard val={val} key={key} />
                  ))}

               </div>
            </div>
         </div>
      </div>
   )
}

export default TrendingProducts