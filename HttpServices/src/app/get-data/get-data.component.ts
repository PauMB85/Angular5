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

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAll()
      .subscribe(post => this.posts = post);
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';
    this.postService.create(post)
      .subscribe(newPost => {
          console.log(newPost);
          post['id'] = newPost.id;
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
    this.postService.patch(post)
      .subscribe(patchPost => console.log(patchPost));
    // update is used, when you update all the fields of the object
    this.postService.update(post)
      .subscribe(updatePost => console.log(updatePost));
  }

  deletePost(post) {
    this.postService.delete(post.id)
      .subscribe(() => {
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
