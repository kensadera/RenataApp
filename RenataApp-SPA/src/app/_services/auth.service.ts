import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';
import { Sale } from '../_models/sale';
import { Observable } from 'rxjs';
import { PaginatedResult } from '../_models/pagination';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + 'auth/';
  jwthelper = new JwtHelperService();
  decodedToken: any;


  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwthelper.decodeToken(user.token);

          }
           })
        );
    }

    register(user: User) {
      return this.http.post(this.baseUrl + 'register', user);
    }

    loggedIn() {
      const token = localStorage.getItem('token');
      return !this.jwthelper.isTokenExpired(token);
    }


}

