import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import { Constants } from '../constantes/global';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {

  private ruta = 'login_usuario_server/';
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });
  public token: string;

  constructor(private http: Http) {
  }

  login(usuarioLoginForm): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.post(Constants.SERVER_API + this.ruta + 'obtener_usuario_logeado' , JSON.stringify(usuarioLoginForm), this.options);
    }

  logout(): void {
      localStorage.removeItem('username');
  }

  verificarSesionUsuario(token): Observable<any> {
    return this.http.get(Constants.SERVER_API + this.ruta + `verificar_session/${token}`).map(res => res.json());
  }

}
