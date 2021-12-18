import React from 'react';
import useAuth from '../../../hooks/useAuth';
import dashboardHome from './../../../images/dashboard/dashboardhome1.jpg';

const DashboardHome = () => {

    const { user } = useAuth();

    return (
        <div>
            <h2 style={{ color: "orange" }} className="mt-5">Welcome To Authentic Fiesta, {user.displayName}</h2>

            <img className="img-fluid" src={dashboardHome} height="50%" width="50%" alt="" />

        </div>

    );
};

export default DashboardHome;