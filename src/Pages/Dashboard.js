import React from 'react';
import AddProduct from '../components/Dashboard/AddProduct/AddProduct';
import NavBar from '../components/NavBar/NavBar';

const Dashboard = ( ) => {
    return (
        <>
        <main className="wrapper">
            <NavBar />
            <AddProduct />
        </main> 
        </>
    );
};

export default Dashboard;