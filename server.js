import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;
import cors from 'cors';

// Crear la aplicación de Express
const app = express();

app.use(cors());
app.use(express.json());

// Conexión a PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'petstore',
    password: '123456',
    port: 5432,
});

// nuevo cliente
app.post('/api/clientes', async (req, res) => {
    const { nombre, email, contraseña, telefono, direccion, tipo } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO Clientes (nombre, email, contraseña, telefono, direccion, tipo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [nombre, email, contraseña, telefono, direccion, tipo]
        );
        res.json(result.rows[0]); 
    } catch (error) {
        console.error('Error al insertar cliente:', error);
        console.log(error)
        res.status(500).send('Error en el servidor');
    }
});

// Obtener todos los clientes
app.get('/api/clientes', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Clientes');
        res.json(result.rows);
    } catch (error) {
        console.error('Error al obtener clientes:', error);
        res.status(500).send('Error en el servidor');
    }
});


// obtener productos
app.get('/api/productos', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM Producto'
        );
        res.json(result.rows);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).send('Error en el servidor');
    }
});


// Iniciar el servidor en el puerto 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});