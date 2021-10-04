import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
const img = `https://lh3.googleusercontent.com/proxy/ZTATezK6j5i38gkXWsOlowkjI1PRPcMH8oAayUyEnN56XlPhg5wwFtW95FW8Xk3tnzEz5OjQ4zsoMaV2i-cOiYALmyaxJTIE9hi9`;

const Me = () => {
    return (
        <div>
             <Navbar/>
            <Container className="p-5">
                <Row className="d-flex align-items-center">
                    <Col lg={6} md={6} xs={12}>
                        <img className="w-100" src={img} alt="" />
                    </Col>
                    <Col lg={6} md={6} xs={12}>
                        <h3>About Us</h3>
                        <p>Coder Townsville learning, is the delivery of learning and training through digital resources. Although eLearning is based on formalized learning, it is provided through electronic devices such as computers, tablets and even cellular phones that are connected to the internet. E-learning definition is defined as providing Training and development to the Students/Employees through various Electronic media such as the Internet, audio, video etc. Web-based learning is meant by e-learning which commonly referred to as electronic learning or Virtual learning.</p>
                    </Col>
                </Row>
            </Container>
         
        </div>
    );
};

export default Me;