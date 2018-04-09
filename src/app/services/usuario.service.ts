import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Constants } from '../constants/global';
import { ApiUser } from '../constants/api.global.user';

@Injectable()
export class UsuarioService {

  private ruta = 'perfil_usuario_server/';
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getPerfil(token): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get(Constants.SERVER_API + '' + Constants.SERVER_API_USUARIO_PERFIL + `${ApiUser.API_GET_USER}${token}`, this.options).map(res => res.json());
  }

  editPerfil(token, usuario): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.post(Constants.SERVER_API + '' + Constants.SERVER_API_USUARIO_PERFIL + `${ApiUser.API_POST_USER_EDIT}${token}`, JSON.stringify(usuario), this.options);
  }

}

