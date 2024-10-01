import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './catcss.css';

const Catalogo = () => {
  //catálogo de productos
  const [productos] = useState([
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 200 },
    { id: 3, nombre: 'Producto 3', precio: 150 },
    { id: 4, nombre: 'Producto 4', precio: 250 },
    { id: 5, nombre: 'Producto 5', precio: 300 },
    { id: 6, nombre: 'Producto 6', precio: 180 },
    { id: 7, nombre: 'Producto 7', precio: 220 },
    { id: 8, nombre: 'Producto 8', precio: 90 },
  ]);
 
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false); 
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  //agregar un producto al carrito
  const addToCart = (id, price) => {
    setCart([...cart, { id, price }]);
    setTotal(total + price);
  };

  const renderCartItems = () => {
    return cart.map((item, index) => (
      <li key={index}>
        Producto ID: {item.id} - Precio: Q{item.price}
      </li>
    ));
  };

  // Filtro
  const filteredProducts = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Manejar el pago y pasar el total a la página de pago
  const handleProceedToPayment = () => {
    navigate('/payment', { state: { total: total } });
  };

  return (
    <div>
      <h2>Productos</h2>

      <div className="filtro">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          
        />
        </div>

        <div className='but'>
        <Button variant="primary" onClick={handleShow}>
          Ver Carrito
        </Button>
        </div>
      

      <div id="product-list">
        {filteredProducts.map((producto) => (
          <div className="product" key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>Precio: Q{producto.precio}</p>
            <button onClick={() => addToCart(producto.id, producto.precio)}>
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul id="cart-items">{renderCartItems()}</ul>
          <p>Total: Q{total}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <a href="/payment">
            <Button variant="primary" onClick={handleProceedToPayment}>
              Proceder al Pago
            </Button>
          </a>
        </Modal.Footer>
      </Modal>
</div>
  );
};

export default Catalogo;
