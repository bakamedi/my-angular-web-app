// librerias nodejs
const express       = require('express');
const bodyParser    = require('body-parser');
const path          = require('path');
const http          = require('http');
const cors          = require('cors');
const mongoose      = require('./src/config/mongoose');
const app           = express();
const db            = mongoose();

// archivo de rutas del API
const registro  = require('./src/server/routes/registro.route');
const login     = require('./src/server/routes/login.route');
const post      = require('./src/server/routes/post.route');
const usuario   = require('./src/server/routes/usuario.route');

// Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

// Angular DIST carpeta de salida
app.use(express.static(path.join(__dirname, 'dist')));

// usar ruta principal de la API-NODEJS
app.use('/registro_usuario_server', registro);
app.use('/login_usuario_server', login);
app.use('/post_usuario_server', post);
app.use('/perfil_usuario_server', usuario);

app// Envio de todas las peticiones de Angular
app.get('*', (req, res)=>{
    res.sendfile(path.join(__dirname, 'dist/index.html'));
});

// Seteando PUERTO
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Ejecutandose en localhost:${port}`));