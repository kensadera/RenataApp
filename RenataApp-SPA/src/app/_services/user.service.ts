import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier } from '../_models/supplier';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../_models/user';
import { AuthService } from './auth.service';
import { PhoneType } from '../_models/phoneType';
import { PhoneModel } from '../_models/phoneModel';
import { SaleType } from '../_models/saleType';
import { PayType } from '../_models/payType';
import { Store } from '../_models/store';
import { Phone } from '../_models/phone';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;
  jwthelper = new JwtHelperService();
  decodedToken: any;
  user: User;
  supplier: Supplier;
  phonetype: PhoneType;
  phonemodel: PhoneModel;
  userId = this.authService.decodedToken.nameid;
  model: any = {};




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



getPhoneBrand(id): Observable<PhoneType> {
  return this.http.get<PhoneType>(this.baseUrl + 'brands/' + id);
}

getPhoneBrands(): Observable<PhoneType[]> {
  return this.http.get<PhoneType[]>(this.baseUrl + 'brands');
}

createPhoneBrand(phonetype: PhoneType ) {
  phonetype.userId = this.authService.decodedToken.nameid;
  return this.http.post(this.baseUrl + 'brands/',  phonetype );
}



getPhoneModel(id): Observable<PhoneModel> {
  return this.http.get<PhoneModel>(this.baseUrl + 'models/' + id);
}

getPhoneModels(): Observable<PhoneModel[]> {
  return this.http.get<PhoneModel[]>(this.baseUrl + 'models');
}

createPhoneModel(phonemodel: PhoneModel ) {

   return this.http.post(this.baseUrl + 'models/',  phonemodel );
}



getSaleType(id): Observable<SaleType> {
  return this.http.get<SaleType>(this.baseUrl + 'saletypes/' + id);
}

getSaleTypes(): Observable<SaleType[]> {
  return this.http.get<SaleType[]>(this.baseUrl + 'saletypes');
}

createSaleType(saletype: SaleType ) {
  saletype.userId = this.authService.decodedToken.nameid;
  return this.http.post(this.baseUrl + 'saletypes/',  saletype );
}



getPayType(id): Observable<PayType> {
  return this.http.get<PayType>(this.baseUrl + 'paytypes/' + id);
}

getPayTypes(): Observable<PayType[]> {
  return this.http.get<PayType[]>(this.baseUrl + 'paytypes');
}

createPayType(paytype: PayType ) {
  paytype.userId = this.authService.decodedToken.nameid;
  return this.http.post(this.baseUrl + 'paytypes/',  paytype );
}



getStore(id): Observable<Store> {
  return this.http.get<Store>(this.baseUrl + 'stores/' + id);
}

getStores(): Observable<Store[]> {
  return this.http.get<Store[]>(this.baseUrl + 'stores');
}

createStore(store: Store ) {
  store.userId = this.authService.decodedToken.nameid;
  return this.http.post(this.baseUrl + 'stores/',  store );
}


createPhone(phone: Phone) {
  phone.userId = this.authService.decodedToken.nameid;
  return this.http.post(this.baseUrl + 'phones/', phone);
}






}
