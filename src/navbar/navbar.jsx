import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pyt from './pyt.png';
import './navcss.css';

const NavigationBar = () => {
  return (
    <Navbar variant="dark" expand="lg"> 
      <Navbar.Brand as={Link} to="/">
      <img 
          src={pyt} 
          style={{ width: '35px', height: 'auto' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/courier">Courier</Nav.Link>
          <Nav.Link as={Link} to="/inventario">Inventario</Nav.Link>
          <Nav.Link as={Link} to="/payment">Pago</Nav.Link>
          <Nav.Link as={Link} to="/Admin">Admin</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
