import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

import Apiconnect from '../../services/Apiconnect.js';
import { useData } from '../../Context/Pagecontxt.js';

const Header = ({basic}) => {
    const { cartItmCount } = useData();

    const user_typ = localStorage.getItem('user_typ');
    const [utyp, setUtyp] = useState('');
    const [utyplink, setUtyplink] = useState('');
    const [CatList, setCatList] = useState([]);

    useEffect(() => {
        setUtyp(user_typ);
        getCatList();
    }, []);

    const getCatList = () => {
        Apiconnect.getData('cat/getAll').then((response) => {
            console.log("response", response)
            let _xtract = Apiconnect.decrypt_obj(response.data.data);
            setCatList(_xtract);
        });
    };

    return (
        <>
            {/* <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>

            <header>
                <div className="header__area header__shadow  white-bg" id="header-sticky">
                    <div
                        style={{ borderBottom: '1px solid #ccc', paddingBottom: 10, paddingTop: 10 }}
                        className="padded-container"
                    >
                        <div className="row align-items-center gap-8 py-3.5">
                            <div className="col-md-1">
                                <div className="logo">
                                    <a href="/">
                                        <img src="/assets/img/logo/logo.png" alt="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="input-group">
                                    <input
                                        id="email"
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        placeholder="search"
                                    />
                                    <span style={{ backgroundColor: '#5f3afc' }} className="btn btn-primary">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="header__action d-flex align-items-center justify-content-end">
                                    <div className="main-menu" style={{ float: 'left', marginRight: 20 }}>
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li>
                                                    <a href="/">Become Affiliate</a>
                                                </li>
                                                <li>
                                                    <a href="/seller_register">Start Selling</a>
                                                </li>
                                                <li>
                                                    <a href="/blog">Blog</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>

                                    <div className="header__login d-none d-sm-block">
                                        {utyp === 'User' ? (
                                            <a href="/users/">
                                                <i className="far fa-unlock"></i>User Dashboard
                                            </a>
                                        ) : utyp === 'Seller' ? (
                                            <a href="/seller/">
                                                <i className="far fa-unlock"></i>Seller Dashboard
                                            </a>
                                        ) : utyp === 'Admin' ? (
                                            <a href="/admin/">
                                                <i className="far fa-unlock"></i>Admin Dashboard
                                            </a>
                                        ) : (
                                            <a href="/login/">
                                                <i className="far fa-unlock"></i>Login
                                            </a>
                                        )}
                                    </div>
                                    <div className="header__cart d-none d-sm-block">
                                        {/* <a href="/cart" className="cart-toggle-btn">
                                            <i className="far fa-shopping-cart"></i>
                                            <span>{cartItmCount}</span>
                                        </a> */}

            {/* <a
                                            href="/register"
                                            style={{ fontSize: 13, borderRadius: 6, padding: 6, fontWeight: 'bold' }}
                                            className="btn btn-sm btn-warning"
                                        >
                                            Signup
                                        </a>
                                    </div>
                                    <div className="sidebar__menu d-lg-none">
                                        <div className="sidebar-toggle-btn" id="sidebar-toggle">
                                            <span className="line"></span>
                                            <span className="line"></span>
                                            <span className="line"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 d-none d-lg-block">
                                <div className="main-menu lx">
                                    <nav id="mobile-menu ">
                                        <ul>
                                            {CatList.map((valz, keyz) => {
                                                return (
                                                    <li>
                                                        <a href={'/category/' + valz.url}>{valz.name}</a>
                                                    </li>
                                                );
                                            })}

                                            <li>
                                                <a href="/about">About</a>
                                            </li>

                                            <li>
                                                <a href="/contact">Contact</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header> */}
            <div className="h-[115px] ">
                <div className="border-whop-stroke fixed left-0 right-0 top-0 z-40 border-0 border-b border-solid bg-white shadow-md transition duration-300 sm:translate-y-0">
                    <div className="hidden sm:block border-b">
                        <div className="padded-container px-10">
                            <div className="flex items-center justify-between gap-8 py-3.5">
                                <div className="r flex flex-1 items-center gap-8">
                                    <a href="/"><img alt="Whop" draggable="false" loading="lazy" width="137" height="28" decoding="async" data-nimg="1" className="pointer-events-none" src="/assets/img/logo/whop.svg" /></a>
                                    { !basic &&  <div className="hidden flex-1 sm:block ">
                                        <div className="border-whop-stroke relative flex w-full max-w-[500px] items-stretch rounded-md border border-solid outline-2 transition " data-headlessui-state="">
                                            <input placeholder="Search 'investing tools'" className="text2 placeholder:text-whop-gray flex-1 rounded-l-md border-r px-3 py-[11px] outline-none" id="headlessui-combobox-input-:R6ibfcqlfala:" role="combobox" type="text" aria-expanded="false" aria-autocomplete="list" data-headlessui-state="" />
                                            <button className="border-whop-stroke text-whop-darkGray hover:bg-whop-hover active:bg-whop-hoverPress flex items-center rounded-r-md  border-0  border-l   bg-white px-6 transition">
                                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="magnifying-glass" className="inline-block overflow-visible h-4 fa-magnifying-glass " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor" d="M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>}
                                </div>
                                <div className="flex items-center gap-6 font-semibold">
                                  {!basic && <>
                                    <a className="text-button4 font-semibold text-whop-darkGray hidden whitespace-nowrap lg:block" href="/affiliate">Become an Affiliate</a>
                                    <a href="/seller_register" className="text-button4 text-whop-darkGray hidden whitespace-nowrap lg:block">Start Selling</a>
                                    <a className="text-button4 text-whop-darkGray hidden whitespace-nowrap lg:block" target="_blank" href="/blog">Blog</a>
                                 
                                    </>
                                    } 
                                    <div className="text-button4 text-whop-darkGray hidden cursor-pointer whitespace-nowrap sm:block" id="nav-sign-in">{utyp === 'User' ? (
                                        <a href="/users/">
                                            <i className=""></i>User Dashboard
                                        </a>
                                    ) : utyp === 'Seller' ? (
                                        <a href="/seller/">
                                            <i className=""></i>Seller Dashboard
                                        </a>
                                    ) : utyp === 'Admin' ? (
                                        <a href="/admin/">
                                            <i className=""></i>Admin Dashboard
                                        </a>
                                    ) : (
                                        <a href="/login" className='text-whop-darkGray'>
                                            <i className=""></i>Sign in
                                        </a>
                                    )}</div>
                                    <a href='/register' className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-fieldHighlight focus-visible:ring-whop-fieldHighlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring whitespace-nowrap bg-whop-primary text-whop-fixedWhite text-button4 h-10 px-[15px]">
                                        <div className="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
                                        <div className="z-10 flex items-center justify-center">
                                            <div className="">Sign up</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:hidden ">
                        <div>
                            <div className="padded-container items-center justify-between py-4 flex">
                                <a href="/"><img alt="Whop" draggable="false" loading="lazy" width="137" height="28" decoding="async" data-nimg="1" className="pointer-events-none " src="/assets/img/logo/whop.svg" /></a>
                                <div className="flex flex-nowrap w-fit items-center gap-4 ">
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="magnifying-glass" className="w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"></path>
                                    </svg>
                                    <div className="text-button3 text-nowrap  text-whop-primary cursor-pointer">Sign in</div>
                                </div>
                            </div>
                            <div className=" overflow-hidden h-0">
                                <div className="border-whop-stroke flex items-center gap-3 border-0 border-b border-solid p-4">
                                    <div className="bg-whop-hover flex flex-1 items-center gap-2 rounded-md border-none pl-2.5 ">
                                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="magnifying-glass" className="svg-inline--fa fa-magnifying-glass text-whop-darkGray" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"></path>
                                        </svg>
                                        <input className="placeholder:text-whop-gray flex-1 border-none bg-transparent py-2.5 pr-2 text-[18px] outline-none" placeholder="Search Whop" type="search" autocomplete="off" value="" />
                                    </div>
                                    <div className="text2 select-none">Cancel</div>
                                </div>
                            </div>
                        </div>
                    </div>
                { !basic &&   <div className="border-whop-stroke border-0 border-solid sm:border-t">
                        <div className="padded-container px-10 flex gap-8 overflow-x-auto">
                            {CatList?.map((valz, keyz) => {
                                return (

                                    <a key={keyz} className="subtitle3 text-sm font-medium   hover:text-whop-offBlack whitespace-nowrap py-3.5 transition text-whop-offBlack border-whop-offBlack border-b-[3px] pb-[11px]" href={'/category/' + valz.url}>{valz.name}</a>

                                );
                            })}
                        </div>
                    </div>}
                </div>
            </div>
        </>
    );
};

export default Header;
