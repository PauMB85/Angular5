import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
    return false;
  }
}

