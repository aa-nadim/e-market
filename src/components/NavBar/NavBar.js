import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import { BsFillBagFill } from "react-icons/bs";
import Logo from '../../images/logo.png';
import './NavBar.css';

const NavBar = () => {
    const {totalQuantities} = useSelector(state => state.CartReducer)
    
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);

    
    return (
        <>
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="light"
            fixed="top"
            className="bg-light"
            >
            
            <Navbar.Brand
                as={Link} to="/"
                className="ml-md-5"
                style={{ color: "#3a4256", fontSize: "1.55rem" }}>
                <img
                    alt="Logo"
                    src={Logo}
                    width="100"
                    height="80"
                    className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>

            <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="navbar-nav" />

            <Navbar.Collapse id="navbar-nav" className={isCollapsed}>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/" className="mr-md-5" onClick={() => window.scrollTo(500, 0)} active>Home</Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/addProduct"
                        className="mr-md-5" active>
                        AddProduct
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/cart"
                        className="mr-md-5" active>
                        <div className="navBar-basket">
                            <BsFillBagFill className="navBar-basket-icon" /><span>{totalQuantities}</span>
                        </div>
                    </Nav.Link>
                    
                        <Nav.Link
                            as={Link}
                            to="/login"
                            className="mr-md-5 px-4 btn btn-main" active>
                            Login
                        </Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
         </Navbar>
        </>
    )
}

export default NavBar             