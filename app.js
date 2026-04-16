// Crear aplicación Express

'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS (configurar cuando haya rutas consumidas desde el navegador)

// Rutas: montar bajo /api cuando existan (ej. app.use('/api', require('./routes/...')))

module.exports = app;
