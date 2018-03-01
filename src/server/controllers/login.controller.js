var Usuario = require('mongoose').model('Usuario');
var jwt = require('../../config/jwt');

exports.LogearUsuario = function(req, res){
	// saltear password
	Usuario.findOne({CORREO: req.body.CORREO_LOGIN , PASSWORD: req.body.PASSWORD_LOGIN }, '_id',function(err, result){
		if(err){
			return handleError(err);
		}else{
			console.log(result);
			if(result != undefined && result != [] && result != null){
				jwt.CrearToken(result, function(response){
					res.json({
						token: response
					});
				});
			}else{
				res.send(JSON.stringify('FALSE'));
			}
		}
	});
}

exports.VerificarSesionUsuario = function(req, res){
	jwt.VerificarToken(req.params.token, function(result){
		if(!result){
			console.log(result);
			res.json('TRUE');//sesion expirada
		}else{
			res.json('FALSE');//sesion en local
		}
	});
} 