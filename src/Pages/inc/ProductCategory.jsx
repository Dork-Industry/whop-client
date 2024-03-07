import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ProductCard from '../../Components/Category/ProductCard'
import Apiconnect from '../../services/Apiconnect.js'
import helper from '../../services/HelperCodebase.js';
const ProductCategory = () => {
    const navigate = useNavigate();
    const param = useParams();

    useEffect(() => {
        getInfoList();
        getCatList();
    }, []);
    const [List, setList] = useState([]);
    const [Maincat, setMaincat] = useState([]);
    const [CatList, setCatList] = useState([]);

    const getInfoList = () => {
        Apiconnect.getData('product/getAll?limit=10').then((response) => {
            let _xtract = Apiconnect.decrypt_obj(response.data.data);
            setList(_xtract);
        });
    };

    const getCatList = () => {
        Apiconnect.getData('cat/getAll').then((response) => {
            let _xtract = Apiconnect.decrypt_obj(response.data.data);
            setCatList(_xtract);

            var ttx = helper.array_search_multidim('url', param.slug, _xtract);

            setMaincat(ttx[0]);
        });
    };

    const golink = (ln) => {
        navigate(ln);
    };
    const priceList = [
        { name: 'Free', count: 65 },
        { name: 'Free Trial', count: 65 },
        { name: 'Under $25', count: 15 },
        { name: '$25 - $65', count: 165 },
        { name: '$65 - $100', count: 335 },
        { name: 'Above $100', count: 75 },
    ]
    return (
        <div class="unpadded-container pb-[60px] md:px-10">
            <div class="border-whop-stroke mb-6 mt-[60px] hidden items-end gap-5 border-0 border-b border-solid pb-2 md:flex md:items-center">
                <h1 class="font-display text-display2 pb-1.5">{Maincat.name}</h1>
                <div class="paragraph1 text-whop-dark-gray">{Maincat.info}</div>
            </div>
            <div class="mb-6 flex gap-10 overflow-x-hidden">
                <div class="hidden w-52 md:block">
                    <div class="sticky flex flex-col gap-6 pt-2">
                        <div class="md:hidden">
                            <div class="button4 pb-2 md:pl-[14px]">Sort By</div>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk&amp;f=sort.best_sellers">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-dot" class="svg-inline--fa fa-circle-dot text-whop-black text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">Best Sellers</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk&amp;f=sort.price_low_to_high">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" class="svg-inline--fa fa-circle text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">Price: Low to High</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk&amp;f=sort.price_high_to_low">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" class="svg-inline--fa fa-circle text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">Price: High to Low</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk&amp;f=sort.highest_rated">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" class="svg-inline--fa fa-circle text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">Highest Rated</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk&amp;f=sort.newest_arrivals">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" class="svg-inline--fa fa-circle text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">Newest Arrivals</div>
                            </a>
                        </div>
                        <div class="bg-whop-stroke h-[1px] md:hidden"></div>
                        <div>
                            <div class="button4 pb-2 md:pl-[14px]">Categories</div>
                            {CatList.map((valz, keyz) => {
                                return (
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="sidebar__check d-flex align-items-center">
                                            <input
                                                className="m-check-input"
                                                type="checkbox"
                                                id="m-wp"
                                            />
                                            <label className="m-check-label" for="m-wp">
                                                {valz.name}
                                            </label>
                                        </div>
                                        <span> </span>
                                    </div>
                                );
                            })}

                        </div>
                        <div class="bg-whop-stroke h-[1px]"></div>
                        <div>
                            <div class="button4 pb-2 md:pl-[14px]">Price</div>
                            {priceList?.map((valz, keyz) => {
                                return (
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="sidebar__check d-flex align-items-center">
                                            <input
                                                className="m-check-input"
                                                type="checkbox"
                                                id="m-wp"
                                            />
                                            <label className="m-check-label" for="m-wp">
                                                {valz?.name}
                                            </label>
                                        </div>
                                        <span>{valz?.count} </span>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>
                <div class="flex-1 overflow-x-hidden">
                    <div class="flex items-center justify-between border-solid py-3 pl-5 pr-3 md:mb-1.5 md:py-0 md:pl-4 md:pr-2">
                        <div class="flex flex-1 items-center gap-4 overflow-auto">
                            <div class="text3 text-whop-dark-gray md:text-whop-black whitespace-nowrap md:text-[16px] md:font-semibold md:leading-[22px]">
                                304  products
                            </div>
                            <div class="flex flex-1 items-center gap-3 overflow-auto"></div>
                        </div>
                        <button class="hover:bg-whop-hover hidden items-center gap-1.5 rounded-md px-2.5 py-[7.5px] outline-none transition md:flex" id="headlessui-menu-button-:R6jannnlfcqlfala:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                            <div class="whitespace-nowrap text-[14px]">
                                Sort by  <span class="font-semibold">Best Sellers</span>
                            </div>
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down text-xs" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z"></path>
                            </svg>
                        </button>
                        <div class="text-whop-black hover:bg-whop-hover flex cursor-pointer select-none items-center gap-1.5 rounded px-2 py-1 transition md:hidden">
                            <div class="text2">Sort &amp; Filter</div>
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="sliders" class="svg-inline--fa fa-sliders text-[14px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M0 416c0 13.3 10.7 24 24 24l59.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56L488 440c13.3 0 24-10.7 24-24s-10.7-24-24-24l-251.7 0c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56L24 392c-13.3 0-24 10.7-24 24zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-35.8 0-66.1 23.5-76.3 56L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l251.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56l59.7 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-59.7 0c-10.2-32.5-40.5-56-76.3-56zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm76.3-56C258.1 39.5 227.8 16 192 16s-66.1 23.5-76.3 56L24 72C10.7 72 0 82.7 0 96s10.7 24 24 24l91.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56L488 120c13.3 0 24-10.7 24-24s-10.7-24-24-24L268.3 72z"></path>
                            </svg>
                        </div>
                    </div>
                    {List.map((val, key) =>(
                       <ProductCard key={key} product={val} />
                    ))}
                   
                    

                    <div class="flex items-center justify-between mx-5 mt-1.5 md:mx-0">
                        <div class="flex items-center gap-2">
                            <a class="subtitle flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-md border-2 transition border-black" href="/categories/reselling/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk">1</a><a class="subtitle flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-md border-2 transition border-transparent hover:bg-whop-hover hover:border-whop-hover active:border-whop-hover-press active:bg-whop-hover-press" href="/categories/reselling/page/2/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk">2</a><a class="subtitle flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-md border-2 transition border-transparent hover:bg-whop-hover hover:border-whop-hover active:border-whop-hover-press active:bg-whop-hover-press" href="/categories/reselling/page/3/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk">3</a>
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="ellipsis" class="svg-inline--fa fa-ellipsis text-whop-gray" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M432 256a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-160 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zM64 304a48 48 0 1 1 0-96 48 48 0 1 1 0 96z"></path>
                            </svg>
                            <a class="subtitle flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-md border-2 transition border-transparent hover:bg-whop-hover hover:border-whop-hover active:border-whop-hover-press active:bg-whop-hover-press" href="/categories/reselling/page/31/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk">31</a>
                        </div>
                        <div class="flex items-center gap-2">
                            <a class="subtitle flex h-8 w-8 select-none items-center justify-center rounded-md border-2 transition border-transparent cursor-not-allowed opacity-50" href="#">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" class="w-5 h-5  " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L15 239z"></path>
                                </svg>
                            </a>
                            <a class="subtitle flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-md border-2 transition border-transparent hover:bg-whop-hover hover:border-whop-hover active:border-whop-hover-press active:bg-whop-hover-press" href="/categories/reselling/page/2/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" class="w-5 h-5 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"></path>
                                </svg>
                            </a>
                            <div class="text4 text-whop-gray">
                                Showing  1  -  10  of   304
                            </div>
                        </div>
                    </div>
                    <p class="text3 text-whop-gray mt-4 px-4">
                        <span class="font-bold">
                            What is Reselling ?<br />
                        </span>
                        <br />Perhaps the easiest entry into entrepreneurship, reselling is a skill that will teach you how to secure profits in hot markets by learning the art of the flip. However, because of its relative ease of execution, reselling relies heavily on insider knowledge, and the early birds always get the worm.
                        In recent years, the most successful resellers have either been part of or started their own reselling communities, and Whop is proud to house a collection of the very best.
                        Our reselling Discord servers will allow you to join your chosen crew of winners who spread knowledge and eat together. Once you’re in, you’re in and if you’re new to this game, you’re in for a reveal of a whole new world of ways to make money, sometimes by selling things or quantities that you never would have dreamed you would.
                        You’ll learn to flip everything,from the hottest sneakers and sports cards sales to low-key items like discounted appliances or other popular household items.
                        Browse Whop today to find your reselling community. Having supportive staff dropping tips in addition to accessing sophisticated tools such as real-time monitors will keep you stacking W’s while keeping the L’s low so you can keep your cash flowing and your reselling hustle booming.
                    </p>
                </div>
            </div>
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
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk&amp;f=sort.best_sellers">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-dot" class="svg-inline--fa fa-circle-dot text-whop-black text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">Best Sellers</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk&amp;f=sort.price_low_to_high">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" class="svg-inline--fa fa-circle text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">Price: Low to High</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk&amp;f=sort.price_high_to_low">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" class="svg-inline--fa fa-circle text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">Price: High to Low</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk&amp;f=sort.highest_rated">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" class="svg-inline--fa fa-circle text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">Highest Rated</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk&amp;f=sort.newest_arrivals">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" class="svg-inline--fa fa-circle text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">Newest Arrivals</div>
                            </a>
                        </div>
                        <div class="bg-whop-stroke h-[1px] md:hidden"></div>
                        <div>
                            <div class="button4 pb-2 md:pl-[14px]">Categories</div>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk&amp;f=additional.verified">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">Whop Verified</div>
                                <div class="text3 text-whop-dark-gray text-right">20</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/collectibles/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">Collectibles</div>
                                <div class="text3 text-whop-dark-gray text-right">22</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/e_commerce/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">ECommerce</div>
                                <div class="text3 text-whop-dark-gray text-right">41</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/general/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">General</div>
                                <div class="text3 text-whop-dark-gray text-right">98</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/nfts/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">NFTs</div>
                                <div class="text3 text-whop-dark-gray text-right">10</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/retail/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">Retail</div>
                                <div class="text3 text-whop-dark-gray text-right">7</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/sneakers/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">Sneakers</div>
                                <div class="text3 text-whop-dark-gray text-right">92</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/tickets/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">Tickets</div>
                                <div class="text3 text-whop-dark-gray text-right">29</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/other/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">Other</div>
                                <div class="text3 text-whop-dark-gray text-right">5</div>
                            </a>
                        </div>
                        <div class="bg-whop-stroke h-[1px]"></div>
                        <div>
                            <div class="button4 pb-2 md:pl-[14px]">Price</div>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk&amp;f=additional.free">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">Free</div>
                                <div class="text3 text-whop-dark-gray text-right">65</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk&amp;f=additional.free_trial">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">Free Trial</div>
                                <div class="text3 text-whop-dark-gray text-right">27</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk&amp;f=price.0-25">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">Under $25</div>
                                <div class="text3 text-whop-dark-gray text-right">65</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk&amp;f=price.25-50">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">$25 to $50</div>
                                <div class="text3 text-whop-dark-gray text-right">87</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk&amp;f=price.50-100">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">$50 to $100</div>
                                <div class="text3 text-whop-dark-gray text-right">29</div>
                            </a>
                            <a class="hover:bg-whop-hover -mx-1 flex cursor-pointer select-none items-center gap-2.5 rounded px-1 py-[7.5px] transition md:md:pl-[14px] md:pr-[10px]" href="/categories/reselling/?%3Fhuman_challenge_solution=qlkuwbgdisugbtetwsbdcqk&amp;f=price.100-">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square text-whop-stroke-dark text-[20px] md:text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                                </svg>
                                <div class="text3 text-whop-off-black flex-1">$100 and over</div>
                                <div class="text3 text-whop-dark-gray text-right">14</div>
                            </a>
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
        </div>
    )
}

export default ProductCategory