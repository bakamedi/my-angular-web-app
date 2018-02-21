import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../../src/app/models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {

  }

  onSubmit(registerForm: NgForm) {
    console.log(registerForm.value);
  }

}
