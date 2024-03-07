import React, { useState } from 'react';
import Products from '../Components/CustomerAffiliates/Products';
import MyLinks from '../Components/CustomerAffiliates/MyLinks';
import Categories from '../Components/CustomerAffiliates/Categories';
const CustomerAffiliates = () => {
    const [activeTab, setActiveTab] = useState('products');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div class="px-5 pb-20 pt-10">
            <div class="text-whop-gray overline3 mb-10 flex flex-row items-center gap-2 uppercase">
                <a href="/affiliates/">Become an affiliate</a>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-fw w-[7px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path fill="currentColor" d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"></path>
                </svg>
                <span class="text-whop-dark-gray">Customer Affiliates</span>
            </div>
            <div class="mb-10 flex flex-col justify-start gap-6 lg:flex-row lg:justify-between lg:gap-0">
                <div>
                    <h1 class="font-display text-display2 text-whop-black mb-2">Customer Affiliates</h1>
                    <p class="paragraph2 text-whop-dark-gray">Get rewarded whenever someone buys a product with your affiliate link. <a href="https://whop.com/blog/consumer-affiliates/" target="_blank" rel="noopener noreferrer" class="underline">Learn more</a></p>
                </div>
                <a href="/affiliate/customer/my-referrals/">
                    <button type="button" class="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring w-fit bg-whop-black text-whop-background text-button4 h-10 px-[15px]">
                        <div class="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
                        <div class="z-10 flex items-center justify-center">
                            <div class="">Your Referrals (0)</div>
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-fw ml-[7px] text-[12px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z"></path>
                            </svg>
                        </div>
                    </button>
                </a>
            </div>
            <div className="space-y-10">
                <div className="bg-whop-hover flex h-10 appearance-none items-center overflow-auto rounded-full p-1 max-w-fit" role="tablist" aria-orientation="horizontal">
                    <button onClick={() => handleTabClick('myLinks')}>
                        <div className={`relative flex h-8 min-w-[150px] sm:min-w-[180px] cursor-pointer appearance-none items-center justify-center focus:outline-none ${activeTab === 'myLinks' ? ' border-whop-stroke absolute inset-0 z-[1]' : ''}`} role="tab" aria-selected={activeTab === 'myLinks'} tabindex={activeTab === 'myLinks' ? '0' : '-1'} data-headlessui-state={activeTab === 'myLinks' ? 'selected' : ''}>
                            <div className={` flex items-center justify-center rounded-full border-[0.5px]  opacity-100 ${activeTab === 'myLinks' ? 'bg-whop-background border-whop-stroke absolute inset-0 z-[1] ' : 'bg-transparent'}`} ></div>

                            <span className="text-subtitle3 z-[2] whitespace-nowrap">My Links</span>
                        </div>
                    </button>
                    <button onClick={() => handleTabClick('products')}>
                        <div className={`relative flex h-8 min-w-[150px] sm:min-w-[180px] cursor-pointer appearance-none items-center justify-center focus:outline-none ${activeTab === 'products' ? 'border-whop-stroke absolute inset-0 z-[1]' : ''}`} role="tab" aria-selected={activeTab === 'products'} tabindex={activeTab === 'products' ? '0' : '-1'} data-headlessui-state={activeTab === 'products' ? 'selected' : ''}>
                            <div className={` flex items-center justify-center rounded-full border-[0.5px]  opacity-100 ${activeTab === 'products' ? 'bg-whop-background border-whop-stroke absolute inset-0 z-[1] ' : 'bg-transparent'}`} ></div>
                            <span className="text-subtitle3 z-[2] whitespace-nowrap">Products</span>
                        </div>
                    </button>
                    <button onClick={() => handleTabClick('categories')}>
                        <div className={`relative flex h-8 min-w-[150px] sm:min-w-[180px] cursor-pointer appearance-none items-center justify-center focus:outline-none ${activeTab === 'categories' ? ' border-whop-stroke absolute inset-0 z-[1]' : ''}`} role="tab" aria-selected={activeTab === 'categories'} tabindex={activeTab === 'categories' ? '0' : '-1'} data-headlessui-state={activeTab === 'categories' ? 'selected' : ''}>
                            <div className={` flex items-center justify-center rounded-full border-[0.5px]  opacity-100 ${activeTab === 'categories' ? 'bg-whop-background border-whop-stroke absolute inset-0 z-[1] ' : 'bg-transparent'}`} ></div>
                            <span className="text-subtitle3 z-[2] whitespace-nowrap">Categories</span>
                        </div>
                    </button>
                </div>

            </div>

            {activeTab === 'products' && <Products />}
            {activeTab === 'myLinks' && <MyLinks />}
            {activeTab === 'categories' && <Categories />}
        </div>
    )
}

export default CustomerAffiliates