import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navcss.css';

const NavigationBar = () => {
  return (
    <Navbar >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/crearCuenta">Crear Cuenta</Nav.Link>
          <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
          <Nav.Link as={Link} to="/courier">Courier</Nav.Link>
          <Nav.Link as={Link} to="/carrito">Carrito</Nav.Link>
          <Nav.Link as={Link} to="/inventario">Inventario</Nav.Link>
          <Nav.Link as={Link} to="/payment">Pago</Nav.Link>
          <Nav.Link as={Link} to="/Admin">Admin</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
