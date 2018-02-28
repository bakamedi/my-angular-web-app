import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../services/login.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router,
              private userService: LoginService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.verificarSesion()) {
        return true;
      } else {
        return false;
      }
  }

  verificarSesion(): boolean {
    this.userService.verificarSesionUsuario(JSON.stringify(localStorage.getItem('username'))).subscribe( res => {
      if (JSON.stringify(res) === 'TRUE') {
        return true;
      }
    });
    return false;
  }
}
