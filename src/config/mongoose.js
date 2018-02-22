const mongoose = require('mongoose');

//Conexion
module.exports = function(){
    const db = mongoose.connect('mongodb://admin:admin@ds115866.mlab.com/api-rest-prueba', function(err){
    //var db = mongoose.connect('mongodb://localhost/proyecto', function(err){
      if (err) {
        //console.log(err);
        console.log("Error de Conexión");
      } else {
        console.log("Conexión Establecida");
      }
    });

    //definir modelos
    require('../server/models/usuario.model');
    //require('../app/models/post.model')

    return db;
};