var usuario = require('../src/server/controllers/usuario.server.controller');
const express = require('express');
const router = express.Router();

router.post('regitrar_usuario', usuario.RegistrarUsuario);

module.exports = router;