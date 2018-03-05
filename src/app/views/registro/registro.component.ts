import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgForm } from '@angular/forms';

import { RegistroService } from '../../services/registro.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  loading = false;
  constructor( private userRegService: RegistroService,
               private router: Router,
               private alertService: AlertService ) { }

  ngOnInit() {

  }

  onSubmit(registerForm: NgForm) {
    this.regitrarUsuarioForm(registerForm);
  }

  regitrarUsuarioForm(registerForm: NgForm) {
    this.loading = true;
    this.userRegService.registrarUsuario(registerForm.value).subscribe(
      data => {
        this.alertService.success(true);
        this.router.navigate(['login']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  }

}
