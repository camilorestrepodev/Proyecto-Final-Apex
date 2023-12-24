const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');  // Agrega esta línea
const mysql = require('mysql');
const app = express();
const PORT = 3000;

// Middleware CORS
app.use(cors());

// Middleware para analizar el cuerpo de la solicitud
app.use(bodyParser.json());

app.post('/api/registrarUsuario', (req, res) => {
  const userData = req.body;

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '050509',
    database: 'prueba',
  });

  connection.connect();

  connection.query('INSERT INTO usuarios SET ?', userData, (error, results, fields) => {
    if (error) {
      console.error('Error al registrar usuario en la base de datos', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      console.log('Usuario registrado en la base de datos:', results);
      res.status(201).json({ message: 'Usuario registrado con éxito' });
    }

    connection.end();
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});