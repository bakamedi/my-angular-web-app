var newUsuario = require('mongoose').model('Usuario');

exports.RegistrarUsuario = function(req, res){
    const usuario = {
        CORREO:     req.body.CORREO_REGISTRO,
        PASSWORD:   req.body.PASSWORD_REGISTRO,
        NOMBRE:     req.body.NOMBRE_REGISTRO,
        APELLIDO:   req.body.APELLIDO_REGISTRO
    }
    const newUser = newUsuario(usuario);
    console.log("_____________BACKEND_____________");
    console.log(usuario);
    console.log("_________________________________");
    /*
    newUser.save(function(err){
        if(err){
            console.log(err);
            return false;
        }else{
            return true;
        }
    });
    */
}