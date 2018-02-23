import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Constants } from '../constantes/global';

@Injectable()
export class RegistroService {

  private ruta = 'registro_usuario_server/';
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  registrarUsuario(usuario): Observable<any> {
    return this.http.post(Constants.SERVER_API + this.ruta + 'registrar_usuario', JSON.stringify(usuario), this.options);
  }

}
