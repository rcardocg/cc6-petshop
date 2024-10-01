import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navcss.css';

const NavigationBar = () => {
  return (
    <Navbar  variant="dark">
       <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
       
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/crearCuenta">Crear Cuenta</Nav.Link>
        <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
        <Nav.Link as={Link} to="/courier">Courier</Nav.Link>
        <Nav.Link as={Link} to="/inventario">Inventario</Nav.Link>
        <Nav.Link as={Link} to="/payment">Pago</Nav.Link>
        <Nav.Link as={Link} to="/Admin">Admin</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;