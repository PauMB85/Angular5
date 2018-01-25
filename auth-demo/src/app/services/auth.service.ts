import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {JwtHelper, tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) {
   return this.http.post('/api/authenticate',
      JSON.stringify(credentials))
     .map(response => {
       const result = response.json();
       if (result && result.token) {
         // save in local storage
         localStorage.setItem('token', result.token);
         return true;
       }
       return false;
     });
  }

  logout() {
    // delete the token from localstorage
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return tokenNotExpired();
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    return new JwtHelper().decodeToken(token);
  }
}

