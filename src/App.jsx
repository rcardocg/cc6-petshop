import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './navbar/navbar';
import Login from './pages/login';
import AdminView from './pages/adminView';
import Catalog from './catalogo/catalogo';
import Courier from './pages/elegirCourier';
import Inventory from './pages/inventario';
import Payment from './payment/payment';
import CrearCuenta from './pages/crearCuenta';


export default function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route index element={<Login />} />
        <Route path='Admin' element={<AdminView />} />
        <Route path='catalogo' element={<Catalog />} />
        <Route path='courier' element={<Courier />} />
        <Route path='inventario' element={<Inventory />} />
        <Route path='payment' element={<Payment />} />
        <Route path='crearCuenta' element={<CrearCuenta />} />
      </Routes>
    
    </BrowserRouter>
  );
}
