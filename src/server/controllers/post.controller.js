var Usuario = require('mongoose').model('Usuario');

exports.CrearPost = function(req, res){
	const postModel = {
		TITULO: req.body.NUEVO_TITULO_POST,
		TEXTO:  req.body.NUEVO_TEXTO_POST
	}
	//var newPost = new Usuario(postModel);
	Usuario.findOne({CORREO:req.body.CORREO},'_id',function(err,findUser){
		if(err){
			res.send(err);
			return false;
		}else{
			console.log(JSON.stringify(findUser));
			//console.log(JSON.stringify(findUser[_id]));
			//console.log(JSON.stringify(findUser['_id']));
			res.send(findUser);
			return true;
			/*
			newPost.save(function(err) {
				if (err)
						res.send(err);
						return false;
				return true;
			});
			User.add(newPost);
			*/
		}
	});
}