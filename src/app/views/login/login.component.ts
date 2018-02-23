import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgForm } from '@angular/forms';

import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private loginService: LoginService) { }

  ngOnInit() {
  }

  loginUser(usuarioLoginForm: NgForm) {
    this.loginService.login(usuarioLoginForm.value.CORREO_LOGIN, usuarioLoginForm.value.PASSWORD_LOGIN).subscribe(
      result => {
        console.log('----->' + result);
        if (result === true) {
          this.router.navigate(['/inicio']);
        } else {
          this.router.navigate(['/']);
        }
      }
    );
  }

}
