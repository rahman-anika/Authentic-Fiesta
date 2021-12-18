import React, { useEffect, useState } from 'react';
// import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
// import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import course1 from '../../../images/dashboard/addCourse.jpg';
import './AddCourse.css';

const AddCourse = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // for getting logged in user 
    const { user } = useAuth();


    // handle submit form

    const onSubmit = (orderInfo) => {
        // const data = products[index];



        // by default pending status 

        // orderInfo.status = "pending";

        // console.log(orderInfo);


        // Post/place new order

        fetch(`http://localhost:5000/addCourses`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(orderInfo),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.insertedId) {
                    alert("Course Added Successfully ");
                } else {
                    alert("Course is not added");
                }
                reset();
            });
    };

    return (
        <div>




            {/* Recipe post section starts  */}
            <div className='row'>


                <div className="col-md-7 text-center order-confirm-form py-5">
                    <div className="my-cart">
                        <h2 style={{ color: 'orange', fontWeight: 'bold' }} >Please Fill Up The Form</h2>

                        <br />


                        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>





                            <input placeholder="Course Name" defaultValue="" {...register("name", { required: true })} />

                            <input placeholder="Image Link" defaultValue="" {...register("image", { required: true })} />


                            <input placeholder="Price" defaultValue="" {...register("price", { required: true })} />

                            <input placeholder="Duration" defaultValue="" {...register("duration", { required: true })} />

                            <input placeholder="Classes" defaultValue="" {...register("classes", { required: true })} />

                            <br />
                            <br />






                            <textarea placeholder='Describe About The Course' rows="4" cols="50" defaultValue="" {...register("description")} />

                            <br />
                            <br />


                            <input type="submit" style={{ color: 'orange', fontWeight: 'bold' }} value="Add Course" />
                        </form>
                    </div>

                </div>

                <div className="col-md-4">
                    <img src={course1} className="course-image w-100" alt="" />
                </div>

            </div>

            {/* Recipe post section ends  */}




        </div>
    );
};

export default AddCourse;