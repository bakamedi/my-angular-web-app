var Usuario = require('mongoose').model('Usuario');
var Post = require('../models/post.model');
var jwt = require('../../config/jwt');

exports.CrearPost = function(req, res){
	jwt.VerificarToken(req.params.token, function(result){
		Usuario.findOne({_id:result.token[0]._id},function(err,findUser){
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

exports.GetAllPost = function(req, res){
  jwt.VerificarToken(req.params.token, function(result){
    Post.find({USUARIO_ID: result.token[0]._id}, function(err, findPosts){
      if(err){
        res.send(err);
      }else{
        res.json(findPosts);
      }
    });
	});
}