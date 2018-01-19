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
        alert('An unexpected error occurred, get');
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
      }, error => {
        console.log(error);
        alert('An unexpected error occurred, post');
      });
  }

  updatePost(post) {
    // patch is used when you update some fields of the object
    this.service.patchPost(post)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
        alert('An unexpected error occurred, patch');
      });
    // update is used, when you update all the fields of the object
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
        alert('An unexpected error occurred, update');
      });
  }

  deletePost(post) {
    this.service.deletePost(345)
      .subscribe(response => {
        console.log(response);
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: Response) => {
        if (error.status === 404) {
          alert('This post has already been deleted');
        } else {
          console.log(error);
          alert('An unexpected error occurred, delete');
        }
      });
  }

}
