var Usuario = require('mongoose').model('Usuario');
var jwt = require('jsonwebtoken');


exports.LogearUsuario = function(req, res){
	Usuario.find({CORREO: req.body.CORREO_LOGIN , PASSWORD: req.body.PASSWORD_LOGIN }, '_id',function(err, result){
		if(err){
				return handleError(err);
		}else{
      console.log(req.body.CORREO_LOGIN);
      console.log(req.body.PASSWORD_LOGIN);
			console.log('---------------------------------------');
			console.log(result);
			console.log('---------------------------------------');
			if(result != undefined){
				var token = jwt.sign({
					exp: Math.floor(Date.now() / 1000) + (10 * 10),
					token: result
					}, 'secreto prueba proyecto'
				);
				res.json({
					token: token
				});
			}else{
				res.send(JSON.stringify('no hay nada'));
			}
		}
	});
}