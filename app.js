  const express = require('express');
  const mysql = require('mysql');
  const bodyParser = require('body-parser');
  const path = require('path');

  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Configuración de la base de datos
  const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'comercio'
  });

  db.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err);
      return;
    }
    console.log('Conectado a la base de datos MySQL');
  });

  // Ruta de registro
  app.post('/register', (req, res) => {
    const { userName, userEmail, userPassword } = req.body;

    if (!userName || !userEmail || !userPassword) {
      return res.status(400).send('Todos los campos son obligatorios');
    }

    const query = 'INSERT INTO usuarios (Nombre, Correo, Contrasena) VALUES (?, ?, ?)';
    db.query(query, [userName, userEmail, userPassword], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error en el servidor al registrar el usuario');
      }

      res.status(201).send('Usuario registrado correctamente');
    });
  });

  // Servir archivos estáticos
  app.use(express.static(path.join(__dirname, '..', 'actualizacion5')));
  app.use(express.static(path.join(__dirname, 'actualizacion5', 'regristro.html')));

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });

  app.post('/login', (req, res) => {
    const { userEmail, userPassword } = req.body;

    if (!userEmail || !userPassword) {
        return res.status(400).send('Todos los campos son obligatorios');
    }

    db.query('SELECT * FROM usuarios WHERE Correo = ?', [userEmail], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error en el servidor');
        }

        if (results.length === 0) {
            return res.status(401).send('Correo o contraseña incorrectos');
        }

        const user = results[0];

        if (userPassword.trim() !== user.Contrasena.trim()) {
            return res.status(401).send('Correo o contraseña incorrectos');
        }

        // Respuesta que indica que la sesión es correcta
        res.send({ message: 'Iniciaste sesión correctamente', isAuthenticated: true });
    });
  });
