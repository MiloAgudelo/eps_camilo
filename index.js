'use strict';

var mongoose = require('mongoose');
var app = require('./app');

var mongoUri = 'mongodb://127.0.0.1:27017/EPS';
var port = 3000;

mongoose
  .connect(mongoUri)
  .then(function () {
    console.log('Conexión a MongoDB establecida (base de datos: EPS)');

    app.listen(port, function () {
      console.log('Servidor corriendo en http://localhost:' + port);
    });
  })
  .catch(function (err) {
    console.error('Error al conectar a MongoDB', err);
    process.exit(1);
  });
