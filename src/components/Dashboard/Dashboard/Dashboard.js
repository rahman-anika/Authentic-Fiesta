import React from "react";
import { Button } from "react-bootstrap";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";


import useAuth from "../../../hooks/useAuth";
import AddReviews from "../AddReviews/AddReviews";
import DashboardHome from "../DashboardHome/DashboardHome";
import Pay from "../Pay/Pay";
import MyCourses from '../MyCourses/MyCourses';
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import "./Dashboard.css";
import MyRecipes from "../MyRecipes/MyRecipes";
import ManageAllCourses from "../ManageAllCourses/ManageAllCourses";
import ManageRecipes from "../ManageRecipes/ManageRecipes";
import AddCourse from "../AddCourse/AddCourse";


const Dashboard = () => {

    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();

    return (
        <div>
            <div className="dashboard-container ">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard">
                            <Link to={`${url}`}>
                                <h4 className="dashboard-menu pt-5">Dashboard</h4>
                            </Link>



                            {!admin && <Link to={`${url}/pay`}>
                                <li className="dashboard-menu mt-5">Pay</li>
                            </Link>}

                            {!admin && <Link to={`${url}/myCourses`}>
                                <li className="dashboard-menu mt-5">My Enrolled Course(s)</li>
                            </Link>}

                            {!admin && <Link to={`${url}/myRecipes`}>
                                <li className="dashboard-menu mt-5">My Recipe(s)</li>
                            </Link>}

                            {!admin && <Link to={`${url}/addReviews`}>
                                <li className="dashboard-menu mt-5">Add Review</li>
                            </Link>}






                            {admin && (
                                <Link to={`${url}/manageAllCourses`}>
                                    <li className="dashboard-menu mt-5">Manage All Enrolled Course(s)</li>
                                </Link>
                            )}


                            {admin && (
                                <Link to={`${url}/addCourses`}>
                                    <li className="dashboard-menu mt-5">Add Course</li>
                                </Link>
                            )}



                            {admin && <Link to={`${url}/makeAdmin`}>
                                <li className="dashboard-menu mt-5">Make Admin</li>
                            </Link>}


                            {admin && <Link to={`${url}/manageRecipes`}>
                                <li className="dashboard-menu mt-5">Manage Recipe(s)</li>
                            </Link>}
                            <br />
                            <br />

                            <Link to="/">
                                <Button variant="light">Back To HomePage</Button>
                            </Link>

                            <br />
                            <br />

                            <Button onClick={logout} variant="light">Logout</Button>


                        </div>
                    </div>
                    <div className="col-md-9">
                        <Switch>

                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>

                            <Route exact path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>

                            <Route exact path={`${path}/myCourses`}>
                                <MyCourses></MyCourses>
                            </Route>

                            <Route exact path={`${path}/myRecipes`}>
                                <MyRecipes></MyRecipes>
                            </Route>

                            <Route exact path={`${path}/addReviews`}>
                                <AddReviews></AddReviews>
                            </Route>



                            <AdminRoute exact path={`${path}/manageAllCourses`}>
                                <ManageAllCourses></ManageAllCourses>
                            </AdminRoute>

                            <AdminRoute exact path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>

                            <AdminRoute exact path={`${path}/addCourses`}>
                                <AddCourse></AddCourse>
                            </AdminRoute>

                            <AdminRoute exact path={`${path}/manageRecipes`}>
                                <ManageRecipes></ManageRecipes>
                            </AdminRoute>

                        </Switch>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;