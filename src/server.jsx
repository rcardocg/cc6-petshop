const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

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

// nuevo producto
app.post('/api/productos', async (req, res) => {
    const { nombre, precio, descripcion, stock } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO Producto (nombre, precio, descripcion, stock) VALUES ($1, $2, $3, $4) RETURNING *',
            [nombre, precio, descripcion, stock]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al insertar producto:', error);
        res.status(500).send('Error en el servidor');
    }
});

// nuevo cliente
app.post('/api/clientes', async (req, res) => {
    const { nombre, email, contraseña, telefono, direccion } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO Clientes (nombre, email, contraseña, telefono, direccion) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [nombre, email, contraseña, telefono, direccion]
        );
        res.json(result.rows[0]); 
    } catch (error) {
        console.error('Error al insertar cliente:', error);
        res.status(500).send('Error en el servidor');
    }
});

// nueva venta
app.post('/api/ventas', async (req, res) => {
    const { fecha, courier, total_venta, idcliente } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO Ventas (fecha, courier, total_venta, idcliente) VALUES ($1, $2, $3, $4) RETURNING *',
            [fecha, courier, total_venta, idcliente]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al insertar venta:', error);
        res.status(500).send('Error en el servidor');
    }
});

// detalle de venta
app.post('/api/detalleventas', async (req, res) => {
    const { idventa, idproducto, cantidad_comprada, precio } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO DetalleVentas (idventa, idproducto, cantidad_comprada, precio) VALUES ($1, $2, $3, $4) RETURNING *',
            [idventa, idproducto, cantidad_comprada, precio]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al insertar detalle de venta:', error);
        res.status(500).send('Error en el servidor');
    }
});

// Iniciar el servidor en el puerto 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
