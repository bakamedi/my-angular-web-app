var Usuario = require('mongoose').model('Usuario');
var jwt     = require('../../config/jwt');

exports.PerfilUsuario = function(req, res){
  jwt.VerificarToken(req.params.token, function(result){
    // Busca perfil usuario
    Usuario.findById({_id:result.token[0]._id}, 'CORREO NOMBRE APELLIDO',function(err,findUser){
			if(err){
				res.send(err);
				return false;
			}else{
        res.json(result);
			}
		});
  });
}

exports.EditarUsuario = function(req, res){
  jwt.VerificarToken(req.params.token, function(result){
    // Edita perfil usuario
    Usuario.findById({_id:result.token[0]._id}, function(err, findUser){
      findUser.CORREO   =	req.body.CORREO_EDIT;
      findUser.PASSWORD = req.body.PASSWORD_EDIT;
			findUser.NOMBRE   = req.body.NOMBRE_EDIT;
			findUser.APELLIDO =	req.body.APELLIDO_EDIT;
			findPosts.save(function(err){
				if(err){
					console.log(err);
				}else{
					res.status(200).end();
				}
			});
		});
  });
}