var Usuario = require('mongoose').model('Usuario');
var jwt     = require('../../config/jwt');

exports.PerfilUsuario = function(req, res){
  jwt.VerificarToken(req.params.token, function(result){
    // El pasword debe de estar salteada
    Usuario.findById({_id: result.token['_id']}, 'CORREO PASSWORD NOMBRE APELLIDO',function(err,findUser){
			if(err){
				res.status(500).send('error al encontrar el perfil del usuario');
				return false;
			}else{
        res.json(findUser);
			}
		});
  });
}

exports.EditarUsuario = function(req, res){
  jwt.VerificarToken(req.params.token, function(result){
    Usuario.findById({_id: result.token['_id']}, function(err, findUser){
      findUser.CORREO   =	req.body.CORREO_EDIT;
      findUser.PASSWORD = req.body.PASSWORD_EDIT;
			findUser.NOMBRE   = req.body.NOMBRE_EDIT;
			findUser.APELLIDO =	req.body.APELLIDO_EDIT;
			findUser.save(function(err){
				if(err){
					res.status(500).send('error al editar al usuario');
				}else{
					res.status(200).end();
				}
			});
		});
  });
}