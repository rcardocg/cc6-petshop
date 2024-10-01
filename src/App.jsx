import { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login'
import AdminView from './pages/adminView'
import Catalog from './pages/catalogo'
import Courier from './pages/elegirCourier'
import Cart from './pages/carrito'
import Inventory from './pages/inventario'
import Payment from './pages/payment'
import CrearCuenta from './pages/crearCuenta';

export default function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />;
        <Route path='Admin' element={<AdminView />} />;
        <Route path='catalogo' element={<Catalog />} />;
        <Route path='courier' element={<Courier />} />;
        <Route path='carrito' element={<Cart />} />;
        <Route path='inventario' element={<Inventory />} />;
        <Route path='payment' element={<Payment />} />;
        <Route path='crearCuenta' element={<CrearCuenta />} />;
      </Routes>
    </BrowserRouter>
    </>
  )
}

