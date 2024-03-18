import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    //   const { logout } = useContext(AuthContext);
    //   const navigate  = useNavigate();

    //   const getlogout = (e) => {
    //     //e.preventDefault();
    //     //localStorage.removeItem("token");
    //     //localStorage.removeItem("user_typ");

    //     ///logout();
    //     //navigate('/login');

    //     console.log('call for all----------');
    // };

    return (
        <>
            <div className="app-sidebar sidebar-shadow">
                <div className="app-header__logo">
                    <div className="logo-src"></div>
                    <div className="header__pane ml-auto">
                        <div>
                            <button
                                type="button"
                                className="hamburger close-sidebar-btn hamburger--elastic"
                                data-className="closed-sidebar"
                            >
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="app-header__mobile-menu">
                    <div>
                        <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="app-header__menu">
                    <span>
                        <button
                            type="button"
                            className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                        >
                            <span className="btn-icon-wrapper">
                                <i className="fa fa-ellipsis-v fa-w-6"></i>
                            </span>
                        </button>
                    </span>
                </div>

                <div className="scrollbar-sidebar">
                    <div className="app-sidebar__inner">
                        <ul className="vertical-nav-menu">
                            <li className="app-sidebar__heading"> </li>
                            <li>
                                <Link to={"/admin/dashboard"} className="mm-active">
                                    <i className="metismenu-icon pe-7s-rocket"></i>
                                    Dashboard
                                </Link>
                            </li>
                            <li className="app-sidebar__heading">Biz Updates</li>

                            <li>
                                <Link to={"#"}>
                                    <i className="metismenu-icon pe-7s-display2"></i>Seller Management
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </Link>
                                <ul>
                                    <li>
                                        <Link to={"/admin/seller"}>
                                            <i className="metismenu-icon"></i>Seller
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/admin/"}>
                                            <i className="metismenu-icon"></i>Product Report
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/admin/"}>
                                            <i className="metismenu-icon"></i>Payouts
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/admin/"}>
                                            <i className="metismenu-icon"></i>Support Tickets
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link to={"#"}>
                                    <i className="metismenu-icon pe-7s-display2"></i>Customer Management
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </Link>
                                <ul>
                                    <li>
                                        <Link to={"/admin/user"}>
                                            <i className="metismenu-icon"></i>Customers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/admin/"}>
                                            <i className="metismenu-icon"></i>Booking History
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to={"/admin/"}>
                                            <i className="metismenu-icon"></i>Support Tickets
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link to={"#"}>
                                    <i className="metismenu-icon pe-7s-display2"></i>Team Management
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </Link>
                                <ul>
                                    <li>
                                        <Link to={"/admin/team"}>
                                            <i className="metismenu-icon"></i>Team List
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/admin/"}>
                                            <i className="metismenu-icon"></i>User Role
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="app-sidebar__heading">Master Seups</li>
                            <li>
                                <Link href={"#"}>
                                    <i className="metismenu-icon pe-7s-diamond"></i>Configs
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </Link>
                                <ul>
                                    <li>
                                        <Link to={"/admin/category"}>Category</Link>
                                    </li>
                                    <li>
                                        <Link to={"/admin/country"}>Country</Link>
                                    </li>
                                    <li>
                                        <Link to={"/admin/state"}>State</Link>
                                    </li>
                                    <li>
                                        <Link to={"/admin/city"}>City</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to={"#"}>
                                    <i className="metismenu-icon pe-7s-diamond"></i>Seo Setups
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </Link>
                                <ul>
                                    <li>
                                        <Link to={"/admin/category"}>On Page Seo</Link>
                                    </li>
                                    <li>
                                        <Link to={"/admin/country"}>Analytics</Link>
                                    </li>
                                    <li>
                                        <Link to={"/admin/state"}>Robots Txt</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to={"/admin/settings"}>
                                    <i className="metismenu-icon pe-7s-diamond"></i> Site Settings
                                </Link>
                            </li>

                            <li>
                                {' '}
                                <Link className="btn btn-warning" style={{ marginTop: 90 }} to={"/admin/logout"}>
                                    Logout{' '}
                                </Link>{' '}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
