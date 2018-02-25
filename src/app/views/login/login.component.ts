import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public token: string;

  constructor(private router: Router,
              private loginService: LoginService) {
                const currentUser = JSON.parse(localStorage.getItem('currentUser'));
                this.token = currentUser && currentUser.token;
              }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['inicio']);
    } else {
      this.router.navigate(['login_registro']);
    }
  }

  loginUser(usuarioLoginForm: NgForm) {
    this.loginService.login(usuarioLoginForm.value).
      map(res => res).
      subscribe(
        res => this.createLocalStorage(usuarioLoginForm, res));
  }

  createLocalStorage(usuarioLoginForm, response) {
    const token = response.json() && response.json().token;
      if (token) {
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({ username: usuarioLoginForm.value.CORREO_LOGIN, token: token }));
          this.router.navigate(['inicio']);
      } else {
          this.router.navigate(['login_registro']);
      }
  }

}
