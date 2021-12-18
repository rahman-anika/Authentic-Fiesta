import React, { useEffect, useState } from 'react';
import './AllRecipes.css';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const AllRecipes = () => {

    let { isLoading } = useAuth();

    // state declaration starts 
    const [services, setServices] = useState([]);
    // state declaration ends 



    // data load from database/server starts 
    useEffect(() => {
        fetch('http://localhost:5000/allRecipes')
            .then(res => res.json())
            .then(data => setServices(data));

    }, []);
    // data load from database/server ends 



    if (services.length > 0) {
        isLoading = false;

    }

    if (services.length === 0) {
        isLoading = true;
    }




    // if loading then shows spinner 

    console.log(services);

    // if (isLoading === true) {
    //     return <Spinner animation="border" variant="danger" />
    // }


    return (
        <>
            <Header></Header>


            {/* services section starts  */}
            <div id="recipes" className="container w-100 m-auto p-5 animate__animated animate__jello">

                {/* title starts */}
                <h1 className="service-title-main">Take A Look At Our Recipes</h1>
                <p style={{ color: "orange" }}>
                    <blockquote> <strong> "A recipe has no soul. You as the cook must bring soul to the recipe." –  Thomas Keller</strong></blockquote>
                    <small>Try new items day by day</small>


                </p>
                {/* title ends  */}


                {

                    isLoading ?
                        <Spinner animation="border" variant="danger" />
                        :
                        ''

                }



                {/* showing all services after data loading starts  */}
                <div className="row">

                    {services?.map((service) => (
                        <div key={service._id} className="col-md-6 col-lg-4 col-sm-12">
                            <div className="cart service p-3 m-2 border border">

                                {/* image showing starts  */}
                                <div className="service img">
                                    <img src={service.image} alt="category" />
                                </div>
                                {/* image showing ends  */}

                                {/* service info starts  */}
                                <h4 className="mt-4 service-info"><b>{service.name.slice(0, 22)}</b></h4>

                                <h5 className="mt-4 service-info"> <b>{service.category}</b></h5>

                                <p> <b>Cooking Time: {service.cookingTime}
                                </b></p>

                                <p> <b>
                                    Serves: {service.serves} </b></p>

                                <p className="mt-2">{service.description.slice(0, 90)}</p>

                                <Link to={`/recipeDetails/${service._id}`}>
                                    <button className="btn btn-success">Read More </button>
                                </Link>
                                {/* service info ends  */}


                            </div>
                        </div>
                    ))}
                </div>
                {/* showing all services after data loading ends  */}

                <br />
                <br />



            </div>
            {/* services section ends  */}
            <Footer></Footer>

        </>

    );
};

export default AllRecipes;