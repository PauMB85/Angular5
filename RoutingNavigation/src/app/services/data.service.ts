import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {HttpClient} from '@angular/common/http';
import {AppError} from './../common/app-error';

@Injectable()
export class DataService {
  constructor(private url: string, private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url, {observe: 'response'})
      .map(response => response.body)
      .catch(this.handleError);
  }

  get(id) {
    return this.http.get(this.url + '/' + id, {observe: 'response'})
      .map(response => response.body)
      .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource), {observe: 'response'})
      .map(response => response.body)
      .catch(this.handleError);
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}), {observe: 'response'})
      .map(response => response.body)
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id, {observe: 'response'})
      .map(response => response.body)
      .catch(this.handleError);
  }

  private handleError(err: Response) {
    if (err.status === 400) {
      return Observable.throw(new BadInput());
    }
    if (err.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(err));
  }
}
