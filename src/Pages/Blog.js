import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <>
            <div className="bg-shape newbgmin" style={{ backgroundImage: 'url(/assets/bgmg.jpg)' }}>
                <img src="/assets/img/shape/shape-1.png" alt="" />
            </div>

            <section className="page__title-area   ">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="page__title-content mb-50">
                                <h2 className="page__title">Latest From The Blog</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to={"/"}>Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Blog
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="postbox__area pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="postbox__wrapper">
                                <article className="postbox__item format-image fix mb-50 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="postbox__thumb">
                                        <Link to={"/blog-details.html"} className="w-img">
                                            <img src="assets/img/blog/blog-1.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="postbox__content">
                                        <div className="postbox__meta d-flex mb-10">
                                            <div className="postbox__tag mr-20">
                                                <Link to={"#"}>marketing</Link>
                                            </div>
                                            <div className="postbox__date">
                                                <span>
                                                    <i className="fal fa-clock"></i> October 15, 2023
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="postbox__title mb-15">
                                            <Link to="blog-details.html">Why we decide to build this platform?</Link>
                                        </h3>
                                        <div className="postbox__text mb-20">
                                            <p>
                                                The little rotter absolutely bladdered wind up victoria sponge starkers
                                                cack posh jolly good lost the plot nancy boy bonnet plastered.
                                            </p>
                                        </div>
                                        <div className="postbox__author d-flex align-items-center">
                                            <div className="postbox__author-thumb mr-15">
                                                <img src="assets/img/blog/author/blog-author-1.jpg" alt="" />
                                            </div>
                                            <h5>
                                                Post by <Link to={"#"}>Jatin Das</Link>{' '}
                                            </h5>
                                        </div>
                                    </div>
                                </article>

                                <article className="postbox__item format-image fix mb-50 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="postbox__thumb">
                                        <Link to={"blog-details.html"} className="w-img">
                                            <img src="assets/img/blog/blog-1.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="postbox__content">
                                        <div className="postbox__meta d-flex mb-10">
                                            <div className="postbox__tag mr-20">
                                                <Link to={"#"}>marketing</Link>
                                            </div>
                                            <div className="postbox__date">
                                                <span>
                                                    <i className="fal fa-clock"></i> October 15, 2023
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="postbox__title mb-15">
                                            <Link to={"blog-details.html"}>Why we decide to build this platform?</Link>
                                        </h3>
                                        <div className="postbox__text mb-20">
                                            <p>
                                                The little rotter absolutely bladdered wind up victoria sponge starkers
                                                cack posh jolly good lost the plot nancy boy bonnet plastered.
                                            </p>
                                        </div>
                                        <div className="postbox__author d-flex align-items-center">
                                            <div className="postbox__author-thumb mr-15">
                                                <img src="assets/img/blog/author/blog-author-1.jpg" alt="" />
                                            </div>
                                            <h5>
                                                Post by <Link to={"#"}>Jatin Das</Link>{' '}
                                            </h5>
                                        </div>
                                    </div>
                                </article>

                                <article className="postbox__item format-image fix mb-50 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="postbox__thumb">
                                        <Link to={"blog-details.html"} className="w-img">
                                            <img src="assets/img/blog/blog-1.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="postbox__content">
                                        <div className="postbox__meta d-flex mb-10">
                                            <div className="postbox__tag mr-20">
                                                <Link to={"#"}>marketing</Link>
                                            </div>
                                            <div className="postbox__date">
                                                <span>
                                                    <i className="fal fa-clock"></i> October 15, 2023
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="postbox__title mb-15">
                                            <Link to={"blog-details.html"}>Why we decide to build this platform?</Link>
                                        </h3>
                                        <div className="postbox__text mb-20">
                                            <p>
                                                The little rotter absolutely bladdered wind up victoria sponge starkers
                                                cack posh jolly good lost the plot nancy boy bonnet plastered.
                                            </p>
                                        </div>
                                        <div className="postbox__author d-flex align-items-center">
                                            <div className="postbox__author-thumb mr-15">
                                                <img src="assets/img/blog/author/blog-author-1.jpg" alt="" />
                                            </div>
                                            <h5>
                                                Post by <Link to={"#"}>Jatin Das</Link>{' '}
                                            </h5>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="mt-200 pt-100 col-xxl-4 col-xl-4 col-lg-4">
                            <div className="blog__sidebar-wrapper  ml-30">
                                <div className="blog__sidebar mb-30">
                                    <div className="sidebar__widget mb-30">
                                        <div className="sidebar__widget-content">
                                            <div className="sidebar__search-wrapper">
                                                <form action="#">
                                                    <input type="text" placeholder="Search ..." />
                                                    <button type="submit">
                                                        <i className="fal fa-search"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar__widget mb-30">
                                        <div className="sidebar__widget-title">
                                            <h3>Recent News</h3>
                                        </div>
                                        <div className="sidebar__widget-content">
                                            <div className="rc__post-wrapper">
                                                <div className="rc__post d-flex align-items-center">
                                                    <div className="rc__thumb mr-15">
                                                        <Link to={"blog-details.html"}>
                                                            <img src="assets/img/blog/sm/blog-sm-1.jpg" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="rc__content">
                                                        <div className="rc__meta">
                                                            <span>October 15, 2021</span>
                                                        </div>
                                                        <h6 className="rc__title">
                                                            <Link to={"blog-details.html"}>Communication Between Teams</Link>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="rc__post d-flex align-items-center">
                                                    <div className="rc__thumb mr-15">
                                                        <Link to={"blog-details.html"}>
                                                            <img src="assets/img/blog/sm/blog-sm-2.jpg" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="rc__content">
                                                        <div className="rc__meta">
                                                            <span>March 26, 2021</span>
                                                        </div>
                                                        <h6 className="rc__title">
                                                            <Link to={"blog-details.html"}>How to build outside links</Link>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="rc__post d-flex align-items-center">
                                                    <div className="rc__thumb mr-15">
                                                        <Link to={"blog-details.html"}>
                                                            <img src="assets/img/blog/sm/blog-sm-3.jpg" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="rc__content">
                                                        <div className="rc__meta">
                                                            <span>October 15, 2021</span>
                                                        </div>
                                                        <h6 className="rc__title">
                                                            <Link to={"blog-details.html"}>
                                                                20 creative ways to decorate puja pandel
                                                            </Link>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar__widget mb-30">
                                        <div className="sidebar__widget-title">
                                            <h3>Categories</h3>
                                        </div>
                                        <div className="sidebar__widget-content">
                                            <div className="sidebar__catagory">
                                                <ul>
                                                    <li>
                                                        <Link to={"/blog"}>Social (6)</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/blog"}> Creative (14)</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/blog"}>Odia Literature (12)</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/blog"}>Innovative Ideas (10)</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
