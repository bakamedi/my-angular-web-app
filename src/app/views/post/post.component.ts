import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { PostService } from '../../services/post.service';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  loading = false;
  public idPost: String;
  public editTitulo: String;
  public editTexto: String;
  formGroupPostsEdit: FormGroup;
  public formGroupPosts: FormGroup;
  private state;
  public listaPost = [];
  constructor(private userPostService: PostService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.crearFormularioPostAdd();
    this.getPosts();
  }

  getPosts() {
    this.loading = true;
    this.userPostService.getAllPost(JSON.parse(localStorage.getItem('username')).token)
    .subscribe( jsonPosts => {
      this.listaPost = jsonPosts;
      this.loading = false;
    });
  }

  crearPost() {
    this.userPostService.crearPost(this.formGroupPosts.value, JSON.parse(localStorage.getItem('username')).token)
    .subscribe(
     res =>  {
       this.getPosts();
       this.formGroupPosts.reset();
      },
      error => console.log(error),
      () => this.state = false
    );
  }

  editarPost() {
    this.crearFormularioPostEdit(this.editTitulo, this.editTexto, this.idPost);
    this.userPostService.editPost(this.formGroupPostsEdit.value, JSON.parse(localStorage.getItem('username')).token)
    .subscribe(
      res => {
        this.getPosts();
      },
      error => console.log(error),
      () => this.state = false
    );
  }

  eliminarPost() {
    console.log('eliminar post');
    this.userPostService.deletePost(JSON.parse(localStorage.getItem('username')).token, this.idPost)
    .subscribe( res => {
        this.getPosts();
      },
        error => console.log(error),
      () => this.state = false
    );
  }

  leerPostIndividual(postId) {
    this.router.navigate(['/inicio/post', {onlyIdPost: postId}]);
  }

  crearFormularioPostAdd() {
    this.formGroupPosts = new FormGroup({
      NUEVO_TITULO_POST: new FormControl('', Validators.required),
      NUEVO_TEXTO_POST: new FormControl('', Validators.required)
    });
  }

  crearFormularioPostEdit(editTitulo, editTexto, idPost) {
    this.formGroupPostsEdit = new FormGroup({
      NUEVO_TITULO_POST_EDIT: new FormControl(editTitulo, Validators.required),
      NUEVO_TEXTO_POST_EDIT: new FormControl(editTexto, Validators.required),
      ID_POST: new FormControl(idPost, Validators.required)
    });
  }

  tempPost(valPost, valor) {
    if (valor === 1) {// editamos
      this.idPost = valPost._id;
      this.editTexto = valPost.TEXTO;
      this.editTitulo = valPost.TITULO;
    }
    if (valor === 0) {// eliminamos
      this.idPost = valPost._id;
    }
  }

}
