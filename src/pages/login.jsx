import React, { useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    console.log('Datos a enviar:', data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Inicio de sesión</h2>
        
        <input
          type="text"
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
        
        <button type="submit" className="button">Ingresar</button>
        <br />
        
        <a href="/crearCuenta">¿No tiene una cuenta?</a>
      </form>      
    </div>
  );
};

export default Login;
