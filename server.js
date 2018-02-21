// librerias nodejs
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const mongoose = require('./src/config/mongoose');
const app = express();
const db = mongoose();

// archivo de rutas del API
const usuario = require('./server/routes/usuario');

// Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST carpeta de salida
app.use(express.static(path.join(__dirname, 'dist')));

// usar ruta principal de la API-NODEJS
app.use('/registro_usuario_server', usuario);

// Envio de todas las peticiones de Angular
app.get('*', (req, res)=>{
    res.sendfile(path.join(__dirname, 'dist/index.html'));
});

// Seteando PUERTO
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Ejecutandose en localhost:${port}`));