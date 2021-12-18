import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import "./MyCourses.css";

const MyCourses = () => {

    // state declaration 
    const [orders, setOrders] = useState([]);

    // for getting logged in user 
    const { user } = useAuth();
    const email = user.email;


    // load all orders by email query from database/server

    useEffect(() => {
        fetch(`http://localhost:5000/myCourses/${email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [email]);

    console.log(orders);


    return (
        <div>




            {/* My courses section starts  */}
            <h1 className="title animate__animated animate__rotateIn mt-5">My Enrolled Course(s): {orders.length}</h1>
            <br />

            <div className="all-products">
                <div className="row container text-center mx-auto">

                    {/* showing my courses  */}
                    {orders?.map((order) => (
                        <div className="col-md-6 col-lg-4">
                            <div className="cart border border p-2 m-2">

                                <h4>{order?.username}</h4>
                                <p className="fw-bold">{order?.email}</p>
                                <h5>{order?.courseName}</h5>
                                <h6>{order?.duration}</h6>
                                <h6>{order?.classes}</h6>
                                <h6>Price: ${order?.price}</h6>
                                <h6>Status: {order?.status}</h6>
                                <h6>Payment: {order?.payment}</h6>


                                {/* button for chatting */}

                                <button style={{ backgroundColor: "orange", color: "black", borderRadius: "8px", border: "2px solid orange" }} >Chat Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* My orders section ends  */}



        </div>
    );
};

export default MyCourses;