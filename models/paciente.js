'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GrupoFamiliarSchema = new Schema(
  {
    esposa_nombre: String,
    esposa_edad: Number,
    hijo_nombre: String,
    hijo_edad: Number,
    padres_nombre: String
  },
  { _id: false }
);

var PacienteSchema = new Schema({
  nombrePaciente: String,
  cedulaPaciente: String,
  direccionPaciente: String,
  grupo_familiar: GrupoFamiliarSchema,
  id_doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' }
});

module.exports = mongoose.model('Paciente', PacienteSchema, 'pacientes');
