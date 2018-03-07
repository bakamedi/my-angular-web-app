const mongoose = require('mongoose');

//Conexion
module.exports = function(){
  const db = mongoose.connect('mongodb://admin:admin@ds115866.mlab.com:15866/api-rest-prueba', function(err){
    if (err) {
      console.log("Error de Conexión");
    } else {
      console.log("Conexión Establecida");
    }
  });

  return db;
};