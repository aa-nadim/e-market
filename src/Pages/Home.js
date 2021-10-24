import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Home/Header/Header/Header';
import Products from '../components/Home/Products/Products';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <div style={{marginTop:"120px"}} >
                <NavBar />
                <Header />
                <Products />
                <Footer />
            </div>
        </>
    );
};

export default Home;