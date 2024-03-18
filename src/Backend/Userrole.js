import React from 'react';
import { Link } from 'react-router-dom';

const Userrole = () => {
    return (
        <>
            <div className="card-body cbtop">
                <h2>Userrole</h2>
                <Link to={"/admin/userrole/add"} className="btn btn-success midbtn">
                    {' '}
                    <i className="fa fa-plus"></i> Add Role
                </Link>
            </div>
            <div className="card-body">
                <table className="table   table-hover">
                    <thead>
                        <tr className="tbl_head">
                            <th># </th>
                            <th>Seller</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Financer</td>
                            <td>
                                {' '}
                                <span className="btn btn-warning btn-sm">Query</span>
                            </td>
                            <td>
                                <Link className="btn btn-success mybtn" to={"/admin/size"}>
                                    <i className="fa fa-eye"></i>{' '}
                                </Link>

                                <div className="btn-group ">
                                    <button
                                        type="button"
                                        className="btn btn-primary dropdown-toggle mybtn"
                                        data-toggle="dropdown"
                                    >
                                        <i className="fa fa-bars" aria-hidden="true"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to={"/"}>
                                            <i className="fa fa-pencil"></i> Edit
                                        </Link>
                                        <Link className="dropdown-item" to={"/"}>
                                            <i className="fa fa-times"></i> Delete
                                        </Link>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Cashier</td>
                            <td>
                                {' '}
                                <span className="btn btn-warning btn-sm">Query</span>
                            </td>
                            <td>
                                <Link className="btn btn-success mybtn" to={"/admin/size"}>
                                    <i className="fa fa-eye"></i>{' '}
                                </Link>

                                <div className="btn-group ">
                                    <button
                                        type="button"
                                        className="btn btn-primary dropdown-toggle mybtn"
                                        data-toggle="dropdown"
                                    >
                                        <i className="fa fa-bars" aria-hidden="true"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to={"/"}>
                                            <i className="fa fa-pencil"></i> Edit
                                        </Link>
                                        <Link className="dropdown-item" to={"/"}>
                                            <i className="fa fa-times"></i> Delete
                                        </Link>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>July</td>
                            <td>
                                {' '}
                                <span className="btn btn-warning btn-sm">Query</span>
                            </td>
                            <td>
                                <Link className="btn btn-success mybtn" to={"/admin/size"}>
                                    <i className="fa fa-eye"></i>{' '}
                                </Link>

                                <div className="btn-group ">
                                    <button
                                        type="button"
                                        className="btn btn-primary dropdown-toggle mybtn"
                                        data-toggle="dropdown"
                                    >
                                        <i className="fa fa-bars" aria-hidden="true"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to={"/"}>
                                            <i className="fa fa-pencil"></i> Edit
                                        </Link>
                                        <Link className="dropdown-item" to={"/"}>
                                            <i className="fa fa-times"></i> Delete
                                        </Link>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Userrole;
