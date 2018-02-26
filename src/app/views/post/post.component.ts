import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { PostService } from '../../services/post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  state;
  public listaPost = [];
  constructor(private userPostService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.userPostService.getAllPost(JSON.parse(localStorage.getItem('username')).token)
    .subscribe( jsonPosts => {
      this.listaPost = jsonPosts;
    });
  }

  crearPost(usuarioPostForm: NgForm) {
    this.userPostService.crearPost(usuarioPostForm.value, JSON.parse(localStorage.getItem('username')).token)
    .subscribe(
     res =>  {
       this.getPosts();
      },
      error => console.log(error),
      () => this.state = false
    );
  }

}
