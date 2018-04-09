import { Http, Headers, RequestOptions, Response } from '@angular/http';

class Constants {
    // SERVER NODEJS
    static SERVER_API: String = 'http://localhost:3000/';
    static SERVER_API_USUARIO_LOGIN: String = 'login_usuario_server/';
    static SERVER_API_USUARIO_REGISTRO: String = 'registro_usuario_server/';
    static SERVER_API_USUARIO_PERFIL: String = 'perfil_usuario_server/';
    static SERVER_API_USUARIO_POST: String = 'post_usuario_server/';
}

Object.seal(Constants);
export { Constants };

