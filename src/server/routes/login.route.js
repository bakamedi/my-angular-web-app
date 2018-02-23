var login = require('../controllers/login.controller');
const express = require('express');
const router = express.Router();

router.post('/obtener_usuario_logeado', login.LogearUsuario);

module.exports = router;