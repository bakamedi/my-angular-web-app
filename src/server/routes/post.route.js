var post = require('../controllers/post.controller');
const express = require('express');
const router = express.Router();

router.post('/crear_post/:token', post.CrearPost);
router.get('/get_all_post/:token', post.GetAllPost);
router.post('/editar_post/:token', post.EditarPost);
router.delete('/eliminar_post/:token/:idPost', post.EliminarPost);

module.exports = router;