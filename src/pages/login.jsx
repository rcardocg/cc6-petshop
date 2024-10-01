import React, { useState } from 'react';
import './style.css'; // Asegúrate de importar tu archivo CSS aquí
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

    // Aquí puedes manejar la lógica para enviar los datos al servidor,
    // por ejemplo, mediante fetch a "sesion.php".
    console.log('Datos a enviar:', data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Inicio de sesión</h1>
        
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
        
        <button type="submit" className="btn btn-primary">Ingresar</button>
        <br />
        
        <a href="/crearCuenta">¿No tiene una cuenta?</a>
      </form>

      <div>
        <strong>Ricardo Caballeros</strong>
        <br />
        <strong>Kimberly Hernandez</strong>
        <br />
        <strong>Yoselin Mejía</strong>
      </div>
    </div>
  );
};

export default Login;
