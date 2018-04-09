import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Constants } from '../constants/global';
import { map } from 'rxjs/operators';
import { ApiAuth } from '../constants/api.global.auth';

@Injectable()
export class LoginService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });
  public token: string;

  constructor(private http: Http) {
  }

  login(usuarioLoginForm): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.post(Constants.SERVER_API + '' + Constants.SERVER_API_USUARIO_LOGIN + '' + ApiAuth.API_GET_USER_LOGIN, JSON.stringify(usuarioLoginForm), this.options);
    }

  logout(): void {
      localStorage.removeItem('username');
  }

}
