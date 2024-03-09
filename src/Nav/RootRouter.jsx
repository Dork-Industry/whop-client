import React from 'react';
//import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Sregister from '../Pages/Sregister';
import Srthanks from '../Pages/Srthanks';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Tos from '../Pages/Tos.jsx';
import Privacy from '../Pages/Privacy';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';
import Category from '../Pages/Category';
import Size from '../Pages/Size';
import Product from '../Pages/Product';
import Cart from '../Pages/Cart';
import Trancomplete from '../Pages/Trancomplete';

import P404 from '../Pages/P404';
import Header from '../Pages/inc/Header';
import Footer from '../Pages/inc/Footer';
import Footer2 from '../Pages/inc/Footer2';
import SellerHeader from '../Components/SellerHeader';
import MainLayout from '../Components/Layout/MainLayout';
import SellerLayout from '../Components/Layout/SellerLayout';
import ProductCategory from '../Pages/inc/ProductCategory';
import TosLayout from '../Components/Layout/TosLayout.jsx';
import Affiliates from '../Pages/Affiliates.jsx';
import CustomerAffiliates from '../Pages/CustomerAffiliates.jsx';
import MyReferrals from '../Pages/MyReferrals.jsx';

export default function RootRouter() {
    return (
        <>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />

                <Route element={<TosLayout />}>
                    <Route exact path="/tos" element={<Tos />} />
                    <Route exact path="/privacy" element={<Privacy />} />
                </Route>

                <Route element={<MainLayout />}>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/index" element={<Home />}></Route>
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/privacy" element={<Privacy />} />
                    <Route exact path="/blog" element={<Blog />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/category" element={<ProductCategory />} />
                    <Route exact path="/size" element={<Size />} />
                    <Route exact path="/category/:slug" element={<ProductCategory />} />
                    <Route exact path="/product" element={<Product />} />
                    <Route exact path="/product/:id" element={<Product />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/trancomplete" element={<Trancomplete />} />
                    <Route exact path="/affiliate" element={<Affiliates />} />
                    <Route exact path="/affiliate/customer" element={<CustomerAffiliates />} />
                    <Route exact path="/affiliate/customer/my-referrals" element={<MyReferrals />} />


                    <Route exact path="/Srthanks" element={<Srthanks />} />

                    <Route exact path="/*" element={<P404 />} />
                </Route>
                <Route element={<SellerLayout />}>
                    <Route exact path="/seller_register" element={<Sregister />} />
                </Route>
            </Routes>
            {/* <Helmet>
                    <script src="/assets/js/backToTop.js"></script>  
                  </Helmet> */}

        </>
    );
}
