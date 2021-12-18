import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Recipe from '../Recipe/Recipe';
import CookingClass from '../CookingClass/CookingClass';
import Reviews from '../Reviews/Reviews';


// import Gallery from '../Gallery/Gallery';
// import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">

            {/* header section starts */}
            <Header></Header>
            {/* header section ends */}

            {/* banner section starts */}
            <Banner></Banner>
            {/* banner section ends */}

            {/* recipe section starts */}
            <Recipe></Recipe>
            {/* recipe section ends */}

            {/* cooking class section starts */}
            <CookingClass></CookingClass>
            {/* cooking class section ends */}



            {/* reviews section starts */}
            <Reviews></Reviews>
            {/* reviews section ends */}

            {/* about section starts */}
            <About></About>
            {/* about section ends */}

            {/* footer section starts */}
            <Footer></Footer>
            {/* footer section ends */}


        </div>
    );
};

export default Home;