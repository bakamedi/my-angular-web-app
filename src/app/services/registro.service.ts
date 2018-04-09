import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Constants } from '../constants/global';
import { ApiAuth } from '../constants/api.global.auth';

@Injectable()
export class RegistroService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  registrarUsuario(usuario): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.post(Constants.SERVER_API + '' + Constants.SERVER_API_USUARIO_REGISTRO + '' + ApiAuth.API_POST_USER_REGISTER, JSON.stringify(usuario), this.options);
  }

}
