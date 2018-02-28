import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Constants } from '../constantes/global';
import { map } from 'rxjs/operators';

@Injectable()
export class PostService {

  private ruta = 'post_usuario_server/';
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http  ) { }

  crearPost(usuarioPostForm, token): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.post(Constants.SERVER_API + this.ruta + `crear_post/${token}` , JSON.stringify(usuarioPostForm), this.options);
  }

  getAllPost(token): Observable<any> {
    return this.http.get(Constants.SERVER_API + this.ruta + `get_all_post/${token}`).map(res => res.json());
  }

  editPost(usuarioPostEditForm, token): Observable<any> {
    return this.http.post(Constants.SERVER_API + this.ruta + `editar_post/${token}`, JSON.stringify(usuarioPostEditForm), this.options);
  }

  deletePost(token, idPost): Observable<any> {
    return this.http.delete(Constants.SERVER_API + this.ruta + `eliminar_post/${token}/${idPost}`, this.options);
  }

}
