import { Http, Headers, RequestOptions, Response } from '@angular/http';

class ApiAuth {
    // SERVER API
    static API_GET_USER_LOGIN: String = 'obtener_usuario_logeado/';
    static API_POST_USER_REGISTER: String = 'registrar_usuario/';
}

Object.seal(ApiAuth);
export { ApiAuth };
