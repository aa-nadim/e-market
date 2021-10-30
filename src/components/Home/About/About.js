import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './About.css';

const About = () => {
    return (
        <section className="about-container">
            <Container fluid>
                <Row className="align-items-center justify-content-center banner">
                    <Col md={6}>
                        <Fade left duration={2000} distance="40px">
                            <Image src={`https://raw.githubusercontent.com/aa-nadim/Like-Electronics-client-side/main/src/Images/about.png`} fluid />
                        </Fade>
                    </Col>
                    <Col md={4} className="p-md-5 mt-md-0 mt-4">
                        <Fade right duration={2000} distance="40px">
                            <p>About Our Company</p>
                            <h3>How We Can Help you</h3>
                            <p className="text-muted my-4 pr-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestiae nemo ullam, quod tenetur neque explicabo eius voluptates voluptas, assumenda facere quisquam aperiam deserunt dolorum quas autem asperiores error doloribus.</p>
                            {/* <Button
                                href="#pricing">
                                Learn More
                            </Button> */}
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;