import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { UserModel } from '../../../../src/app/models/user.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  modeloUsuarioRegistro: UserModel; // modelo de usuario
  //Formulario de Registrar Usuario
  userRegistroForm = new FormGroup({
    'CORREO': new FormControl('', Validators.required),
    'PASSWORD': new FormControl('', Validators.required),
    'NOMBRE': new FormControl('', Validators.required),
    'APELLIDO': new FormControl('', Validators.required),
  });

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  formularioRegistro(){
    this.userRegistroForm = this.formBuilder.group({
      'CORREO': this.modeloUsuarioRegistro.CORREO,
      'PASSWORD': this.modeloUsuarioRegistro.PASSWORD,
      'NOMBRE': new FormControl('', Validators.required),
      'APELLIDO': new FormControl('', Validators.required),
    });
  }

  registrarUser = function(user){
    console.log(user);
  }

}
