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

        <label htmlFor="Name">Nombre:</label>
        <input
          type="text"
          id="Name"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <br />

        <label htmlFor="Email">Correo Electrónico:</label>
        <input
          type="email"
          id="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <label htmlFor="Password">Contraseña:</label>
        <input
          type="password"
          id="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />

        <label htmlFor="Phone">Número de Teléfono:</label>
        <input
          type="text"
          id="Phone"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
        <br />

        <label htmlFor="Direccion">Dirección:</label>
        <input
          type="text"
          id="Direccion"
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
