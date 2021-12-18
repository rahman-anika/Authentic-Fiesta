import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./ManageAllCourses.css";

const ManageAllCourses = () => {

    // state declaration 
    const [orders, setOrders] = useState([]);
    // const [isDelete, setIsDelete] = useState(null);


    // all bookings load from database/server
    useEffect(() => {
        fetch("http://localhost:5000/allEnrolledCourses")
            .then((response) => response.json())
            .then((data) => setOrders(data));
    }, []);


    // DELETE an order/booking 

    const handleDeleteCourse = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/deleteCourse/${id}`;
            fetch(url, {
                method: 'DELETE'


            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = orders.filter(order => order._id !== id);
                        setOrders(remainingUsers);



                    }
                })
        }

    };




    return (
        <div>




            {/* My courses section starts  */}
            <h1 className="title animate__animated animate__rotateIn mt-5"> Enrolled Course(s): {orders.length}</h1>
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
                                <h6>Duration: {order?.duration}</h6>
                                <h6>Classes: {order?.classes}</h6>
                                <h6>Price: ${order?.price}</h6>
                                <h6>Status: {order?.status}</h6>
                                <h6>Payment: {order?.payment}</h6>


                                {/* button for deleting order  */}
                                <button
                                    onClick={() => handleDeleteCourse(order._id)}
                                    style={{ backgroundColor: "orange", color: "black", borderRadius: "8px", border: "2px solid orange" }}>Delete </button>

                                &nbsp; &nbsp;

                                {/* button for updating course status  */}
                                <Link to={`/update/${order._id}`}>
                                    <button style={{ backgroundColor: "orange", color: "black", borderRadius: "8px", border: "2px solid orange" }}>Update</button>
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* My orders section ends  */}



        </div>


    );
};

export default ManageAllCourses;