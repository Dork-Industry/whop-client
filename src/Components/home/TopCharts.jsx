import React, { useState } from 'react';
import TopChartProductCard from './TopChartProductCard.jsx'
const TopCharts = () => {
    const [activeTab, setActiveTab] = useState('topCharts');

    const tabs = [
        { id: 'topCharts', label: 'Top Charts', description: 'Best selling products in the past month.' },
        { id: 'topTrending', label: 'Top Trending', description: 'Products currently in high demand.' },
        { id: 'topRated', label: 'Top Rated', description: 'Most loved products on Whop.' },
        { id: 'freeTrials', label: 'Free Trials', description: 'Popular products with free trials.' },
      ];
      
      const sampleProductsData = [
        {  no: 1 },
        {  no: 2 },
        {  no: 3 },
        { no: 4 },
        { no: 5 },
        { no: 6 },
        { no: 7 },
        { no: 8 },
        { no: 9 },
        { no: 10 },
      ];
      const renderProductCards = (start, end) => {
        return sampleProductsData?.slice(start, end).map((product, index) => (
          product ? <TopChartProductCard key={index} product={product} /> : null
        ));
      };
    return (
        <div className="padded-container py-8 [content-visibility:auto] lg:py-[60px]">
            <div className="mb-5 flex items-center justify-between">
                <div className="display3">Top Charts</div>
                <a href="/charts/">
                    <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-background text-whop-black border-whop-stroke border text-button4 h-10 px-[15px]">
                        <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                        <div className="z-10 flex items-center justify-center">
                            <div className="">See all</div>
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" className="w-2 fa-chevron-right fa-fw ml-[7px] text-[12px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor" d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"></path>
                            </svg>
                        </div>
                    </button>
                </a>
            </div>
            <div className="">


                <div className="border-b-whop-stroke relative flex overflow-y-auto border-0 border-b border-solid pb-[9px]">
                    <button onClick={() => setActiveTab('topCharts')} className={`!border-whop-primary hover:bg-whop-hover flex shrink-0 cursor-pointer items-center gap-2 px-6 py-[11px] transition  ${activeTab === 'topCharts' ? "text-whop-black !border-solid !border-0 !border-b-[3px] !border-whop-primary" : "text-whop-darkGray border-transparent "}`}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trophy" className="w-4 fa-trophy text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="currentColor" d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"></path>
                        </svg>
                        <div className="button3">Top Charts</div>
                    </button>
                    <button onClick={() => setActiveTab('topTrending')} className={`!border-whop-primary hover:bg-whop-hover flex shrink-0 cursor-pointer items-center gap-2 px-6 py-[11px] transition  ${activeTab === 'topTrending' ? "text-whop-black !border-solid !border-0 !border-b-[3px] !border-whop-primary" : "text-whop-darkGray border-transparent "}`}>

                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="fire-flame-curved" className="w-3 fa-fire-flame-curved text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="currentColor" d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z"></path>
                        </svg>
                        <div className="button3">Top Trending</div>
                    </button>
                    <button onClick={() => setActiveTab('topRated')} className={`!border-whop-primary hover:bg-whop-hover flex shrink-0 cursor-pointer items-center gap-2 px-6 py-[11px] transition  ${activeTab === 'topRated' ? "text-whop-black !border-solid !border-0 !border-b-[3px] !border-whop-primary" : "text-whop-darkGray border-transparent "}`}>

                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 fa-star text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                        </svg>
                        <div className="button3">Top Rated</div>
                    </button>
                    <button onClick={() => setActiveTab('freeTrials')} className={`!border-whop-primary hover:bg-whop-hover flex shrink-0 cursor-pointer items-center gap-2 px-6 py-[11px] transition  ${activeTab === 'freeTrials' ? "text-whop-black !border-solid !border-0 !border-b-[3px] !border-whop-primary" : "text-whop-darkGray border-transparent "}`}>

                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tag" className="w-4 fa-tag text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                        </svg>
                        <div className="button3">Free Trials</div>
                    </button>
                </div>



                <div className="flex flex-nowrap gap-8 overflow-hidden">
                    <div className="left-0 relative w-full shrink-0 transition-all duration-300">
                        <div className="pt-5">
                            <div className="text3 text-whop-dark-gray mb-5">{tabs.find((tab) => tab.id === activeTab)?.description}</div>
                            <div className="flex overflow-hidden md:gap-4 lg:gap-16">
                                <div className="flex-1 overflow-hidden">
                                {renderProductCards(0, 5)}
                                </div>
                                <div className="hidden flex-1 overflow-hidden md:block">
                                {renderProductCards(5, 10)}
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default TopCharts