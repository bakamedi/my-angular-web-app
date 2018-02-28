var usuario = require('../src/server/controllers/usuario.controller');

router.post('/perfil_usuario/:token', post.PerfilUsuario);
router.post('/editar_usuario/:token', post.EditarUsuario);

module.exports = router;