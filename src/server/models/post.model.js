var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  TITULO:   String,
  TEXTO: 	  String,
  FECHA:    { type: Date, default: Date.now },
  USUARIO_ID: String
});

module.exports = mongoose.model('Post', postSchema);