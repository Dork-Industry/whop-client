import React from 'react'

const Products = () => {
    return (
        <div>
            <div class="space-y-10">
                <div class="fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col bg-white transition-all duration-300 translate-y-full">
                    <div class="border-whop-stroke flex items-center justify-between border-0 border-b border-solid p-4">
                        <div class="display3">Sort &amp; Filter</div>
                        <button type="button" class="group/icon-button relative flex shrink-0 items-center justify-center overflow-hidden focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring font-sans tracking-[-0.005em] h-10 !w-10 rounded-md bg-whop-black text-whop-fixed-white">
                            <div class="absolute inset-0 transition group-hover/icon-button:bg-black/[12%] group-active/icon-button:bg-black/[18%]"></div>
                            <div class="flex items-center justify-center">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="xmark-large" class="svg-inline--fa fa-xmark-large fa-fw text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M41 39C31.6 29.7 16.4 29.7 7 39S-2.3 63.6 7 73l183 183L7 439c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l183-183L407 473c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-183-183L441 73c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-183 183L41 39z"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div class="flex-1 overflow-y-auto overscroll-contain p-4">
                        <div class="sticky flex flex-col gap-6 pt-2">
                            <div class="md:hidden">
                                <div class="button4 pb-2 md:pl-[14px]">Sort By</div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-dot" class="svg-inline--fa fa-circle-dot text-whop-black text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Best Sellers</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" class="svg-inline--fa fa-circle text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Price: Low to High</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" class="svg-inline--fa fa-circle text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Price: High to Low</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" class="svg-inline--fa fa-circle text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Highest Rated</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" class="svg-inline--fa fa-circle text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Newest Arrivals</div>
                                </div>
                            </div>
                            <div class="bg-whop-stroke h-[1px] md:hidden"></div>
                            <div>
                                <div class="button4 pb-2 md:pl-[14px]">Categories</div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Personal Finance</div>
                                    <div class="text3 text-whop-dark-gray text-right">6</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Students</div>
                                    <div class="text3 text-whop-dark-gray text-right">68</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Skylight Gaming</div>
                                    <div class="text3 text-whop-dark-gray text-right">3</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Sports Picks</div>
                                    <div class="text3 text-whop-dark-gray text-right">542</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Skylight Student</div>
                                    <div class="text3 text-whop-dark-gray text-right">1</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Skylight Templates</div>
                                    <div class="text3 text-whop-dark-gray text-right">2</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Ecommerce</div>
                                    <div class="text3 text-whop-dark-gray text-right">127</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Life Hacks</div>
                                    <div class="text3 text-whop-dark-gray text-right">43</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Reselling</div>
                                    <div class="text3 text-whop-dark-gray text-right">310</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Social Media</div>
                                    <div class="text3 text-whop-dark-gray text-right">70</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Trading</div>
                                    <div class="text3 text-whop-dark-gray text-right">677</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Gaming</div>
                                    <div class="text3 text-whop-dark-gray text-right">14</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Skylight Opensource</div>
                                    <div class="text3 text-whop-dark-gray text-right">4</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Skylight Business</div>
                                    <div class="text3 text-whop-dark-gray text-right">3</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Saas</div>
                                    <div class="text3 text-whop-dark-gray text-right">10</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Business</div>
                                    <div class="text3 text-whop-dark-gray text-right">133</div>
                                </div>
                            </div>
                            <div class="bg-whop-stroke h-[1px]"></div>
                            <div>
                                <div class="button4 pb-2 md:pl-[14px]">Price</div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Free</div>
                                    <div class="text3 text-whop-dark-gray text-right">655</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Free Trial</div>
                                    <div class="text3 text-whop-dark-gray text-right">183</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Under $25</div>
                                    <div class="text3 text-whop-dark-gray text-right">412</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">$25 to $50</div>
                                    <div class="text3 text-whop-dark-gray text-right">304</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">$50 to $100</div>
                                    <div class="text3 text-whop-dark-gray text-right">224</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">$100 and over</div>
                                    <div class="text3 text-whop-dark-gray text-right">144</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-whop-stroke flex items-center gap-2 border-0 border-t border-solid p-4">
                        <button type="button" class="group/button relative flex items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring flex-1 bg-whop-background text-whop-black border-whop-stroke border text-button4 h-10 px-[15px]">
                            <div class="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                            <div class="z-10 flex items-center justify-center">
                                <div class="">Reset</div>
                            </div>
                        </button>
                        <button type="button" class="group/button relative flex items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring flex-1 bg-whop-primary text-whop-fixed-white text-button4 h-10 px-[15px]">
                            <div class="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
                            <div class="z-10 flex items-center justify-center">
                                <div class="">Apply</div>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="flex gap-16">
                    <div class="hidden min-w-[206px] md:block">
                        <div class="sticky flex flex-col gap-6 pt-2">
                            <div class="md:hidden">
                                <div class="button4 pb-2 md:pl-[14px]">Sort By</div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-dot" class="svg-inline--fa fa-circle-dot text-whop-black text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Best Sellers</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" class="svg-inline--fa fa-circle text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Price: Low to High</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" class="svg-inline--fa fa-circle text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Price: High to Low</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" class="svg-inline--fa fa-circle text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Highest Rated</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" class="svg-inline--fa fa-circle text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Newest Arrivals</div>
                                </div>
                            </div>
                            <div class="bg-whop-stroke h-[1px] md:hidden"></div>
                            <div>
                                <div class="button4 pb-2 md:pl-[14px]">Categories</div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Personal Finance</div>
                                    <div class="text3 text-whop-dark-gray text-right">6</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Students</div>
                                    <div class="text3 text-whop-dark-gray text-right">68</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Skylight Gaming</div>
                                    <div class="text3 text-whop-dark-gray text-right">3</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Sports Picks</div>
                                    <div class="text3 text-whop-dark-gray text-right">542</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Skylight Student</div>
                                    <div class="text3 text-whop-dark-gray text-right">1</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Skylight Templates</div>
                                    <div class="text3 text-whop-dark-gray text-right">2</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Ecommerce</div>
                                    <div class="text3 text-whop-dark-gray text-right">127</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Life Hacks</div>
                                    <div class="text3 text-whop-dark-gray text-right">43</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Reselling</div>
                                    <div class="text3 text-whop-dark-gray text-right">310</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Social Media</div>
                                    <div class="text3 text-whop-dark-gray text-right">70</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Trading</div>
                                    <div class="text3 text-whop-dark-gray text-right">677</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Gaming</div>
                                    <div class="text3 text-whop-dark-gray text-right">14</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Skylight Opensource</div>
                                    <div class="text3 text-whop-dark-gray text-right">4</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Skylight Business</div>
                                    <div class="text3 text-whop-dark-gray text-right">3</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Saas</div>
                                    <div class="text3 text-whop-dark-gray text-right">10</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Business</div>
                                    <div class="text3 text-whop-dark-gray text-right">133</div>
                                </div>
                            </div>
                            <div class="bg-whop-stroke h-[1px]"></div>
                            <div>
                                <div class="button4 pb-2 md:pl-[14px]">Price</div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Free</div>
                                    <div class="text3 text-whop-dark-gray text-right">655</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Free Trial</div>
                                    <div class="text3 text-whop-dark-gray text-right">183</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">Under $25</div>
                                    <div class="text3 text-whop-dark-gray text-right">412</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">$25 to $50</div>
                                    <div class="text3 text-whop-dark-gray text-right">304</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">$50 to $100</div>
                                    <div class="text3 text-whop-dark-gray text-right">224</div>
                                </div>
                                <div class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="w-3 h-3 text-whop-strokeDark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                    </svg>
                                    <div class="text3 text-whop-off-black flex-1">$100 and over</div>
                                    <div class="text3 text-whop-dark-gray text-right">144</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full space-y-6 overflow-hidden">
                        <div class="flex items-center justify-between">
                            <h5 class="text-whop-black">1969 products</h5>
                            <div class="flex cursor-pointer items-center gap-1.5 md:hidden">
                                <div class="text2">Sort &amp; Filter</div>
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="sliders" class="svg-inline--fa fa-sliders fa-fw " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M0 416c0 13.3 10.7 24 24 24l59.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56L488 440c13.3 0 24-10.7 24-24s-10.7-24-24-24l-251.7 0c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56L24 392c-13.3 0-24 10.7-24 24zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-35.8 0-66.1 23.5-76.3 56L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l251.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56l59.7 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-59.7 0c-10.2-32.5-40.5-56-76.3-56zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm76.3-56C258.1 39.5 227.8 16 192 16s-66.1 23.5-76.3 56L24 72C10.7 72 0 82.7 0 96s10.7 24 24 24l91.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56L488 120c13.3 0 24-10.7 24-24s-10.7-24-24-24L268.3 72z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="h-fit w-full">
                            <div class="relative flex items-center">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span class="sm:text-sm">
                                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="magnifying-glass" class="svg-inline--fa fa-magnifying-glass fa-fw text-whop-dark-gray/[75%] absolute top-1/2 -translate-y-1/2 h-[16px] w-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <input data-hj-allow="true" placeholder="Search products" autocomplete="off" spellcheck="false" autocorrect="off" class="block w-full appearance-none pr-3 border-whop-stroke-dark focus-within:border-whop-field-highlight focus-within:ring-whop-field-highlight/30 border transition focus-within:outline-none focus-within:ring placeholder:text-whop-dark-gray/[50%] text-whop-black text-text1 outline-none h-10 rounded-md pl-[34px] bg-whop-hover shadow-none" type="search" value="" />
                            </div>
                        </div>
                        {/* table desktop */}

                        <div class="hidden lg:block">
                            <div class="flex min-h-0 flex-col">
                                <div class="flex-1 overflow-x-auto">
                                    <table cellpadding="8" class="w-full table-auto overflow-hidden">
                                        <thead class="border-whop-stroke border-b">
                                            <tr>
                                                <th colspan="1" class="text-overline4 group whitespace-nowrap py-[11px] text-left uppercase  w-[150px]" >
                                                    <div class="flex items-center text-whop-black">product</div>
                                                </th>
                                                <th colspan="1" class="text-overline4 group whitespace-nowrap py-[11px] text-left uppercase w-[150px]" >
                                                    <div class="flex items-center text-whop-black">rating</div>
                                                </th>
                                                <th colspan="1" class="text-overline4 group whitespace-nowrap py-[11px] text-left uppercase w-[150px]" >
                                                    <div class="flex items-center text-whop-black">Price</div>
                                                </th>
                                                <th colspan="1" class="text-overline4 group whitespace-nowrap py-[11px] text-left uppercase w-[150px]" >
                                                    <div class="flex items-center text-whop-black">reward</div>
                                                </th>
                                                <th colspan="1" class="text-overline4 group whitespace-nowrap py-[11px] text-left uppercase w-[150px]" >
                                                    <div class="flex items-center text-whop-black"></div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="">
                                            <tr class="border-whop-stroke !border-b">
                                                <td class="text-text3 text-whop-black overflow-hidden whitespace-nowrap w-[150px]" >
                                                    <div class="flex items-center gap-2">
                                                        <img class="border-whop-stroke border-[0.5px] rounded-[10px] object-cover w-10 h-10" src="https://img.whop.com/2VhQ833K7tjGqeY7t_LzVdwfeubPgpp028Gs4ibDdi0/rs:fill:40:40/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTAyLTEyL3VzZXJfMTE4NzcwNl85NmFlNjkyOS1lMTUzLTRlMzItODFlMS1iZGI3M2Q1Y2Y1OTYucG5n" alt="Product image" width="40" height="40" loading="lazy" fetchpriority="auto" srcset="https://img.whop.com/2VhQ833K7tjGqeY7t_LzVdwfeubPgpp028Gs4ibDdi0/rs:fill:40:40/el:1/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTAyLTEyL3VzZXJfMTE4NzcwNl85NmFlNjkyOS1lMTUzLTRlMzItODFlMS1iZGI3M2Q1Y2Y1OTYucG5n 1x, https://img.whop.com/RdK4kQd9ZI9tOC6xgDzDDiwnZYGhfQ3izty2ECKWJxs/rs:fill:40:40/el:1/dpr:2/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTAyLTEyL3VzZXJfMTE4NzcwNl85NmFlNjkyOS1lMTUzLTRlMzItODFlMS1iZGI3M2Q1Y2Y1OTYucG5n 2x" />
                                                        <div class="space-y-0.5">
                                                            <div class="subtitle3">Wealth Group</div>
                                                            <div class="text4 text-whop-dark-gray">Unlock Crypto Wealth: Expert Education, Charts &amp; Exclusive Community</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="text-text3 text-whop-black overflow-hidden whitespace-nowrap" >
                                                    <div class="flex items-center gap-0.5">
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
                                                        <div>4.94 (801)</div>
                                                    </div>
                                                </td>
                                                <td class="text-text3 text-whop-black overflow-hidden whitespace-nowrap" >$225.00 /month</td>
                                                <td class="text-text3 text-whop-black overflow-hidden whitespace-nowrap" >
                                                    <div class="inline-flex w-auto items-center justify-center rounded px-1.5 text-subtitle4 h-[18px] bg-whop-tag-green-background text-whop-tag-green">15% recurring</div>
                                                </td>
                                                <td class="text-text3 text-whop-black overflow-hidden whitespace-nowrap" >
                                                    <div class="flex w-full justify-end">
                                                        <button type="button" class="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-primary text-whop-fixed-white text-button4 h-10 px-[15px]">
                                                            <div class="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
                                                            <div class="z-10 flex items-center justify-center">
                                                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="link-simple" class="svg-inline--fa fa-link-simple fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor" d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path>
                                                                </svg>
                                                                <div class="">Copy link</div>
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
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div class="flex w-full justify-between">
                                    <div class="flex items-center gap-x-2">
                                        <button class="text-whop-black flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium leading-[17px] tracking-[-0.01em] hover:bg-whop-hover active:bg-whop-hover-press outline-none transition border-whop-black border-2">1</button><button class="text-whop-black flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium leading-[17px] tracking-[-0.01em] hover:bg-whop-hover active:bg-whop-hover-press outline-none transition">2</button><button class="text-whop-black flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium leading-[17px] tracking-[-0.01em] hover:bg-whop-hover active:bg-whop-hover-press outline-none transition">3</button>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis" class="svg-inline--fa fa-ellipsis fa-fw text-whop-gray" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="currentColor" d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"></path>
                                        </svg>
                                        <button class="text-whop-black flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium leading-[17px] tracking-[-0.01em] hover:bg-whop-hover active:bg-whop-hover-press outline-none transition">197</button>
                                    </div>
                                    <div class="flex items-center gap-x-[10px]">
                                        <p class="text-text4 text-whop-gray hidden whitespace-nowrap sm:block">Showing 1 - 10 of 1969</p>
                                        <div class="flex gap-x-2">
                                            <button class="text-whop-black flex h-8 w-8 items-center justify-center rounded-md font-medium tracking-[-0.01em] hover:bg-whop-hover active:bg-whop-hover-press outline-none transition cursor-not-allowed opacity-40 text-[14px]" disabled="">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-fw " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
                                                </svg>
                                            </button>
                                            <button class="text-whop-black flex h-8 w-8 items-center justify-center rounded-md font-medium tracking-[-0.01em] hover:bg-whop-hover active:bg-whop-hover-press outline-none transition text-[14px]">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-fw " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* table mobile and tab view */}
                        <div class="block lg:hidden">
                            <div class="flex min-h-0 flex-col">
                                <div class="flex-1 overflow-x-auto">
                                    <table cellpadding="8" class="w-full table-auto overflow-hidden">
                                        <thead class="border-whop-stroke border-b">
                                            <tr>
                                                <th colspan="1" class="text-overline4 group whitespace-nowrap py-[11px] text-left uppercase w-[150px]" >
                                                    <div class="flex items-center text-whop-black">product</div>
                                                </th>
                                                <th colspan="1" class="text-overline4 group whitespace-nowrap py-[11px] text-left uppercase w-[150px]" >
                                                    <div class="flex items-center text-whop-black"></div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="">
                                            <tr class="border-whop-stroke !border-b">
                                                <td class="text-text3 text-whop-black overflow-hidden whitespace-nowrap" >
                                                    <div class="flex items-center gap-2">
                                                        <img class="border-whop-stroke border-[0.5px] rounded-[10px] object-cover w-10 h-10" src="data:image/svg+xml;charset=utf-8,%3Csvg width='40' height='40' viewBox='0 0 96 96' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M34.4375 39.4375C34.4375 36.8594 36.8984 34.75 40.0625 34.75H56.9375C59.9844 34.75 62.5625 36.8594 62.5625 39.4375V42.25C62.5625 48.4609 57.5234 53.5 51.3125 53.5H45.6875C39.4766 53.5 34.4375 48.4609 34.4375 42.25V39.4375ZM41.4688 43.6562L42.4062 46.5859C42.5234 47.0547 43.1094 47.0547 43.2266 46.5859L44.2812 43.6562L47.0938 42.7188C47.5625 42.6016 47.5625 42.0156 47.0938 41.8984L44.2812 40.8438L43.2266 38.0312C43.1094 37.5625 42.5234 37.5625 42.4062 38.0312L41.4688 40.8438L38.5391 41.8984C38.0703 42.0156 38.0703 42.6016 38.5391 42.7188L41.4688 43.6562Z' fill='%23535961'%3E%3C/path%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M96 0H0V96H96V0ZM44.75 83.5H41.9866C41.6562 83.4444 41.3273 83.3844 41 83.3199V77.875C41 76.9375 41.8203 76 42.875 76C43.8125 76 44.75 76.9375 44.75 77.875V83.5ZM37.25 76V82.3676C31.8507 80.6805 26.9979 77.7561 23.0234 73.9263C24.7725 67.7643 29.3441 62.8057 35.2578 60.5312C39.0078 63.2266 43.5781 64.75 48.5 64.75C53.3047 64.75 57.875 63.2266 61.625 60.5312C67.2977 62.713 71.8005 67.3646 73.7297 73.179C69.8617 77.1311 65.0905 80.1957 59.75 82.0388V76C59.75 74.0078 57.9922 72.25 56 72.25H41C38.8906 72.25 37.25 74.0078 37.25 76ZM54.125 76C53.0703 76 52.25 76.9375 52.25 77.875C52.25 78.9297 53.0703 79.75 54.125 79.75C55.0625 79.75 56 78.9297 56 77.875C56 76.9375 55.0625 76 54.125 76ZM29.75 49.75H31.2734C34.2031 56.4297 40.7656 61 48.5 61C56.1172 61 62.6797 56.4297 65.6094 49.75H67.25C68.1875 49.75 69.125 48.9297 69.125 47.875V36.625C69.125 35.6875 68.1875 34.75 67.25 34.75H65.6094C62.6797 28.1875 56.1172 23.5 48.5 23.5C40.7656 23.5 34.2031 28.1875 31.2734 34.75H29.75C28.6953 34.75 27.875 35.6875 27.875 36.625V47.875C27.875 48.9297 28.6953 49.75 29.75 49.75Z' fill='%23535961'%3E%3C/path%3E%3C/svg%3E" alt="Product image" width="40" height="40" loading="lazy" fetchpriority="auto" />
                                                        <div class="space-y-0.5">
                                                            <div class="subtitle3">Wealth Group</div>
                                                            <div class="text4 text-whop-dark-gray">Unlock Crypto Wealth: Expert Education, Charts &amp; Exclusive Community</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="text-text3 text-whop-black overflow-hidden whitespace-nowrap" >
                                                    <div class="flex w-full justify-end">
                                                        <button type="button" class="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring bg-whop-background text-whop-black border-whop-stroke border text-button4 h-10 px-[15px]">
                                                            <div class="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                                                            <div class="z-10 flex items-center justify-center">
                                                                <div class="">View</div>
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
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div class="flex w-full justify-between">
                                    <div class="flex items-center gap-x-2">
                                        <button class="text-whop-black flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium leading-[17px] tracking-[-0.01em] hover:bg-whop-hover active:bg-whop-hover-press outline-none transition border-whop-black border-2">1</button><button class="text-whop-black flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium leading-[17px] tracking-[-0.01em] hover:bg-whop-hover active:bg-whop-hover-press outline-none transition">2</button><button class="text-whop-black flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium leading-[17px] tracking-[-0.01em] hover:bg-whop-hover active:bg-whop-hover-press outline-none transition">3</button>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis" class="svg-inline--fa fa-ellipsis fa-fw text-whop-gray" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="currentColor" d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"></path>
                                        </svg>
                                        <button class="text-whop-black flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium leading-[17px] tracking-[-0.01em] hover:bg-whop-hover active:bg-whop-hover-press outline-none transition">197</button>
                                    </div>
                                    <div class="flex items-center gap-x-[10px]">
                                        <p class="text-text4 text-whop-gray hidden whitespace-nowrap sm:block">Showing 1 - 10 of 1969</p>
                                        <div class="flex gap-x-2">
                                            <button class="text-whop-black flex h-8 w-8 items-center justify-center rounded-md font-medium tracking-[-0.01em] hover:bg-whop-hover active:bg-whop-hover-press outline-none transition cursor-not-allowed opacity-40 text-[14px]" disabled="">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-fw " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
                                                </svg>
                                            </button>
                                            <button class="text-whop-black flex h-8 w-8 items-center justify-center rounded-md font-medium tracking-[-0.01em] hover:bg-whop-hover active:bg-whop-hover-press outline-none transition text-[14px]">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-fw " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* table mobile and tab view */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products