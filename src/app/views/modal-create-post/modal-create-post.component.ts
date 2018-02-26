import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-modal-create-post',
  templateUrl: './modal-create-post.component.html',
  styleUrls: ['./modal-create-post.component.css']
})
export class ModalCreatePostComponent implements OnInit {

  constructor(private userPostService: PostService) { }

  ngOnInit() {
  }

  crearPost(usuarioPostForm: NgForm) {
    console.log(JSON.parse(localStorage.getItem('username')).token);
    this.userPostService.crearPost(usuarioPostForm.value, JSON.parse(localStorage.getItem('username')).token).subscribe(
      resPost => {
        console.log(resPost);
      }
    );
  }

}
