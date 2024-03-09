import React, { useEffect, useRef, useState } from 'react'
import Apiconnect from '../../services/Apiconnect'
import { Image } from 'react-bootstrap';

const Banner = () => {
    // const recentz = [
    //     {
    //         name: 'Praveen Dagga',
    //         event: 'Purchased 2 min ago',
    //         thumb: '/assets/img/testimonial/testi-1.jpg',
    //     },
    //     {
    //         name: 'Pratik Mishra',
    //         event: 'Added a comment 5 min ago',
    //         thumb: '/assets/img/testimonial/testi-2.jpg',
    //     },
    //     {
    //         name: 'Binod Patel',
    //         event: 'Added a comment 15 min ago',
    //         thumb: '/assets/img/testimonial/testi-3.jpg',
    //     },
    //     {
    //         name: 'Mathew Das',
    //         event: 'Purchased 22 min ago',
    //         thumb: '/assets/img/testimonial/testi-4.jpg',
    //     },
    //     {
    //         name: 'Jane Smith',
    //         event: 'Added a comment 25 min ago',
    //         thumb: '/assets/img/testimonial/testi-2.jpg',
    //     },
    //     {
    //         name: 'Bob Johnson',
    //         event: 'Added a comment 40 min ago',
    //         thumb: '/assets/img/testimonial/testi-3.jpg',
    //     },
    //     {
    //         name: 'John Doe',
    //         event: 'Purchased 42 min ago',
    //         thumb: '/assets/img/testimonial/testi-1.jpg',
    //     },
    //     {
    //         name: 'Jane Smith',
    //         event: 'Added a comment 1 hr ago',
    //         thumb: '/assets/img/testimonial/testi-2.jpg',
    //     },
    //     {
    //         name: 'Bob Johnson',
    //         event: 'Added a comment 3 hr ago',
    //         thumb: '/assets/img/testimonial/testi-3.jpg',
    //     },
    // ];

    const [recentz, setRecentz] = useState([])
    let [delay, setDelay] = useState(1000*60*60);
   

    useEffect(() => {
        // setInterval(getLatestUser, delay);
        getLatestUser()
    }, [])
    

    const getLatestUser = () =>{
        const data = Apiconnect.getData('users/getlatestuser').then((response) => {
           
            if(response.data && response.data.data)
            {
                let _xtract = Apiconnect.decrypt_obj(response.data.data);
                setRecentz(...recentz,_xtract);
            }
            else{
                setRecentz(recentz);
            }
        })
    }


    return (
        <div className="padded-container pb-6 pt-8 md:pb-[60px] md:pt-[100px]">
            <div className="align-start flex flex-col justify-between gap-8 md:flex-row">
                <div className="mx-auto px-8  lg:px-0 max-w-[700px] flex-1 md:mx-0">
                    <h1 className="font-display py-3 lg:py-0 text-whop-black m-0 mb-6 text-center text-[32px] font-bold leading-[35px] md:mb-2 md:text-left md:text-[56px] md:leading-[62px]">A marketplace for really cool internet products.</h1>
                    <p className="paragraph1 text-whop-black mb-10 hidden md:block">Entrepreneurial communities and software to help you earn online.</p>
                    <form action="/search" method="get">
                        <div className="bg-whop-hover focus-within:border-whop-field-highlight group flex items-center gap-2 overflow-hidden rounded-full border-[3px] border-solid border-black pr-4 transition">
                            <input data-hj-allow="true" placeholder="Search 'trading'" autoComplete="off" className="text1 flex w-full border-none bg-transparent px-5 py-3 outline-none" type="search" name="query" />
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="magnifying-glass" className="w-4 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"></path>
                            </svg>
                        </div>
                    </form>
                </div>
                <div className="h-[280px] w-full flex-1 sm:max-w-[509px]">
                    <div className="flex h-full flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <div className="header4">Recent activity</div>
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
                                <a className="HomeHero_appear__v0PA3 transition-all text-whop-black" href="#">
                                    <div className="border-whop-stroke flex items-center gap-2 rounded-[20px] border border-solid p-2 shadow-md transition duration-300 hover:scale-[101%] hover:shadow-lg">
                                        {/* <img className="border-whop-stroke border-[0.5px] rounded-xl object-cover w-12 h-12" src={rcn.thumb} alt="Event image" width="48" height="48" loading="eager" fetchpriority="high" /> */}
                                        <Image className="border-whop-stroke border-[0.5px] rounded-xl object-cover w-12 h-12" src={rcn.thumbnail} alt="Event image" width="48" height="48" loading="eager" fetchpriority="high" />
                                        <div className="flex-1 overflow-hidden">
                                            <div className="mr-2 flex items-center justify-between">
                                                <div className="text-subtitle1 overflow-hidden text-ellipsis whitespace-nowrap">{rcn.user_name}</div>
                                                <div className="text5 text-whop-gray shrink-0 whitespace-nowrap">{rcn.insert_date}</div>
                                            </div>
                                            <p className="text3 text-whop-dark-gray mt-1 mb-0 text-ellipsis whitespace-nowrap p-0">{`New ${rcn.user_typ} Loggen in`}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner