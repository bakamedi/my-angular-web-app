import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  public token: string;

  constructor(private router: Router,
              private loginService: LoginService,
              private alertService: AlertService) {
                const currentUser = JSON.parse(localStorage.getItem('username'));
                this.token = currentUser && currentUser.token;
              }

  ngOnInit() {
    if (localStorage.getItem('username')) {
      this.router.navigate(['inicio']);
    } else {
      this.router.navigate(['login_registro']);
    }
  }

  loginUser(usuarioLoginForm: NgForm) {
    this.loading = true;
    this.loginService.login(usuarioLoginForm.value).
      map(res => res).
      subscribe(
        res => {
          this.createLocalStorage(usuarioLoginForm, res);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
    );
  }

  createLocalStorage(usuarioLoginForm, response) {
    const token = response.json() && response.json().token;
      if (token) {
          this.token = token;
          localStorage.setItem('username', JSON.stringify({ username: usuarioLoginForm.value.CORREO_LOGIN, token: token }));
          location.href = '/inicio';
      } else {
          this.router.navigate(['login_registro']);
      }
  }

}
