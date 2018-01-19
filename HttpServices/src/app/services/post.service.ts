import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {AppError} from '../commons/errors/app-error';
import {NotFoundError} from '../commons/errors/not-found-error';
import {BadRequestError} from '../commons/errors/bad-request-error';

@Injectable()
export class PostService {

  private  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url, {observe: 'response'})
      .catch(this.handlerError);
  }

  createPost(post) {
   return this.http.post(this.url, JSON.stringify(post), {observe: 'response'})
     .catch(this.handlerError);
  }

  patchPost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify(post.title), {observe: 'response'})
      .catch(this.handlerError);
  }

  updatePost(post) {
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post), {observe: 'response'})
      .catch(this.handlerError);
  }

  deletePost(post) {
    return this.http.delete(this.url + '/' + post.id, {observe: 'response'})
      .catch(this.handlerError);
  }

  private handlerError(err: Response) {
    if (err.status === 400) {
      return Observable.throw(new BadRequestError());
    }
    if (err.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(err));
  }
}
