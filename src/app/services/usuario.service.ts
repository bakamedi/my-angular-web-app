import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Constants } from '../constantes/global';

import { LoginService } from './login.service';

@Injectable()
export class UsuarioService {

  private ruta = 'usuario_server/';
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });
  public token: string;

  constructor(private http: Http,
              private loginService: LoginService) { }

  getUsers(): Observable<any> {
      // add authorization header with jwt token
      const headers = new Headers({ 'Authorization': 'Bearer ' + this.loginService.token });
      const options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.get(Constants.SERVER_API + this.ruta + 'obtener_usuario_logeado', options)
          .map((response: Response) => response.json());
  }
}
