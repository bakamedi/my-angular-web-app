var usuario = require('../controllers/usuario.controller');
const express = require('express');
const router = express.Router();

router.get('/perfil_usuario/:token', usuario.PerfilUsuario);
router.post('/editar_usuario/:token', usuario.EditarUsuario);

module.exports = router;