import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostService {

  private  url = 'https://abcdjsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url, {observe: 'response'});
  }

  createPost(post) {
   return this.http.post(this.url, JSON.stringify(post), {observe: 'response'});
  }

  patchPost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify(post.title), {observe: 'response'});
  }

  updatePost(post) {
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post), {observe: 'response'});
  }

  deletePost(post) {
    return this.http.delete(this.url + '/' + post.id, {observe: 'response'});
  }

}
