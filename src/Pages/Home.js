import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Home/Header/Header/Header';
import Products from '../components/Home/Products/Products';

const Home = () => {
    return (
        <>
            <div style={{marginTop:"120px"}} className="container">
                <NavBar />
                <Header />
                <Products />
            </div>
        </>
    );
};

export default Home;