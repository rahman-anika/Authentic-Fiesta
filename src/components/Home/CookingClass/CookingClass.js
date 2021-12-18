import React, { useEffect, useState } from 'react';
import './CookingClass.css';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';


const CookingClass = () => {

    let { isLoading } = useAuth();

    // state declaration starts 
    const [services, setServices] = useState([]);
    // state declaration ends 



    // data load from database/server starts 
    useEffect(() => {
        fetch('https://dry-cliffs-03340.herokuapp.com/allCourses')
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
        // services section starts 
        <div id="cookingClass" className="container w-100 m-auto p-5 animate__animated animate__jello">

            {/* title starts */}
            <h1 className="service-title-main">Join Our Cooking Class</h1>
            <p style={{ color: "orange" }}>
                <blockquote> <strong> "When baking, follow directions. When cooking, go by your own taste." –  Laiko Bahrs</strong></blockquote>



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
                    <div key={service._id} className="col-md-6 col-lg-3 col-sm-12">
                        <div className="cart service p-3 m-2 border border">

                            {/* image showing starts  */}
                            <div className="service img">
                                <img src={service.image} alt="category" />
                            </div>
                            {/* image showing ends  */}

                            {/* service info starts  */}
                            <h4 className="mt-4 service-info">{service.name.slice(0, 22)}</h4>



                            <h6 className="mt-4 service-info">Duration: {service.duration}</h6>

                            <h6 className="mt-4 service-info">Price: ${service.price}</h6>

                            <p className="mt-2">{service.description.slice(0, 90)}..</p>

                            <Link to={`/classDetails/${service._id}`}>
                                <button className="btn btn-success">Enroll Now </button>
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
        // services section ends 


    );
};

export default CookingClass;