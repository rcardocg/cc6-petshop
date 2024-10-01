import React, { useState } from 'react';
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

  return (
    <div>
      <h2>Catálogo de Productos</h2>
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

      <h3>Carrito de Compras</h3>
      <div id="cart">
        <ul id="cart-items">{renderCartItems()}</ul>
        <p>Total: ${total}</p>
        <a href="/payment">
          <button>Proceder al Pago</button>
        </a>
      </div>
    </div>
  );
};

export default Catalogo;
