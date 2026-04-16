'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DoctorSchema = new Schema({
  id: String,
  nombre: String,
  cedula: String,
  especializacion: String
});

module.exports = mongoose.model('Doctor', DoctorSchema, 'doctores');
