import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Constants } from '../constants/global';
import { ApiPost } from '../constants/api.global.post';
import { map } from 'rxjs/operators';

@Injectable()
export class PostService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http  ) { }

  crearPost(usuarioPostForm, token): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.post(Constants.SERVER_API + '' + Constants.SERVER_API_USUARIO_POST + `${ApiPost.API_POST_CREATE_POST}${token}` , JSON.stringify(usuarioPostForm), this.options);
  }

  getIndividualPost(token, idPost): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get(Constants.SERVER_API + '' + Constants.SERVER_API_USUARIO_POST + `${ApiPost.API_GET_INDV_POST}${token}/${idPost}`).map(res => res.json());
  }

  getAllPost(token): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get(Constants.SERVER_API + '' + Constants.SERVER_API_USUARIO_POST + `${ApiPost.API_GET_ALL_POST}${token}`).map(res => res.json());
  }

  editPost(usuarioPostEditForm, token): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.post(Constants.SERVER_API + '' + Constants.SERVER_API_USUARIO_POST + `${ApiPost.API_POST_EDIT_POST}${token}`, JSON.stringify(usuarioPostEditForm), this.options);
  }

  deletePost(token, idPost): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.delete(Constants.SERVER_API + '' + Constants.SERVER_API_USUARIO_POST + `${ApiPost.API_GET_DEL_POST}${token}/${idPost}`, this.options);
  }

}
