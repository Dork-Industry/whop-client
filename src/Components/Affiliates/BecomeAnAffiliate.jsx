import React from 'react'
import { Link } from 'react-router-dom';

const BecomeAnAffiliate = () => {
    const recentz = [
        {
            name: 'Beat the Books',
            event: 'Someone just made %7.50',
            thumb: '/assets/img/testimonial/testi-1.jpg',
        },
        {
            name: 'Team2Trading',
            event: 'Someone just made %10.50',
            thumb: '/assets/img/testimonial/testi-2.jpg',
        },
        {
            name: 'Lucid Capital',
            event: 'Someone just made %23.76',
            thumb: '/assets/img/testimonial/testi-3.jpg',
        },
        {
            name: 'Swift Daily Picks',
            event: 'Someone just made %7.50',
            thumb: '/assets/img/testimonial/testi-4.jpg',
        },
        {
            name: 'Jane Smith',
            event: 'Someone just made %7.50',
            thumb: '/assets/img/testimonial/testi-2.jpg',
        },
        {
            name: 'Bob Johnson',
            event: 'Someone just made %7.50',
            thumb: '/assets/img/testimonial/testi-3.jpg',
        },
        {
            name: 'John Doe',
            event: 'Someone just made %7.50',
            thumb: '/assets/img/testimonial/testi-1.jpg',
        },
        {
            name: 'Jane Smith',
            event: 'Someone just made %7.50',
            thumb: '/assets/img/testimonial/testi-2.jpg',
        },
        {
            name: 'Bob Johnson',
            event: 'Someone just made %7.50',
            thumb: '/assets/img/testimonial/testi-3.jpg',
        },
    ];
  return (
<div className="padded-container flex justify-between gap-x-20 py-10 lg:py-[60px]">
   <div className="flex max-w-[700px] flex-1 flex-col">
      <div className="mb-10 space-y-2">
         <h1 className="font-display text-whop-black font-bold text-display2 lg:text-display1 ">Become an Affiliate</h1>
         <p className="paragraph2 text-whop-dark-gray">Please be aware that running ads against Whop breaches our <Link className="text-whop-fieldHighlight" to={"/tos"}>Terms of Service (ToS)</Link>, disqualifying you from receiving payments. Refer to our ToS for a full understanding of Whop's policies.</p>
      </div>
      <div className="flex flex-col gap-4">
         <Link className="border-whop-stroke flex items-center gap-[29px] rounded-[10px] border px-6 py-3 shadow-md" to={"/affiliate/customer/"}>
            <div className="text-whop-black w-full">
               <div className="display3 mb-2">Refer customers</div>
               <p className="paragraph2">Get paid to refer customers to products on Whop</p>
            </div>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" className="w-6 h-6 text-whop-black  text-2xl" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
               <path fill="currentColor" d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"></path>
            </svg>
         </Link>
         <Link className="border-whop-stroke flex items-center gap-[29px] rounded-[10px] border px-6 py-3 shadow-md" to={"/affiliates/business/"}>
            <div className="text-whop-black w-full">
               <div className="display3 mb-2">Refer businesses</div>
               <p className="paragraph2">Get paid to refer businesses to start selling on Whop</p>
            </div>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" className="w-6 h-6 text-whop-black text-2xl" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
               <path fill="currentColor" d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"></path>
            </svg>
         </Link>
      </div>
   </div>
   <div className="h-[380px] w-full md:block flex-1 sm:max-w-[509px] hidden ">
                    <div className="flex h-full flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <div className="header4">Affiliate activity</div>
                            <div className="flex items-center gap-1">
                                <div className="relative h-[14px] w-[14px]">
                                    <div className="bg-whop-field-highlight/30 absolute h-[14px] w-[14px] animate-ping rounded-full"></div>
                                    <div className="bg-whop-field-highlight/30 absolute h-[14px] w-[14px] animate-pulse rounded-full"></div>
                                    <div className="bg-whop-field-highlight absolute left-[3px] top-[3px] h-2 w-2 rounded-full"></div>
                                </div>
                                <div className="text-whop-field-highlight overline3 h-[14px]">LIVE</div>
                            </div>
                        </div>
                        <div className="relative -m-3 flex h-72 lg:h-auto flex-col gap-2 overflow-y-hidden p-3">
                            <div className="absolute bottom-0 left-0 right-0 z-10 h-14 bg-gradient-to-b from-transparent to-white"></div>

                            {recentz.map((rcn, index) => (
                                <Link className="HomeHero_appear__v0PA3 transition-all text-whop-black" to={"#"}>
                                    <div className="border-whop-stroke flex items-center gap-2 rounded-[20px] border border-solid p-2 shadow-md transition duration-300 hover:scale-[101%] hover:shadow-lg">
                                        <img className="border-whop-stroke border-[0.5px] rounded-xl object-cover w-12 h-12" src={rcn.thumb} alt="Event image" width="48" height="48" loading="eager" fetchpriority="high" />
                                        <div className="flex-1 overflow-hidden">
                                            <div className="mr-2 flex items-center justify-between">
                                                <div className="text-subtitle1 overflow-hidden text-ellipsis whitespace-nowrap">{rcn.name}</div>
                                                <div className="text5 text-whop-gray shrink-0 whitespace-nowrap">just now</div>
                                            </div>
                                            <p className="text3 text-whop-dark-gray mt-1 mb-0 text-ellipsis whitespace-nowrap p-0">{rcn.event}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}

                        </div>
                    </div>
                </div>
</div> 
 )
}

export default BecomeAnAffiliate