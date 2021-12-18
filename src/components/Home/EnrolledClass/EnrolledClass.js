import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
// import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import recipe1 from '../../../images/recipe/recipe 2.gif';
import { useParams } from 'react-router';
import './EnrolledClass.css';

const EnrolledClass = () => {

    const { serviceId } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // for getting logged in user 
    const { user } = useAuth();

    // state declaration starts 
    const [data, setData] = useState([]);
    // state declaration ends 

    // data loading starts using Services.json file starts 
    useEffect(() => {
        fetch('http://localhost:5000/allCourses')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    // data loading starts using Services.json file ends 



    // console.log(data[0].id);

    // try to match data 
    const service = data?.filter(sv => sv._id == serviceId);

    console.log(service);

    // handle submit form

    const onSubmit = (orderInfo) => {
        // const data = products[index];

        orderInfo.courseName = service[0]?.name;
        orderInfo.duration = service[0]?.duration;
        orderInfo.classes = service[0]?.classes;
        orderInfo.price = service[0]?.price;


        // by default pending status 

        orderInfo.status = "pending";

        console.log(orderInfo);


        // Post/place new order

        fetch(`http://localhost:5000/enrollCourses`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(orderInfo),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.insertedId) {
                    alert("Enrolled Successfully ");
                } else {
                    alert("Enrolled Failed");
                }
                reset();
            });
    };




    return (
        <div>
            {/* header section starts */}
            <Header></Header>
            {/* header section ends */}

            <br />
            <br />




            {/* Confirm booking section starts  */}

            <div className="row col-lg-12 text-center order-confirm-form py-5">
                <div className="my-cart">
                    <h2 style={{ color: "orange" }}>Please Fill Up The Form</h2>

                    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user.displayName} {...register("username")} />



                        <input defaultValue={user.email} {...register("email", { required: true })} />

                        <br />

                        {/* <input type="text" value={service[0]?.price} {...register("price", { required: true })} />

                <br /> */}
                        {errors.email && <span className="error">This field is required</span>}

                        <br />







                        <br />

                        <p style={{ color: "orange" }} className="p-2 m-2 w-100">Choose Payment Method</p>

                        <select placeholder="Payment Method" {...register("payment", { required: true })}
                            className="p-2 m-2 w-50"
                        >
                            <option value="cash on delivery">Cash On Delivery</option>

                        </select>
                        <br />



                        <input type="submit" style={{ color: "white", backgroundColor: "orange" }} value="Confirm Enroll" />
                    </form>
                </div>

            </div>

            {/* Confirm booking section ends  */}



            {/* footer section starts */}
            <Footer></Footer>
            {/* footer section ends */}

        </div >

    );
};

export default EnrolledClass;