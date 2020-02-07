import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier } from '../_models/supplier';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../_models/user';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;
  jwthelper = new JwtHelperService();
  decodedToken: any;
  user: User;
  supplier: Supplier;
  userId = this.authService.decodedToken.nameid;




constructor(private http: HttpClient, private authService: AuthService) { }

getSuppliers(): Observable<Supplier[]> {
  return this.http.get<Supplier[]>(this.baseUrl + 'suppliers');
}

getSupplier(id): Observable<Supplier> {
  return this.http.get<Supplier>(this.baseUrl + 'suppliers/' + id);
}

createSupplier(supplier: Supplier ) {
  return this.http.post(this.baseUrl + 'suppliers/' + supplier  ,  supplier,  this.authService.decodedToken.nameid  );
}

}
