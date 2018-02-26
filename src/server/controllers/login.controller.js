var Usuario = require('mongoose').model('Usuario');
var jwt = require('jsonwebtoken');

exports.LogearUsuario = function(req, res){
	Usuario.find({CORREO: req.body.CORREO_LOGIN , PASSWORD: req.body.PASSWORD_LOGIN }, '_id',function(err, result){
		if(err){
			return handleError(err);
		}else{
			if(result != undefined){
				var token = jwt.sign({
					token: result
					}, 'secreto prueba proyecto');// no debe de quedar esto en el codigo
				res.json({
					token: token
				});
			}else{
				res.send(JSON.stringify('no hay nada'));
			}
		}
	});
}