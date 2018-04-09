import { Http, Headers, RequestOptions, Response } from '@angular/http';

class ApiUser {
    // SERVER API
    static API_GET_USER: String = 'perfil_usuario/';
    static API_POST_USER_EDIT: String = 'editar_usuario/';
}

Object.seal(ApiUser);
export { ApiUser };
