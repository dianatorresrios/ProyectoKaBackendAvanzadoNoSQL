const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  dni: String,
  nombres: String,
  apellidos: String,
  fechaNacimiento: Date,
  telefono: String,
  correo: String,
  contraseña: String,
  nombreUsuario: String,
});

module.exports = mongoose.model('Admin', adminSchema);
