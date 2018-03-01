import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgForm } from '@angular/forms';

import { UserModel } from '../../../../src/app/models/user.model';
import { RegistroService } from '../../services/registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  loading = false;
  constructor( private userRegService: RegistroService,
               private router: Router ) { }

  ngOnInit() {

  }

  onSubmit(registerForm: NgForm) {
    this.regitrarUsuarioForm(registerForm);
  }

  regitrarUsuarioForm(registerForm: NgForm) {
    this.loading = true;
    this.userRegService.registrarUsuario(registerForm.value).subscribe(
      data => {
        console.log('----------------------------');
        console.log(data);
        console.log('----------------------------');
        this.router.navigate(['login']);
      },
      error => {
          this.loading = false;
      }
    );
  }

}
