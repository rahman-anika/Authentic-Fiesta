import React, { useEffect, useState } from 'react';
// import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
// import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import recipe1 from '../../../images/recipe/recipe 2.gif';
import './SubmitRecipe.css';

const SubmitRecipe = () => {



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

        fetch(`http://localhost:5000/addRecipes`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(orderInfo),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.insertedId) {
                    alert("Recipe Posted Successfully ");
                } else {
                    alert("Recipe is not posted");
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



            {/* Recipe post section starts  */}
            <div className='row'>


                <div className="col-md-7 text-center order-confirm-form py-5">
                    <div className="my-cart">
                        <h2 style={{ color: 'orange', fontWeight: 'bold' }} >Please Fill Up The Form</h2>

                        <br />


                        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("username")} />



                            <input defaultValue={user.email} {...register("email", { required: true })} />

                            <br />


                            {errors.email && <span className="error">This field is required</span>}

                            <br />




                            <input placeholder="Recipe Name" defaultValue="" {...register("name", { required: true })} />

                            <input placeholder="Image Link" defaultValue="" {...register("image", { required: true })} />

                            <input placeholder="Serving Person(s)" defaultValue="" {...register("serves", { required: true })} />

                            <input placeholder="Cooking Time" defaultValue="" {...register("cookingTime", { required: true })} />

                            <br />

                            <p style={{ color: 'orange', fontWeight: 'bold' }} className="p-2 m-2 w-100">Select Category</p>

                            <select placeholder="Category" {...register("category", { required: true })}
                                className="p-2 m-2 w-50"
                            >
                                <option value="Starter">Starter</option>
                                <option value="Dessert">Dessert</option>
                                <option value="Snacks">Snacks</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Spicy">Spicy</option>
                                <option value="Others">Others</option>


                            </select>
                            <br />
                            {/* <input placeholder="Write Your Recipe " defaultValue="" {...register("description", { required: true })} /> */}

                            <br />
                            <br />

                            <textarea placeholder='Write Your Recipe' rows="4" cols="50" defaultValue="" {...register("description")} />

                            <br />
                            <br />


                            <input type="submit" style={{ color: 'orange', fontWeight: 'bold' }} value="Submit Recipe" />
                        </form>
                    </div>

                </div>

                <div className="col-md-4">
                    <img src={recipe1} className="recipe-image w-100" alt="" />
                </div>

            </div>

            {/* Recipe post section ends  */}



            {/* footer section starts */}
            <Footer></Footer>
            {/* footer section ends */}

        </div>
    );
};

export default SubmitRecipe;