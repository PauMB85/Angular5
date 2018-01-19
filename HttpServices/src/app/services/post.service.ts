import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {AppError} from '../commons/errors/app-error';
import {NotFoundError} from '../commons/errors/not-found-error';
import {BadRequestError} from '../commons/errors/bad-request-error';

@Injectable()
export class PostService {

  private  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url, {observe: 'response'});
  }

  createPost(post) {
   return this.http.post(this.url, JSON.stringify(post), {observe: 'response'})
     .catch((err: Response) => {
       /*if (err.status === 400) {
         return Observable.throw(new BadRequestError());
       }
       return Observable.throw(new AppError(err));*/
       return this.getError(err);
     });
  }

  patchPost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify(post.title), {observe: 'response'});
  }

  updatePost(post) {
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post), {observe: 'response'});
  }

  deletePost(post) {
    return this.http.delete(this.url + '/' + post.id, {observe: 'response'})
      .catch((err: Response) => {
        /*if (err.status === 404) {
          return Observable.throw(new NotFoundError());
        }
        return Observable.throw(new AppError(err));*/
        return this.getError(err);
      });
  }

  private getError(err: Response): Observable<AppError> {
    if (err.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    if (err.status === 400) {
      return Observable.throw(new BadRequestError());
    }
    return Observable.throw(new AppError(err));
  }

}
