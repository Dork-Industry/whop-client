import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <div className="bg-shape newbgmin" style={{ backgroundImage: 'url(/assets/bgmg.jpg)' }}>
                <img src="/assets/img/shape/shape-1.png" alt="" />
            </div>

            <section className="about__area pt-100 ">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1">
                            <div className="about__wrapper mt-80">
                                <span className="about__sub-title">About US</span>
                                <h3 className="about__title">
                                    We're WHOPCART <br /> The Only marketplace like no other.
                                </h3>
                                <div className="about__thumb w-img wow fadeInUp" data-wow-delay=".3s">
                                    <img src="assets/img/about/about-1.jpg?v-99" alt="" />
                                </div>
                                <div className="about__count pt-50 pb-15 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="row">
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <div className="about__count-item text-center launche mb-30">
                                                <p>LAUNCHED IN</p>
                                                <h4>
                                                    <span className="counter">2009</span>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <div className="about__count-item text-center community mb-30">
                                                <p>COMMUNITY OF</p>
                                                <h4>
                                                    <span className="counter">13,000</span>+
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                            <div className="about__count-item text-center mission mb-30">
                                                <p>Items SOld</p>
                                                <h4>
                                                    <span className="counter">48K</span>+
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="about__content">
                                    <p className="about__text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt
                                        ultricies dignissim. Phasellus sit amet purus condimentum.
                                    </p>
                                    <p className="about__sub-text">
                                        Suscipit felis non, posuere mauris. Morbi iaculis, arcu quis varius fermentum,
                                        velit lectus dignissim enim, eget vulputate sapien erat eget mauris. Aenean
                                        tortor odio, faucibus a enim sed, porttitor luctus lacus. Interdum et malesuada
                                        fames ac ante ipsum primis in faucibus. Pellentesque metus risus, gravida
                                        consequat elementum non, euismod eget turpis. Proin vulputate ligula nec nibh
                                        finibus pretium et sit amet enim. Vestibulum accumsan arcu erat, nec feugiat
                                        ligula pretium non. Aenean sit amet ultricies diam, vel semper enim. Morbi
                                        aliquet est ut metus feugiat, a suscipit nulla luctus. Nulla consectetur
                                        consectetur tincidunt.
                                        <br />
                                        <br />
                                        Sed varius vel lacus a placerat. Praesent congue finibus arcu, nec elementum
                                        odio rhoncus in. Mauris finibus nibh sit amet pulvinar malesuada. Suspendisse
                                        semper enim urna, id aliquam justo viverra nec. Nunc ac lorem vitae nulla dictum
                                        tempus. Cras faucibus mi erat, non semper ipsum condimentum ut. In sapien odio,
                                        finibus sit amet metus eget, pharetra condimentum turpis. Nullam quis ultrices
                                        elit, vel porta nunc. Aliquam erat volutpat. Donec fermentum posuere arcu non
                                        aliquet. Nam vulputate urna et rutrum volutpat. Curabitur ut imperdiet mi, in
                                        congue erat. Sed et risus ipsum. Vestibulum quis enim ac metus pellentesque
                                        ultricies. Duis a euismod lorem. Duis luctus leo pretium, imperdiet erat et,
                                        pulvinar purus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta__area pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 offset-xxl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <div className="section__title-wrapper text-center mb-45 wow fadeInUp" data-wow-delay=".3s">
                                <h2 className="section__title">Join The Community</h2>
                                <p>Explore to the odia calture and feel like home! Away from home!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6 offset-xxl-3">
                            <div className="cta__content text-center wow fadeInUp" data-wow-delay=".5s">
                                <Link to={"/pricing.html"} className="m-btn m-btn-border-2 cta__btn active">
                                    {' '}
                                    <span></span> Join the Community
                                </Link>
                                <Link to={"/pricing.html"} className="m-btn m-btn-border-2 cta__btn">
                                    {' '}
                                    <span></span> Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
