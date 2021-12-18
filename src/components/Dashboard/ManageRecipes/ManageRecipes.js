import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./ManageRecipes.css";

const ManageRecipes = () => {

    // state declaration 
    const [orders, setOrders] = useState([]);

    // for getting logged in user 
    const { user } = useAuth();
    const email = user.email;


    // load all orders by email query from database/server

    useEffect(() => {
        fetch(`http://localhost:5000/allRecipes`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [email]);

    console.log(orders);

    // DELETE an order 

    const handleDeleteRecipe = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/deleteRecipe/${id}`;
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
            <h1 className="title animate__animated animate__rotateIn mt-5">My Recipe(s): {orders.length}</h1>
            <br />

            <div className="all-products">
                <div className="row container text-center mx-auto">

                    {/* showing my courses  */}
                    {orders?.map((order) => (
                        <div className="col-md-6 col-lg-4">
                            <div className="cart border border p-2 m-2">

                                <h4>{order?.name}</h4>
                                <h6>Category: {order?.category}</h6>
                                <h5>Posted By: </h5>
                                <h5>{order?.username}</h5>
                                <p className="fw-bold">{order?.email}</p>

                                <h6>Cooking Time: {order?.cookingTime}</h6>
                                <h6>Serves: {order?.serves} person(s)</h6>

                                <h6>Description: {order?.description.slice(0, 30)}..</h6>



                                {/* button for deleting order  */}
                                <button
                                    onClick={() => handleDeleteRecipe(order._id)}
                                    style={{ backgroundColor: "orange", color: "black", borderRadius: "8px", border: "2px solid orange" }}>Delete </button>

                                &nbsp; &nbsp;
                                {/* button for read more */}

                                <Link to={`/recipeDetails/${order._id}`}>
                                    <button style={{ backgroundColor: "orange", color: "black", borderRadius: "8px", border: "2px solid orange" }} >Read More</button>
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

export default ManageRecipes;