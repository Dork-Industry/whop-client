import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const P404 = () => {
    return (
        <>
            <div className="bg-shape newbgmin" style={{ backgroundImage: 'url(/assets/bgmg.jpg)' }}>
                <img src="/assets/img/shape/shape-1.png" alt="" />
            </div>

            <section className="about__area pt-100 ">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1">
                            <div className="about__wrapper  ">
                                <h1> Congrats! </h1>
                                <p>Your registration with us is complete! </p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />

                                <div className="about__content"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default P404;
