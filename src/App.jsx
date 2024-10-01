import { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login'
import AdminView from './pages/adminView'
import Catalog from './pages/catalogo'
import Courier from './pages/elegirCourier'
import Cart from './pages/carrito'
import Inventory from './pages/inventario'


export default function App() {

  const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data", error);
            });
    }, []);

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
      </Routes>
    </BrowserRouter>
    </>
  );
}

