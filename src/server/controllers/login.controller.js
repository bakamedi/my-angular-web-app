var Usuario = require('mongoose').model('Usuario');
var jwt = require('jsonwebtoken');

exports.LogearUsuario = function(req, res){
    Usuario.find({'CORREO': req.body.CORREO_LOGIN , 'PASSWORD': req.body.PASSWORD_LOGIN },'_id',function(err, result){
        if(err){
            return handleError(err);
        }else{
            if(result){
                console.log(result._id);
                var token = jwt.sign({
                    token: result._id
                  }, 'secreto no lo leas perro >:v', 
                  { expiresIn: 30 * 30 },
                  { algorithm: 'RS256'}
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