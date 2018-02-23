var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
  CORREO:{
    type: String,
    unique: true
  },
  PASSWORD: String,
  NOMBRE: 	String,
  APELLIDO: String
});

module.exports = mongoose.model('Usuario', usuarioSchema);