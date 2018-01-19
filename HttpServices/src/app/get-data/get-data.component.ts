import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {AppError} from '../commons/errors/app-error';
import {NotFoundError} from '../commons/errors/not-found-error';
import {BadRequestError} from '../commons/errors/bad-request-error';

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
      }, (error: AppError) => {
        if (error instanceof BadRequestError) {
          alert('dont create the post');
        } else {
          throw error;
        }
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
    this.service.deletePost(345)
      .subscribe(response => {
        console.log(response);
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post has already been deleted');
        } else {
          throw error;
        }
      });
  }

}
