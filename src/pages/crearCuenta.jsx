import React, { useState } from 'react';
import './style.css';

const CrearCuenta = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [tipoCuenta, setTipoCuenta] = useState('usuario'); 

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = {
      nombre,
      email,
      password,
      telefono,
      direccion,
      tipoCuenta,
    };

    console.log('Datos a enviar:', data);
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        <div className="radio-admin">
          <input
              type="radio"
              name="typeRadio"
              value="administrador"
              checked={tipoCuenta === 'administrador'}
              onChange={() => setTipoCuenta('administrador')}
          />
          Administrador
        </div>
        <div className="radio-user">  
          <input
              type="radio"
              name="typeRadio"
              value="usuario"
              checked={tipoCuenta === 'usuario'}
              onChange={() => setTipoCuenta('usuario')}
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
