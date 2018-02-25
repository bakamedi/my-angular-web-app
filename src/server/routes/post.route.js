var post = require('../controllers/post.controller');
const express = require('express');
const router = express.Router();

router.post('/crear_post', post.CrearPost);

module.exports = router;