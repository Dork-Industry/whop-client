import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Apiconnect from '../services/Apiconnect.js';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate();
    const param = useParams();
    const [infoz, setInfoz] = useState({
        user_name: '',
        user_mname: '',
        user_lname: '',
        thumbnail: '',
        user_email: '',
        user_password: '',
        phone: '',
    });

    const { user_name, user_mname, user_lname, thumbnail, user_email, user_password, phone } = infoz;

    const onInputChange = (e) => {
        setInfoz({ ...infoz, [e.target.name]: e.target.value });
        console.log(infoz);
    };

    const handleKeyPress = (event) => {
        if (!/^[0-9]$/i.test(event.key)) {
            event.preventDefault();
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        await Apiconnect.postData('users/createuser', infoz).then((response) => {
            console.log(response);
            setInfoz({
                user_name: '',
                user_mname: '',
                user_lname: '',
                thumbnail: '',
                user_email: '',
                phone: '',
                business_name: '',
                user_password: '',
            });
            toast(response.data.message);
            navigate('/srthanks');
        });
    };

    return (
        <>
            <div className="bg-shape">
                <img src="/assets/img/shape/shape-1.png" alt="" />
            </div>

            <section className="signup__area po-rel-z1 pt-100 pb-145">
                <div className="sign__shape">
                    <img className="man-1" src="assets/img/icon/sign/man-3.png" alt="" />
                    <img className="man-2 man-22" src="assets/img/icon/sign/man-2.png" alt="" />
                    <img className="circle" src="assets/img/icon/sign/circle.png" alt="" />
                    <img className="zigzag" src="assets/img/icon/sign/zigzag.png" alt="" />
                    <img className="dot" src="assets/img/icon/sign/dot.png" alt="" />
                    <img className="bg" src="assets/img/icon/sign/sign-up.png" alt="" />
                    <img className="flower" src="assets/img/icon/sign/flower.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                            <div className="page__title-wrapper text-center mb-55">
                                <h2 className="page__title-2">Create Your free Account</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
                            <div className="sign__wrapper white-bg">
                                <div className="sign__form">
                                    <form onSubmit={(e) => onSubmit(e)}>
                                        <div className="row">
                                            <div className="sign__input-wrapper mb-25 col-md-6">
                                                <h5>First Name</h5>
                                                <div className="sign__input">
                                                    <input
                                                        type="text"
                                                        placeholder="First name"
                                                        name="user_name"
                                                        value={user_name}
                                                        onChange={(e) => onInputChange(e)}
                                                    />
                                                    <i className="fal fa-user"></i>
                                                </div>
                                            </div>

                                            <div className="sign__input-wrapper mb-25 col-md-6">
                                                <h5>Last Name</h5>
                                                <div className="sign__input">
                                                    <input
                                                        type="text"
                                                        placeholder="Last name"
                                                        name="user_lname"
                                                        value={user_lname}
                                                        onChange={(e) => onInputChange(e)}
                                                    />
                                                    <i className="fal fa-user"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sign__input-wrapper mb-25">
                                            <h5>Email</h5>
                                            <div className="sign__input">
                                                <input
                                                    type="text"
                                                    placeholder="e-mail address"
                                                    name="user_email"
                                                    value={user_email}
                                                    onChange={(e) => onInputChange(e)}
                                                />
                                                <i className="fal fa-envelope"></i>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="sign__input-wrapper mb-25 col-md-6">
                                                <h5>Password</h5>
                                                <div className="sign__input">
                                                    <input
                                                        type="password"
                                                        placeholder="Password"
                                                        name="user_password"
                                                        value={user_password}
                                                        onChange={(e) => onInputChange(e)}
                                                    />
                                                    <i className="fal fa-lock"></i>
                                                </div>
                                            </div>
                                            <div className="sign__input-wrapper mb-10 col-md-6">
                                                <h5>Re-Password</h5>
                                                <div className="sign__input">
                                                    <input
                                                        type="password"
                                                        placeholder="Re-Password"
                                                        name="user_password2"
                                                    />
                                                    <i className="fal fa-lock"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sign__action d-flex justify-content-between mb-30">
                                            <div className="sign__agree d-flex align-items-center">
                                                <input className="m-check-input" type="checkbox" id="m-agree" />
                                                <label className="m-check-label" for="m-agree">
                                                    I agree to the <a href="/">Terms & Conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" className="m-btn m-btn-4 w-100">
                                            {' '}
                                            <span></span> Sign Up
                                        </button>
                                        <div className="sign__new text-center mt-20">
                                            <p>
                                                Already a user ? <a href="/login"> Sign In</a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
