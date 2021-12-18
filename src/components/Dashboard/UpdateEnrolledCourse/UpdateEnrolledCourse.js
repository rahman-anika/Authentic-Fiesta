import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const UpdateEnrolledCourse = () => {

    const { orderId } = useParams();

    // state declaration 

    const [isUpdate, setIsUpdated] = useState(null);
    const [booking, setBooking] = useState({});


    // load single booking by booking id from database/server 

    useEffect(() => {
        fetch(`https://dry-cliffs-03340.herokuapp.com/singleCourse/${orderId}`)
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, [orderId, isUpdate]);


    const {

        handleSubmit,
        formState: { errors },
    } = useForm();



    // handle update 

    const onSubmit = (data) => {
        fetch(`https://dry-cliffs-03340.herokuapp.com/update/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    setIsUpdated(true);
                    alert('Status updated successfully');

                } else {
                    setIsUpdated(false);
                    alert('Status is not updated yet');

                }
            });
        console.log(data);
    };


    return (
        <div>

            {/* Header section  starts  */}
            <Header></Header>
            {/* Header section ends  */}
            <br />


            {/* showing booking details  */}
            <h4>Order Id: {booking._id}</h4>
            <h4>Course Name: {booking.courseName}</h4>
            <h4>Customer Name: {booking.username}</h4>
            <h4>Email: {booking.email}</h4>
            <h4>Duration: {booking.duration}</h4>
            <h4>Classes: {booking.classes}</h4>
            <h4>Price: $ {booking.price}</h4>
            <h4>Status: {booking.status}</h4>



            {/* handle update form  */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                {/* <input
                    className="p-2 m-2"
                    defaultValue={booking?.status}
                    {...register("status")}
                    required
                /> */}
                {/* include validation with required or other standard HTML validation rules */}

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <br />

                {/* button for updating status  */}

                <input style={{ backgroundColor: "orange" }} className="w-25" type="submit" value="Update Status" />

            </form>

            {/* Footer section starts  */}
            <Footer></Footer>
            {/* Footer section ends  */}

        </div>

    );
};

export default UpdateEnrolledCourse;