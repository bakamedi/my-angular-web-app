import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Constants } from '../constantes/global';

@Injectable()
export class UsuarioService {

  private ruta = 'perfil_usuario_server/';
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getPerfil(token): Observable<any> {
    return this.http.get(Constants.SERVER_API + this.ruta + `perfil_usuario/${token}`, this.options).map(res => res.json());
  }

  editPerfil(token, usuario): Observable<any> {
    return this.http.post(Constants.SERVER_API + this.ruta + `editar_usuario/${token}`, JSON.stringify(usuario), this.options);
  }

}

