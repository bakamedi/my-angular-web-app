var Usuario = require('mongoose').model('Usuario');
var Post 		= require('../models/post.model');
var jwt 		= require('../../config/jwt');

exports.CrearPost = function(req, res){
	jwt.VerificarToken(req.params.token, function(result){
		Usuario.findOne({_id: result.token['_id']},function(err,findUser){
			if(err){
				res.send(err);
				return false;
			}else{
				const postModel = {
					TITULO: req.body.NUEVO_TITULO_POST,
					TEXTO:  req.body.NUEVO_TEXTO_POST,
					FECHA:	Date.now(),
					USUARIO_ID: findUser._id
				}
				var newPost = Post(postModel);
				newPost.save(function(err) {
					if (err)
							res.send(err);
					res.send('post creado');
				});
			}
		});
	});
}

exports.GetIndividualPost = function(req, res){
	jwt.VerificarToken(req.params.token, function (result){
		Post.findById({_id:req.params.idPost}, 'TITULO TEXTO FECHA', function(err, findOnlyPost){
			if(err){
				res.send(err);
			}else{
				res.json(findOnlyPost);
			}
		});
	});
}

exports.GetAllPost = function(req, res){
  jwt.VerificarToken(req.params.token, function(result){
		//console.log('--------------------------');
		//console.log(result.token['_id']);
		//console.log('--------------------------');
    Post.find({USUARIO_ID: result.token['_id']}, 'TITULO TEXTO FECHA',function(err, findPosts){
      if(err){
        res.send(err);
      }else{
        res.json(findPosts);
      }
    }).sort({FECHA:-1});
	});
}

exports.EditarPost = function(req, res){
	jwt.VerificarToken(req.params.token, function(result){
		Post.findById({_id:req.body.ID_POST}, function(err, findPosts){
			findPosts.TITULO =	req.body.NUEVO_TITULO_POST_EDIT;
			findPosts.TEXTO = 	req.body.NUEVO_TEXTO_POST_EDIT;
			findPosts.FECHA =		Date.now();
			findPosts.save(function(err){
				if(err){
					console.log(err);
					res.send(err);
				}else{
					res.status(200).end();
				}
			});
		});
	});
}

exports.EliminarPost = function(req, res){
	jwt.VerificarToken(req.params.token, function(result){
		Post.findByIdAndRemove({_id:req.params.idPost}, (err) =>{
			if(err){
				console.log(err);
			}else{
				res.status(200).end();
			}
		});
	});
}