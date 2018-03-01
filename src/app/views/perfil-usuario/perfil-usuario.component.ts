import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  loading = false;
  public editCorreo: String;
  public editPass: String;
  public editNombre: String;
  public editApellido: String;
  formGroupPerfil: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  crearFormularioPerfil() {

  }

}
