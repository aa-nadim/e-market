import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Products from '../components/Home/Products/Products';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Home/Banner/Banner';
import About from '../components/Home/About/About';
import Contact from '../components/Home/Contact/Contact';

const Home = () => {
    return (
        <>
            <div style={{marginTop:"120px"}} >
                <NavBar />
                <Banner />
                <About />
                <Products />
                <Contact />
                <Footer />
            </div>
        </>
    );
};

export default Home;