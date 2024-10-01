import React, { useState } from 'react';
import './style.css';
import axios from 'axios';

const CrearCuenta = () => {
  // Estados para manejar los campos del formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [tipo, setTipo] = useState('usuario'); // Valor por defecto a 'usuario'

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const data = {
      nombre,
      email,
      contraseña,
      telefono,
      direccion,
      tipo,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/clientes', data);
      console.log('Cliente registrado:', response.data);
      alert('Cuenta creada exitosamente');
    } catch (error) {
      console.error('Error al registrar la cuenta:', error);
      alert('Error al crear la cuenta');
    }
  };

  return (
    <div className="container">
      <h2>Crear cuenta</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Número de teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          required
        />
        <br />
        <label>Tipo de cuenta</label>
        <div className='radio-admin'>
        
        <input
          type="radio"
          name="typeRadio"
          value="administrador"
          checked={tipo === 'administrador'}
          onChange={() => setTipo('administrador')}
        /> 
        Administrador
        </div>
        <div className='radio-user'>
        <input
          type="radio"
          name="typeRadio"
          value="usuario"
          checked={tipo === 'usuario'}
          onChange={() => setTipo('usuario')}
        />
        Usuario
        </div>
        <br />
        <button type="submit" className="button">Ingresar</button>
      </form>

      
    </div>
  );
};

export default CrearCuenta;
