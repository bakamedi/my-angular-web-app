import { Http, Headers, RequestOptions, Response } from '@angular/http';

class ApiPost {
    // SERVER API
    static API_POST_CREATE_POST: String = 'crear_post/';
    static API_GET_INDV_POST: String = 'get_individual_post/';
    static API_GET_ALL_POST: String = 'get_all_post/';
    static API_POST_EDIT_POST: String = 'editar_post/';
    static API_GET_DEL_POST: String = 'eliminar_post/';
}

Object.seal(ApiPost);
export { ApiPost };
