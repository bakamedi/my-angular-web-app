import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgForm } from '@angular/forms';

import { UserModel } from '../../../../src/app/models/user.model';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor( private userRegService: RegistroService ) { }

  ngOnInit() {

  }

  onSubmit(registerForm: NgForm) {
    console.log(registerForm.value);
    this.regitrarUsuarioForm(registerForm);
  }

  regitrarUsuarioForm(registerForm: NgForm) {
    this.userRegService.registrarUsuario(registerForm.value).subscribe(
      resultRegi => console.log(resultRegi)
    );
  }

}
