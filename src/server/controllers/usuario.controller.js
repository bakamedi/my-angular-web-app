var Usuario = require('mongoose').model('Usuario');
var jwt     = require('../../config/jwt');

exports.PerfilUsuario = function(req, res){
  jwt.VerificarToken(req.params.token, function(result){
    // Busca perfil usuario
    // El pasword debe de estar salteada
    Usuario.findById({_id: result.token['_id']}, 'CORREO PASSWORD NOMBRE APELLIDO',function(err,findUser){
			if(err){
				res.send(err);
				return false;
			}else{
        res.json(findUser);
			}
		});
  });
}

exports.EditarUsuario = function(req, res){
  jwt.VerificarToken(req.params.token, function(result){
		console.log(result);
    Usuario.findById({_id: result.token['_id']}, function(err, findUser){
      findUser.CORREO   =	req.body.CORREO_EDIT;
      findUser.PASSWORD = req.body.PASSWORD_EDIT;
			findUser.NOMBRE   = req.body.NOMBRE_EDIT;
			findUser.APELLIDO =	req.body.APELLIDO_EDIT;
			findUser.save(function(err){
				if(err){
					console.log(err);
				}else{
					res.status(200).end();
				}
			});
		});
  });
}