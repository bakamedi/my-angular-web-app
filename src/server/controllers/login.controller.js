var Usuario = require('mongoose').model('Usuario');

exports.LogearUsuario = function(req, res){
    Usuario.findOne({'CORREO':req.body.CORREO_LOGIN}, 'PASSWORD',function(err, usuario){
        if(err){
            console.log(err);
            return false;
        }else{
            if(usuario.PASSWORD == req.body.CORREO_LOGIN){
                return true;
            }
            else{
                return false;
            }
        }
    });
}