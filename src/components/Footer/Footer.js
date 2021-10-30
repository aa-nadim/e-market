import { faAngleUp, faMapMarkedAlt, faPaperPlane, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import './Footer.css';

const Footer = () => {
    const [scrolled, setScrolled] = useState(false);

    const scrollHandler = () => {
        window.scrollTo(500, 0);
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        })
    }, []);

    return (
        <footer id="dk-footer" className="dk-footer ">
            <Container>
                <Row>
                    <Col md={12} lg={4}>
                        <div className="dk-footer-box-info">
                            <Link to="/" onClick={scrollHandler} className="footer-logo">
                                <div className="d-flex justify-content-center">
                                    <img src={Logo} alt="footer_logo" height="160" />
                                </div>
                            </Link>
                            <p className="footer-info-text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, impedit?
                                </p>
                        </div>
                    </Col>
                    <Col md={12} lg={8}>
                        <Row>
                            <Col md={6}>
                                <div className="contact-us">
                                    <div className="contact-icon">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                                    </div>
                                    <div className="contact-info">
                                        <h3>Chattogram, Bangladesh.</h3>
                                        <p>Sholokbahar, Chittagong</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="contact-us contact-us-last">
                                    <div className="contact-icon">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <div className="contact-info">
                                        <h3>+880-1859-198366</h3>
                                        <p>Give us a call</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
            </Container>
            <div className="buttom">
                <Container>
                    <Row>
                        <Col md={12} className="order-1 order-md-2">
                            <div className="buttom-menu">
                                <ul>
                                    <li>
                                        <Link to="/" onClick={scrollHandler}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={scrollHandler}>Terms</Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={scrollHandler}>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={scrollHandler}>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="back-to-top">
                <Button variant="dark" onClick={scrollHandler} title="Back to Top" className={scrolled ? "d-block" : "d-none"}>
                    <FontAwesomeIcon icon={faAngleUp} />
                </Button>
            </div>
        </footer>
    );
};

export default Footer;