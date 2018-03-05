import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-individual',
  templateUrl: './post-individual.component.html',
  styleUrls: ['./post-individual.component.css']
})
export class PostIndividualComponent implements OnInit {

  loading: false;
  jsonOnlyPost = [];
  private onlyIdPost: String;
  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private router: Router) {
    this.route.params.subscribe(params => {
      this.onlyIdPost = params['onlyIdPost'];
    });
  }

  ngOnInit() {
    this.getOnlyPost();
  }

  goBack() {
    this.router.navigate(['inicio']);
  }

  getOnlyPost() {
    this.postService.getIndividualPost(JSON.parse(localStorage.getItem('username')).token, this.onlyIdPost).subscribe( res => {
      this.jsonOnlyPost = res;
      this.loading = false;
    });
  }

}
