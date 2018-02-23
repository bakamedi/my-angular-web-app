var registro = require('../controllers/registro.controller');
const express = require('express');
const router = express.Router();

router.post('/registrar_usuario', registro.RegistrarUsuario);

module.exports = router;