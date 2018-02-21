var Usuario = require('mongoose').model('Usuario');
const express = require('express');
const router = express.Router();

router.post('login_usuario', usuario);

module.exports = router;