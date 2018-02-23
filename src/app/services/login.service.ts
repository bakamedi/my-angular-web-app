import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Constants } from '../constantes/global';

@Injectable()
export class LoginService {

  private ruta = 'login_usuario_server/';
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });
  public token: string;

  constructor(private http: Http) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(correo: string, password: string): Observable<boolean> {
    // tslint:disable-next-line:max-line-length
    return this.http.post(Constants.SERVER_API + this.ruta + 'obtener_usuario_logeado' , JSON.stringify({ correoResult: correo, password: password }))
        .map((response: Response) => {
            console.log(response);
            console.log(response.json());
            console.log(response.json().token);
            // login successful if there's a jwt token in the response
            const token = response.json() && response.json().token;
            if (token) {
                // set token property
                this.token = token;

                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ correoResult: correo, token: token }));

                // return true to indicate successful login
                return true;
            } else {
                // return false to indicate failed login
                return false;
            }
        });
    }

  logout(): void {
      // clear token remove user from local storage to log user out
      this.token = null;
      localStorage.removeItem('currentUser');
  }

}
