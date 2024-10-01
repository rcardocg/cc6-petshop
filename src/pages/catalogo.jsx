import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './style.css';

const Catalogo = () => {
  // Definir el catálogo de productos
  const [productos] = useState([
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 200 },
    // Agrega más productos aquí
  ]);

  // Estado para el carrito y el total
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal

  // Función para agregar un producto al carrito
  const addToCart = (id, price) => {
    setCart([...cart, { id, price }]);
    setTotal(total + price);
  };

  // Función para renderizar el carrito
  const renderCartItems = () => {
    return cart.map((item, index) => (
      <li key={index}>
        Producto ID: {item.id} - Precio: ${item.price}
      </li>
    ));
  };

  // Controlar la apertura y cierre del modal
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <h2>Productos</h2>
      <div id="product-list">
        {productos.map((producto) => (
          <div className="product" key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <button onClick={() => addToCart(producto.id, producto.precio)}>
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>

      <Button variant="primary" onClick={handleShow}>
        Ver Carrito
      </Button>

      {/* Modal para el carrito */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul id="cart-items">{renderCartItems()}</ul>
          <p>Total: ${total}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <a href="/payment">
            <Button variant="primary" onClick={handleClose}>
              Proceder al Pago
            </Button>
          </a>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Catalogo;
