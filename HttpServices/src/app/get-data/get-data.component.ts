import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

  posts: any = [];

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        console.log(response);
        this.posts = response.body;
      }, error => {
        console.log(error);
        alert('An unexpected error occurred');
      });
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';
    this.service.createPost(post)
      .subscribe(response => {
          console.log(response);
          post['id'] = response.body;
          this.posts.splice(0, 0, post);
      });
  }

  updatePost(post) {
    // patch is used when you update some fields of the object
    this.service.patchPost(post)
      .subscribe(response => {
        console.log(response);
      });
    // update is used, when you update all the fields of the object
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.service.deletePost(post)
      .subscribe(response => {
        console.log(response);
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }

}
