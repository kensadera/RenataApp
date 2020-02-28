import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier } from '../_models/supplier';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../_models/user';
import { AuthService } from './auth.service';
import { Phonetype } from '../_models/phonetype';
import { Phonemodel } from '../_models/phonemodel';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;
  jwthelper = new JwtHelperService();
  decodedToken: any;
  user: User;
  supplier: Supplier;
  phonetype: Phonetype;
  phonemodel: Phonemodel;
  userId = this.authService.decodedToken.nameid;




constructor(private http: HttpClient, private authService: AuthService) { }

getSuppliers(): Observable<Supplier[]> {
  return this.http.get<Supplier[]>(this.baseUrl + 'suppliers');
}

getSupplier(id): Observable<Supplier> {
  return this.http.get<Supplier>(this.baseUrl + 'suppliers/' + id);
}

createSupplier(supplier: Supplier ) {
  supplier.userId = this.authService.decodedToken.nameid;
  return this.http.post(this.baseUrl + 'suppliers/',  supplier );
}

getPhonetype(id): Observable<Phonetype> {
  return this.http.get<Phonetype>(this.baseUrl + 'brands/' + id);
}

getPhonetypes(): Observable<Phonetype[]> {
  return this.http.get<Phonetype[]>(this.baseUrl + 'brands');
}

getPhonemodel(id): Observable<Phonemodel> {
  return this.http.get<Phonemodel>(this.baseUrl + 'models/' + id);
}

getPhonemodels(): Observable<Phonemodel[]> {
  return this.http.get<Phonemodel[]>(this.baseUrl + 'models');
}

createPhoneBrand(phonetype: Phonetype ) {
  phonetype.userId = this.authService.decodedToken.nameid;
  return this.http.post(this.baseUrl + 'brands/',  phonetype );
}

createPhoneModel(phonemodel: Phonemodel ) {
  return this.http.post(this.baseUrl + 'models/',  phonemodel );
}



}
