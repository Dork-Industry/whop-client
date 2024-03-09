import React, { useState, useEffect } from 'react';
import Apiconnect from '../services/Apiconnect.js';
import Itembox from './comp/Itembox.js';
import CountUp from 'react-countup';
import ExploreItem from './comp/explore-item.js';
import Banner from '../Components/home/Banner.jsx';
import TrendingProducts from '../Components/home/TrendingProducts.jsx';
import Categories from '../Components/home/Categories.jsx';
import NewlyAddedProducts from '../Components/home/NewlyAddedProducts.jsx';
import FreeTrialProducts from '../Components/home/FreeTrialProducts.jsx';
import WhopPicksProducts from '../Components/home/WhopPicksProducts.jsx';
import RecentReviews from '../Components/home/RecentReviews.jsx';
import DiscoverWhy from '../Components/home/DiscoverWhy.jsx';
import CustomerSupport from '../Components/home/CustomerSupport.jsx';
import MakeMoneyAsAffiliate from '../Components/home/MakeMoneyAsAffiliate.jsx';
import WhopBlog from '../Components/home/WhopBlog.jsx';
import Faq from '../Components/home/Faq.jsx';
import SellOnWhop from '../Components/home/SellOnWhop.jsx';
import TopCharts from '../Components/home/TopCharts.jsx';
const Home = () => {
    // const [List, setList] = useState([]);
    // const [CatList, setCatList] = useState([]);

    // const recentz = [
    //     {
    //         name: 'Praveen Dagga',
    //         event: 'Purchased 2 min ago',
    //         thumb: 'http://localhost:3000/assets/img/testimonial/testi-1.jpg',
    //     },
    //     {
    //         name: 'Pratik Mishra',
    //         event: 'Added a comment 5 min ago',
    //         thumb: 'http://localhost:3000/assets/img/testimonial/testi-2.jpg',
    //     },
    //     {
    //         name: 'Binod Patel',
    //         event: 'Added a comment 15 min ago',
    //         thumb: 'http://localhost:3000/assets/img/testimonial/testi-3.jpg',
    //     },
    //     {
    //         name: 'Mathew Das',
    //         event: 'Purchased 22 min ago',
    //         thumb: 'http://localhost:3000/assets/img/testimonial/testi-4.jpg',
    //     },
    //     {
    //         name: 'Jane Smith',
    //         event: 'Added a comment 25 min ago',
    //         thumb: 'http://localhost:3000/assets/img/testimonial/testi-2.jpg',
    //     },
    //     {
    //         name: 'Bob Johnson',
    //         event: 'Added a comment 40 min ago',
    //         thumb: 'http://localhost:3000/assets/img/testimonial/testi-3.jpg',
    //     },
    //     {
    //         name: 'John Doe',
    //         event: 'Purchased 42 min ago',
    //         thumb: 'http://localhost:3000/assets/img/testimonial/testi-1.jpg',
    //     },
    //     {
    //         name: 'Jane Smith',
    //         event: 'Added a comment 1 hr ago',
    //         thumb: 'http://localhost:3000/assets/img/testimonial/testi-2.jpg',
    //     },
    //     {
    //         name: 'Bob Johnson',
    //         event: 'Added a comment 3 hr ago',
    //         thumb: 'http://localhost:3000/assets/img/testimonial/testi-3.jpg',
    //     },
    // ];

    // useEffect(() => {
    //     getInfoList();
    //     getCatList();
    // }, []);

    // const getInfoList = () => {
    //     // console.log('---XXXX--->>call start 11');
    //     Apiconnect.getData('product/getAll?limit=3').then((response) => {
    //         // console.log(response);
    //         let _xtract = Apiconnect.decrypt_obj(response.data.data);
    //         setList([..._xtract, ..._xtract, ..._xtract]);
    //     });
    // };

    // const getCatList = () => {
    //     Apiconnect.getData('cat/getAll').then((response) => {
    //         let _xtract = Apiconnect.decrypt_obj(response.data.data);
    //         setCatList(_xtract);
    //     });
    // };

    return (
        <div className='px-5'>

            <Banner />
            <div className="bg-whop-hover flex items-center justify-center gap-16 p-8 [content-visibility:auto] lg:gap-32">
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex items-center justify-center gap-2 text-3xl text-whop-black font-medium" aria-label="$ 269,342,652">
                        $ <CountUp start={0} end={123456789} duration={3} />
                        <div className="relative h-[14px] w-[14px]">
                            <div className="bg-whop-field-highlight/30 absolute h-[14px] w-[14px] animate-ping rounded-full"></div>
                            <div className="bg-whop-field-highlight/30 absolute h-[14px] w-[14px] animate-pulse rounded-full"></div>
                            <div className="bg-whop-field-highlight absolute left-[3px] top-[3px] h-2 w-2 rounded-full"></div>
                        </div>
                    </div>
                    <span className="text-base text-whop-gray">Total Purchased on Whop</span>
                </div>
                <div className="flex-col items-center justify-center gap-2 hidden sm:block">
                    <div className="flex items-center justify-center gap-2 text-3xl text-whop-black font-medium" aria-label=" 5,118,768">
                        <CountUp start={0} end={456789} duration={3} />
                        <div className="relative h-[14px] w-[14px]">
                            <div className="bg-whop-field-highlight/30 absolute h-[14px] w-[14px] animate-ping rounded-full"></div>
                            <div className="bg-whop-field-highlight/30 absolute h-[14px] w-[14px] animate-pulse rounded-full"></div>
                            <div className="bg-whop-field-highlight absolute left-[3px] top-[3px] h-2 w-2 rounded-full"></div>
                        </div>
                    </div>
                    <span className="text-base text-whop-gray">Total Memberships Sold</span>
                </div>
                <div className="flex-col items-center justify-center gap-2 hidden md:block">
                    <div className="flex items-center justify-center gap-2 text-3xl text-whop-black font-medium" aria-label=" 10,213">
                        <CountUp start={0} end={6789} duration={3} />
                        <div className="relative h-[14px] w-[14px]">
                            <div className="bg-whop-field-highlight/30 absolute h-[14px] w-[14px] animate-ping rounded-full"></div>
                            <div className="bg-whop-field-highlight/30 absolute h-[14px] w-[14px] animate-pulse rounded-full"></div>
                            <div className="bg-whop-field-highlight absolute left-[3px] top-[3px] h-2 w-2 rounded-full"></div>
                        </div>
                    </div>
                    <span className="text-base text-whop-gray">Total Available Products</span>
                </div>
            </div>

            <TrendingProducts />
            <Categories />

            <NewlyAddedProducts />
            <TopCharts />
            <FreeTrialProducts />
            <RecentReviews />
            <WhopPicksProducts />
            <DiscoverWhy />

            <CustomerSupport />

            <MakeMoneyAsAffiliate />
            <WhopBlog />

            <Faq />
            <SellOnWhop />
        </div>
    );
};

export default Home;
