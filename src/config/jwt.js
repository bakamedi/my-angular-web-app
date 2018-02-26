var jwt = require('jsonwebtoken');

exports.VerificarToken = function(token,callback){
  // clave debe estar aparte no quemado
  try {
    jwt.verify(token, 'secreto prueba proyecto', function(err, decoded) {
      if(err){
        console.log(err);
      }else{
        console.log("es valido");
        callback(decoded);
      }
    });
  } catch (error) {
    console.log(error);
  }
  
}