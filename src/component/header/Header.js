import React from 'react';
import { Container,Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           
            <Navbar  className="p-3" bg="light" variant="light">
            <Container>
            <Navbar.Brand className="text-success" href="#home">CODER TOWNSVILLE</Navbar.Brand>
            <Nav className="me-auto" style={{'margin':'auto'}}>
               
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/mainsec">All Services</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/about">About US</Nav.Link>
        
            </Nav>
            </Container>
  </Navbar>

  
        </div>
    );
};

export default Header;