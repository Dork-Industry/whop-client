import React, { useState, useEffect } from 'react';

const Footer2 = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
      const scrollY = window.scrollY;
  
      // Adjust the scroll threshold based on your preference
      setIsVisible(scrollY > 200);
    };
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <div className="border-whop-stroke border-t border-solid">
            <div className="padded-container py-8 md:py-12">
                <div className="flex flex-col items-center gap-6">
                    <button type="button" onClick={scrollToTop} className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring !text-whop-black bg-whop-white text-whop-dark-gray text-button4 h-10 px-[15px]">
                        <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                        <div className="z-10 flex items-center justify-center">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" className="svg-inline--fa fa-arrow-up fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
                            </svg>
                            <div className="">Back to top</div>
                        </div>
                    </button>
                    <div className="flex flex-col gap-10 self-stretch">
                        <div className="flex flex-col justify-between gap-6 sm:flex-row">
                            <img alt="Whop" draggable="false" loading="lazy" width="137" height="28" decoding="async" data-nimg="1" className="pointer-events-none text-transparent" src="/assets/img/logo/whop.svg" />
                            <div className="flex gap-2 font-semibold">
                                <button type="button" className="group/button relative flex items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-fieldHighlight focus-visible:ring-whop-fieldHighlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring flex-1 whitespace-nowrap bg-whop-background text-whop-black border-whop-stroke border  text-button4 h-10 px-[15px]">
                                    <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                                    <div className="z-10 flex items-center justify-center">
                                        <div className="">Sign in</div>
                                    </div>
                                </button>
                                <button type="button" className="group/button text-white relative flex items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring flex-1 whitespace-nowrap bg-whop-primary text-whop-fixed-white text-button4 h-10 px-[15px]">
                                    <div className="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
                                    <div className="z-10 flex items-center justify-center">
                                        <div className="">Sign up</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-8">
                            <div className="min-w-[120px] flex-1">
                                <div className="button3">About</div>
                                <div className="subtitle2 text-whop-black mt-4 flex flex-col gap-3 font-medium">
                                    <a className="w-min whitespace-nowrap hover:underline" target="_blank" href="https://careers.whop.com">Careers</a>
                                    <a href="https://whop.com/blog/consumer-guide/" className="w-min whitespace-nowrap hover:underline" target="_blank">What’s Whop</a>
                                    <a className="w-min whitespace-nowrap hover:underline" target="_blank" href="/terms/">Terms</a>
                                    <a className="w-min whitespace-nowrap hover:underline" target="_blank" href="/privacy/">Privacy</a>
                                    <a className="w-min whitespace-nowrap hover:underline" target="_blank" href="/sitemap/">Sitemap</a>
                                    <a className="w-min whitespace-nowrap hover:underline" target="_blank" href="https://www.notion.so/whopcom/Whop-Bug-Bounty-Program-c89567aa2a634f21a0dd40963bea511c">Bug Bounty Program</a>
                                </div>
                            </div>
                            <div className="min-w-[120px] flex-1">
                                <div className="button3">Make Money</div>
                                <div className="subtitle2 text-whop-black mt-4 flex flex-col gap-3 font-medium">
                                    <a href="https://whop.com/sell/" className="w-min whitespace-nowrap hover:underline " target="_blank">Sell on Whop</a>
                                    <a className="w-min whitespace-nowrap hover:underline" target="_blank" href="https://dev.whop.com">Build an App</a>
                                    <a className="w-min whitespace-nowrap hover:underline" target="_blank" href="/affiliates/">Refer Friends</a>
                                </div>
                            </div>
                            <div className="min-w-[120px] flex-1">
                                <div className="button3">Resources</div>
                                <div className="subtitle2 text-whop-black mt-4 flex flex-col gap-3 font-medium">
                                    <a className="w-min whitespace-nowrap hover:underline" target="_blank" href="https://docs.whop.com/">Guides</a>
                                    <a href="https://whop.com/blog/" className="w-min whitespace-nowrap hover:underline" target="_blank">Blog</a>
                                    <a className="w-min whitespace-nowrap hover:underline" target="_blank" href="https://dev.whop.com">Use our API</a>
                                </div>
                            </div>
                            <div className="min-w-[240px] flex-1">
                                <div className="button3">Sell on Whop</div>
                                <div className="subtitle2 text-whop-black mt-4 flex flex-col gap-3 font-medium">
                                    <a className="w-min whitespace-nowrap hover:underline" target="_blank" href="/sell/">Sell anything</a>
                                    <a className="w-min whitespace-nowrap hover:underline" target="_blank" href="/sell/discord/">Sell access to your Discord server</a>
                                    <a className="w-min whitespace-nowrap hover:underline" target="_blank" href="/sell/telegram/">Sell access to your Telegram group</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between self-stretch">
                            <div className="paragraph3 text-whop-dark-gray hidden md:block">The all-in-one platform for digital products, communities, software, and more.</div>
                            <div className="flex gap-2">
                                <a target="_blank" className="text-whop-gray hover:text-whop-dark-gray px-2.5 py-2 transition" href="https://discord.whop.com/business">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" className="w-5 h-5 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path fill="currentColor" d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                                    </svg>
                                </a>
                                <a target="_blank" className="text-whop-gray hover:text-whop-dark-gray px-2.5 py-2 transition" href="https://twitter.com/whopio">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="w-5 h-5 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                    </svg>
                                </a>
                                <a target="_blank" className="text-whop-gray hover:text-whop-dark-gray px-2.5 py-2 transition" href="https://www.youtube.com/@WhopIO">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" className="w-5 h-5 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer2