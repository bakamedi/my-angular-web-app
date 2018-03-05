var Usuario = require('../models/usuario.model');

exports.RegistrarUsuario = function(req, res){
    const usuarioModel = {
        CORREO:     req.body.CORREO_REGISTRO,
        PASSWORD:   req.body.PASSWORD_REGISTRO,
        NOMBRE:     req.body.NOMBRE_REGISTRO,
        APELLIDO:   req.body.APELLIDO_REGISTRO
    }
    var newUser = new Usuario(usuarioModel);
    newUser.save(function(err) {
        if (err){
            res.status(500).send('error al registrar usuario');
            return false;
        }else{
            res.status(200).end();
        }
    });
}