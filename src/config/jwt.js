var jwt = require('jsonwebtoken');

exports.VerificarToken = function(token, callback){
  // clave debe estar aparte no quemado
  try {
    jwt.verify(token, 'secreto prueba proyecto', function(err, decoded) {
      if(err){
        callback(false);
      }
      else{
        callback(decoded);
      }
    });
  } catch (error) {
    callback(false);
  }
}

exports.CrearToken = function(resultId, callback){
  try {
    var token = jwt.sign({
      token: resultId
      }, 'secreto prueba proyecto');// no debe de quedar el pass quemado en el codigo
      callback(token); 
  } catch (error) {
    callback(false);
  }
}

