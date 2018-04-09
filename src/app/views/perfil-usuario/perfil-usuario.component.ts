import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  loadingPost = true;
  loadingExito = false;
  loadingError = false;
  public editCorreo: String;
  public editPass: String;
  public editNombre: String;
  public editApellido: String;
  formGroupPerfil: FormGroup;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.cargarPerfil();
  }

  actualizarPerfil(): void {
    this.loadingPost = false;
    this.crearFormularioPerfil(this.editCorreo, this.editPass, this.editNombre, this.editApellido);
    this.usuarioService.editPerfil(JSON.parse(localStorage.getItem('username')).token, this.formGroupPerfil.value)
    .subscribe(
      res => {
        this.cargarPerfil();
        this.loadingExito = true;
        this.loadingError = false;
      },
      error => {
        this.loadingError = true;
        this.loadingExito = false;
        console.log(error);
      }
    );
  }

  crearFormularioPerfil(correo, pass, nombre, apellido): void {
    this.formGroupPerfil = new FormGroup({
      CORREO_EDIT: new FormControl(correo, Validators.required),
      PASSWORD_EDIT: new FormControl(pass, Validators.required),
      NOMBRE_EDIT: new FormControl(nombre, Validators.required),
      APELLIDO_EDIT: new FormControl(apellido, Validators.required)
    });
  }

  cargarPerfil(): void {
    this.usuarioService.getPerfil(JSON.parse(localStorage.getItem('username')).token).subscribe(
      res => {
        this.editCorreo   = res.CORREO;
        this.editPass     = res.PASSWORD;
        this.editNombre   = res.NOMBRE;
        this.editApellido = res.APELLIDO;
      },
        error => {
        console.log(error);
      }
    );
  }

}
