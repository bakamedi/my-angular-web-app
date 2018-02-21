var newUsuario = require('mongoose').model('Usuario');

exports.RegistrarUsuario = function(req, res){
    const usuario = {
        CORREO:     req.body.CORREO_REGISTRO,
        PASSWORD:   req.body.PASS_REGISTRO,
        NOMBRE:     req.body.NOMBRE_REGISTRO,
        APELLIDO:   req.body.APELLIDO_REGISTRO
    }
    const newUser = newUsuario(usuario);
    newUser.save(function(err){
        if(err){
            console.log(err);
            return false;
        }else{
            return true;
        }
    });
}