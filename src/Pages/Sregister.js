import React, { useEffect, useRef, useState } from "react";
import api from "../services/Apiconnect";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Sregister = () => {
   const CLIENT_ID =  "354200840303-36evdck26rcpu7jetaqhbft7amo7sjgc.apps.googleusercontent.com";
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [getOTP, setGetOTP] = useState(false)
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const otpBoxReference = useRef([]);

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

    // const onInputChange = (e) => {
    //     setInfoz({ ...infoz, [e.target.name]: e.target.value });
    //     console.log(infoz);
    // };

    const verifysignupotp = () => {
        const finalotp = otp.join("");
        var indata = {
            email: email,
            otp: finalotp,
        };
        api.postData('users/verifysignupotp', indata).then((response) => {
            var resz = response.data;
            if (response.data.status === 1) {
                // localStorage.setItem('token', resz.accessToken);
                // localStorage.setItem('user_typ', resz.user_typ);
                // localStorage.setItem('user_id', resz.id);

                // login(1);
                // Reset form fields
                // setEmail('');
                // setPassword('');

                // if (resz.user_typ === 'Admin') {
                //     navigate('/admin/dashboard');
                // } else if (resz.user_typ === 'User') {
                //     navigate('/users/dashboard');
                // } else if (resz.user_typ === 'Seller') {
                //     navigate('/seller/dashboard');
                // }
                navigate('/login');
            } else {
                alert(response.data.message);
            }
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        var indata = {
            user_email: email,
        };

        await api.postData('users/createseller', indata).then((response) => {
            // console.log(response);
            // setInfoz({
            //     user_name: '',
            //     user_mname: '',
            //     user_lname: '',
            //     thumbnail: '',
            //     user_email: '',
            //     phone: '',
            //     business_name: '',
            //     user_password: '',
            // });
            // toast(response.data.message);
            // navigate('/srthanks');
            var resz = response.data;
            if (resz.status === "OK") {
                setGetOTP(true);
            }
        });
    };

    const auth = async(credentialResponse) =>{
        var obj = jwtDecode(credentialResponse.credential);
        
        var indata = {
            user_email: obj.email,
            loginType : 'google'
        };


        api.postDataNoauth('users/createseller', indata).then((response) => {
            var resz = response.data;
            var resz = response.data;
            if (resz.status === 1) {
                navigate('/login');
            }
        });
    }

    const handleChange = (value, index) => {
        let newArr = [...otp];
        newArr[index] = value;
        setOtp(newArr);
        if (value && index < 5) {
            otpBoxReference.current[index + 1].focus()
        }
    }

    const handleBackspaceAndEnter = (e, index) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            otpBoxReference.current[index - 1].focus()
        }
        if (e.key === "Enter" && e.target.value && index < 5) {
            otpBoxReference.current[index + 1].focus()
        }
    }

    useEffect(() => {
        if (otp.join("").length === 6) {
            verifysignupotp();
        }
    }, [otp])

    return (
        <>
            <div className="relative flex min-h-screen flex-col overflow-y-auto overflow-x-hidden bg-white sm:items-center sm:justify-center">
                <img alt="OAuth Page Background" loading="lazy" decoding="async" data-nimg="fill" className="hidden bg-center object-cover sm:block absolute h-full w-full top-0 right-0 left-0 bottom-0 text-transparent" src="/assets/img/bg/bg.svg" />
                <div className="border-whop-stroke z-10 mb-5 flex min-h-[160px] w-full flex-col bg-white sm:max-w-[420px] sm:rounded-[10px] sm:border sm:shadow-lg">
                    <img alt="Whop Circle Square" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" className="mt-12 self-center text-transparent" src='/assets/img/logo/whop-logo-square.webp' />
                    {getOTP ? (<>
                        <div className="flex flex-col items-center px-6">
                            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="hand-wave" className="svg-inline--fa fa-hand-wave mt-10 text-[48px] leading-[48px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="48" width="48">
                                <path fill="currentColor" d="M354.3 95.8c8.7-1.2 14.8-9.4 13.6-18.1l-1.2-8.5c-5-35.2-32.7-62.9-67.9-67.9L290.3 .2c-8.7-1.2-16.9 4.8-18.1 13.6s4.8 16.9 13.6 18.1l8.5 1.2c21.1 3 37.7 19.6 40.7 40.7l1.2 8.5c1.3 8.7 9.4 14.8 18.1 13.6zM13.7 368.2C5 369.4-1.1 377.5 .2 386.3l1.2 8.5c5 35.2 32.7 62.9 67.9 67.9l8.5 1.2c8.7 1.2 16.9-4.8 18.1-13.6s-4.8-16.9-13.6-18.1L73.8 431c-21.1-3-37.7-19.6-40.7-40.7l-1.2-8.5c-1.2-8.7-9.4-14.8-18.1-13.6zM150.4 62.4c-21-10.8-47.5-7.3-65.1 10.3s-21 44.1-10.3 65.1c-8.7 2.6-16.8 7.3-23.7 14.1c-21.9 21.9-21.9 57.3 0 79.2l9.5 9.5c-7.6 2.7-14.8 7.1-20.9 13.2c-21.8 21.8-21.9 57.2-.2 79.1L162.9 457.1c34.8 35.1 82.2 54.9 131.7 54.9C397 512 480 429 480 326.6l0-13.8 0 0 0-.7 0 0L480 152c0-30.9-25.1-56-56-56s-56 25.1-56 56l0 11L243.7 38.7c-21.9-21.9-57.3-21.9-79.2 0c-6.8 6.8-11.5 15-14.1 23.7zM108 95.3c9.4-9.4 24.6-9.4 33.9 0l8.8 8.8 .1 .1L288 241.4c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L187.1 95.3l-.1-.1c-9.3-9.4-9.3-24.5 .1-33.9c9.4-9.4 24.6-9.4 33.9 0L372.7 212.9c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8l0-49.6c0-13.3 10.7-24 24-24s24 10.7 24 24l0 160 0 0 0 .7 0 0 0 13.8C448 411.3 379.3 480 294.6 480c-40.9 0-80.1-16.4-109-45.4L62.6 310.3c-9.3-9.4-9.3-24.6 .1-34c9.4-9.4 24.7-9.4 34.1 0l36 36 .1 .1 42.1 42.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-42.2-42.2L105.6 240l-.1-.1L74 208.4c-9.4-9.4-9.4-24.6 0-33.9c9.3-9.3 24.4-9.4 33.8-.1L231.4 297.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-46.5-46.5-.1-.1L108 129.2c-9.4-9.4-9.4-24.6 0-33.9z"></path>
                            </svg>
                            <div className="display2 mt-6 text-center">
                                Welcome back!
                            </div>
                            <div className="paragraph2 text-whop-dark-gray mt-2 text-center">
                                Verify it is you by entering the code sent to
                                <span className="font-bold">
                                    {' '}{email}
                                </span>
                            </div>
                            <div className="my-6">
                                <div className="max-w-sm">
                                    <div className="relative inline-flex gap-2">

                                        {otp.map((digit, index) => (
                                            <div className="h-fit w-full">
                                                <div className="relative flex items-center w-full">
                                                    <input key={index} value={digit} maxLength={1}
                                                        onChange={(e) => handleChange(e.target.value, index)}
                                                        onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
                                                        ref={(reference) => (otpBoxReference.current[index] = reference)}
                                                        className={`border h-auto w-full text-center p-3 rounded-md block  focus:border-2 focus:outline-none appearance-none`}
                                                    />
                                                </div>
                                            </div>

                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1">
                                <a href="/oauth/login/?redirect=%2Foauth%2F%3Fscope%3Dopenid%2Buser%26response_type%3Dcode%26client_id%3D15M13-Azn263tjnKPhVtnm-Kc4lNA37IWm-ZeepdIzU%26redirect_uri%3Dhttps%3A%252F%252Fwhop.com%252Fapi%252Fauth%252Fcallback%252Fwhop%26action%3Dlogin%26state%3DeyJyYW5kb20iOiJhbTU2UWRaTi1fM1RhNTdEZU00MUdRNzg3dl9SR1Jyb3NtMVQyS3ZtaUlRIn0%26nextauth%3Dsignin%252Fwhop">
                                    <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring self-center bg-whop-white text-whop-dark-gray text-button4 h-10 px-[15px]">
                                        <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                                        <div className="z-10 flex items-center justify-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-left" className="svg-inline--fa fa-arrow-left fa-fw mr-[7px] text-[16px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path fill="currentColor" d="M7.4 273.4C2.7 268.8 0 262.6 0 256s2.7-12.8 7.4-17.4l176-168c9.6-9.2 24.8-8.8 33.9 .8s8.8 24.8-.8 33.9L83.9 232 424 232c13.3 0 24 10.7 24 24s-10.7 24-24 24L83.9 280 216.6 406.6c9.6 9.2 9.9 24.3 .8 33.9s-24.3 9.9-33.9 .8l-176-168z"></path>
                                            </svg>
                                            <div className="">Back</div>
                                        </div>
                                    </button>
                                </a>
                                <button type="button" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md w-fit focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring mb-6 self-center bg-whop-white text-whop-dark-gray text-subtitle3 h-8 px-[11px]">
                                    <div className="absolute inset-0 transition group-hover/button:bg-black/[4%] group-active/button:bg-black/[8%] biz-dark-1:group-hover/button:bg-white/[8%] biz-dark-1:group-active/button:bg-white/[16%] biz-dark-2:group-hover/button:bg-white/[8%] biz-dark-2:group-active/button:bg-white/[16%]"></div>
                                    <div className="z-10 flex items-center justify-center">
                                        <div className="">I didn't receive a code</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </>) : (<>
                        <div className="flex flex-col">
                            <div className="flex flex-col px-6">
                                <div className="display2 text-whop-black my-6 text-center" id="auth-title">Create an account</div>
                                <form onSubmit={(e) => onSubmit(e)} className=''>
                                    <div className="h-fit w-full">
                                        <div className="relative flex items-center w-full text-base" >
                                            <input data-hj-allow="true"
                                                id="email"
                                                placeholder="Your email"
                                                autocomplete="off"
                                                spellcheck="false"
                                                autocorrect="off"
                                                className="block appearance-none pl-3 pr-3 border-whop-stroke-dark shadow-sm focus-within:border-whop-field-highlight focus-within:ring-whop-field-highlight/30 border transition focus-within:outline-none focus-within:ring placeholder:text-whop-dark-gray/[50%] text-whop-black text-text1 bg-whop-background outline-none h-10 rounded-md w-full"
                                                type="text"
                                                name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" className="group/button relative flex shrink-0 items-center justify-center overflow-hidden rounded-md focus-visible:border-whop-field-highlight focus-visible:ring-whop-field-highlight/30 outline-none transition focus:outline-none focus-visible:border focus-visible:ring mt-5 w-full bg-whop-primary text-whop-fixed-white text-button4 h-10 px-[15px]">
                                        <div className="absolute inset-0 transition group-hover/button:bg-black/[12%] group-active/button:bg-black/[18%]"></div>
                                        <div className="z-10 flex items-center justify-center">
                                            <div className="text-base text-white">Continue</div>
                                        </div>
                                    </button>
                                </form>
                                <div className="my-6 flex items-center gap-2">
                                    <div className="bg-whop-stroke h-[1px] flex-1"></div>
                                    <div className="subtitle4 text-whop-dark-gray">or</div>
                                    <div className="bg-whop-stroke h-[1px] flex-1"></div>
                                </div>
                                <div className="flex gap-2">
                                    {/* <a target="_self" className="border-whop-stroke hover:bg-whop-hover active:bg-whop-hover-press flex h-10 flex-1 items-center justify-center rounded-md border outline-none transition" href="#">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" className="w-7 h-7 text-whop-brandsDiscord text-[20px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path fill="currentColor" d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                                    </svg>
                                </a> */}
                                    {/* <a target="_self" className="border-whop-stroke hover:bg-whop-hover active:bg-whop-hover-press flex h-10 flex-1 items-center justify-center rounded-md border outline-none transition" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512" width="20px" height="20px" >
                                            <g>
                                                <path className='opacity-10' fill="#ea4334" d="M 233.5,-0.5 C 247.833,-0.5 262.167,-0.5 276.5,-0.5C 333.794,4.81804 383.46,26.9847 425.5,66C 401.603,89.8484 377.436,113.348 353,136.5C 311.601,101.03 264.435,90.53 211.5,105C 161.493,121.823 127.493,154.99 109.5,204.5C 81.8333,183.167 54.1667,161.833 26.5,140.5C 49.2789,93.8847 83.2789,57.7181 128.5,32C 161.399,13.9753 196.399,3.14196 233.5,-0.5 Z" ></path>
                                            </g>
                                            <g>
                                                <path className='opacity-10' fill="#fabb05" d="M 26.5,140.5 C 54.1667,161.833 81.8333,183.167 109.5,204.5C 98.8334,237.834 98.8334,271.167 109.5,304.5C 82.0147,326.408 54.348,348.075 26.5,369.5C 11.9083,340.465 2.90833,309.799 -0.5,277.5C -0.5,262.167 -0.5,246.833 -0.5,231.5C 2.7571,199.473 11.7571,169.14 26.5,140.5 Z" ></path>
                                            </g>
                                            <g>
                                                <path className='opacity-10' fill="#4284f3" d="M 499.5,238.5 C 499.5,253.167 499.5,267.833 499.5,282.5C 495.394,341.013 474.227,392.347 436,436.5C 432.298,440.37 428.464,444.037 424.5,447.5C 423.078,447.291 421.745,446.791 420.5,446C 394.249,425.721 368.249,405.221 342.5,384.5C 370.338,364.862 387.672,338.196 394.5,304.5C 347.505,303.5 300.505,303.167 253.5,303.5C 253.5,271.5 253.5,239.5 253.5,207.5C 333.833,207.5 414.167,207.5 494.5,207.5C 496.462,217.919 498.129,228.253 499.5,238.5 Z" ></path>
                                            </g>
                                            <g>
                                                <path className='opacity-10' fill="#34a753" d="M 109.5,304.5 C 126.068,351.57 157.734,384.07 204.5,402C 249.031,416.113 292.031,412.447 333.5,391C 336.529,388.824 339.529,386.657 342.5,384.5C 368.249,405.221 394.249,425.721 420.5,446C 421.745,446.791 423.078,447.291 424.5,447.5C 388.473,480.173 346.139,500.007 297.5,507C 206.137,519.327 128.637,492.493 65,426.5C 49.5963,409.258 36.763,390.258 26.5,369.5C 54.348,348.075 82.0147,326.408 109.5,304.5 Z" ></path>
                                            </g>
                                        </svg>
                                    </a> */}
                                    <GoogleOAuthProvider clientId={CLIENT_ID}>
                                        <GoogleLogin
                                            onSuccess={auth}
                                        />
                                    </GoogleOAuthProvider>
                                    {/* <a target="_blank" className="border-whop-stroke hover:bg-whop-hover active:bg-whop-hover-press flex h-10 flex-1 items-center justify-center rounded-md border outline-none transition" href="#">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="w-7 h-7 text-whop-brandsTwitter text-[20px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                    </svg>
                                </a>
                                <a target="_self" className="border-whop-stroke hover:bg-whop-hover active:bg-whop-hover-press flex h-10 flex-1 items-center justify-center rounded-md border outline-none transition" href="#">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" className="w-7 h-7 text-whop-brandsApple text-[20px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                                    </svg>
                                </a> */}
                                </div>
                                <div className="text-whop-gray text5 my-6 text-center">By signing up, you agree to our <a className="font-medium underline" target="_blank" href="/tos">Terms</a> &amp; <a className="font-medium underline" target="_blank" href="/privacy">Privacy</a></div>
                            </div>
                            <div className="text-whop-dark-gray text-subtitle3 border-whop-stroke flex items-center justify-center border-t py-5">Already have an account?<a className="ml-1 text-[#FF6243]" href="/login">Sign in</a></div>
                        </div>
                    </>)}
                </div>
            </div>
        </>
    )
}

export default Sregister;