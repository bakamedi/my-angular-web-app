var registro = require('../controllers/registro.controller');
const express = require('express');
const router = express.Router();

router.post('regitrar_usuario', registro.RegistrarUsuario);

module.exports = router;