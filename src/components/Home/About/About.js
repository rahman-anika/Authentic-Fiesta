import React from 'react';
import './About.css'
import about1 from '../../../images/about/about2.gif';
import about2 from '../../../images/about/chef.png';
import about3 from '../../../images/about/taste.png';
import about4 from '../../../images/about/best.png';
import about5 from '../../../images/about/whisk.png';
import about6 from '../../../images/about/salad.png';
import about7 from '../../../images/about/headset.png';


const About = () => {
    return (

        // about section starts 

        <div id="about" className="container w-100 m-auto p-5 animate__animated animate__bounce">

            {/* Why choose section starts  */}

            <div className="col-md-12 ">
                <h3 className="about-title-main fw-bold">Why Choose Us</h3>
                <small className="about-title-main fw-bold">
                    If you have passion for cooking, then it is the right place for you!
                </small>
            </div>

            {/* why choose us section ends  */}

            {/* three facilities section starts  */}

            <div className="row">

                <div className="col-lg-4">
                    {/* value for money starts  */}
                    <div className="col-md-12 g-4">
                        <div className="d-flex mt-3 about-facilities">
                            <div className="about_us">
                                {/* <i class="far fa-hand-peace"></i> */}
                                <img src={about4} alt="" />
                            </div>
                            <div className="text-start">
                                <h5 className="about-title">Best Quality</h5>
                                <small>We provide our best effort to make every item best quality. Because we value for your satisfaction.</small><br />
                                {/* <a href="#">Show more </a><button className="showmore_btn"><i class="fas fa-arrow-right"></i></button> */}
                                <span className="fw-bold">Show more</span> <button className="showmore_btn"> <i class="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                    {/* value for money ends  */}




                    {/* Easy Payment System starts  */}
                    <div className="col-md-12 g-4">
                        <div className="d-flex mt-3 about-facilities">
                            <div className="about_us">
                                {/* <i class="fas fa-calendar-check"></i> */}
                                <img src={about3} alt="" />

                            </div>
                            <div className="text-start">
                                <h5 className="about-title">Super Taste</h5>
                                <small>We asssure that you never forget our super tasty food made by our professional chefs.</small>

                                <br />

                                <span className="fw-bold">Show more</span> <button className="showmore_btn"> <i class="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                    {/* Easy Payment System ends  */}




                    {/* Support Team starts  */}
                    <div className="col-md-12 g-4">
                        <div className="d-flex mt-3 about-facilities">
                            <div className="about_us">
                                {/* <i class="fas fa-headset"></i> */}
                                <img src={about6} alt="" />
                            </div>
                            <div className="text-start">
                                <h5 className="about-title">Healthy Ingredients</h5>
                                <small>We try to prepare every dishes with healthy ingredients so that you become healthy.</small>

                                <br />

                                <span className="fw-bold">Show more</span> <button className="showmore_btn"> <i class="fas fa-arrow-right"></i></button>

                            </div>
                        </div>
                    </div>
                    {/*Support Team ends  */}

                </div>

                <div className="col-lg-4">
                    <img src={about1} className="about-image w-100" alt="" />
                </div>


                <div className="col-lg-4">
                    {/* value for money starts  */}
                    <div className="col-md-12 g-4">
                        <div className="d-flex mt-3 about-facilities">
                            <div className="about_us">
                                {/* <i class="fas fa-dollar-sign"></i> */}
                                <img src={about2} alt="" />
                            </div>
                            <div className="text-start">
                                <h5 className="about-title">Expert Chef</h5>
                                <small>We have expert and passionate cook who make every items with great care. </small><br />
                                {/* <a href="#">Show more </a><button className="showmore_btn"><i class="fas fa-arrow-right"></i></button> */}
                                <span className="fw-bold">Show more</span> <button className="showmore_btn"> <i class="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                    {/* value for money ends  */}




                    {/* Easy Payment System starts  */}
                    <div className="col-md-12 g-4">
                        <div className="d-flex mt-3 about-facilities">
                            <div className="about_us">
                                {/* <i class="fas fa-calendar-check"></i> */}
                                <img src={about5} alt="" />

                            </div>
                            <div className="text-start">
                                <h5 className="about-title">Excellent Cooking Class</h5>
                                <small>If you join our cooking class, you will be surely satisfied and learn cooking of various dishes.</small>

                                <br />

                                <span className="fw-bold">Show more</span> <button className="showmore_btn"> <i class="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                    {/* Easy Payment System ends  */}




                    {/* Support Team starts  */}
                    <div className="col-md-12 g-4">
                        <div className="d-flex mt-3 about-facilities">
                            <div className="about_us">
                                {/* <i class="fas fa-headset"></i> */}
                                <img src={about7} alt="" />
                            </div>
                            <div className="text-start">
                                <h5 className="about-title">Support Team</h5>
                                <small>We provide our best supportive services 24/7. You can keep in touch with us all time.</small>

                                <br />

                                <span className="fw-bold">Show more</span> <button className="showmore_btn"> <i class="fas fa-arrow-right"></i></button>

                            </div>
                        </div>
                    </div>
                    {/*Support Team ends  */}

                </div>





            </div>

            {/* three facilities section ends  */}

        </div>

        // about section ends 
    );
};

export default About;