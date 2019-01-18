// --- IMPORTACIONES
const path     = require('path');
const express  = require('express');
const mongoose = require('mongoose');
const morgan   = require('morgan');
const routes = require('./routes.js');

const app      = express();

mongoose.connect('mongodb://localhost:27017/merceria', { useNewUrlParser: true })
  .then(db   => console.log ('Conexión correcta a la BD'))
  .catch(err => console.log ('Error en la conexión a la BD'));

// --- MIDDLEWARE
// Archivos estáticos. Deberás crear un archivo public/index.html para ver el resultado
app.use(express.static(path.join(__dirname , 'public')));
// Logger
app.use(morgan('dev'));

app.use(express.json());
// Rutas
app.use ('/api', routes);

// --- PUERTO DE ESCUCHA
app.listen (3000, () => console.log('Servidor iniciado en puerto 3000'));