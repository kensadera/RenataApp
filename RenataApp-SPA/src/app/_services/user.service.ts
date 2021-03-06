import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier } from '../_models/supplier';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../_models/user';
import { AuthService } from './auth.service';
import { PhoneType } from '../_models/phoneType';
import { PhoneModel } from '../_models/phoneModel';
import { Phone } from '../_models/phone';
import { Inventory } from '../_models/inventory';
import { Sale } from '../_models/sale';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;
  jwthelper = new JwtHelperService();
  decodedToken: any;
  supplier: Supplier;
  phonetype: PhoneType;
  phonemodel: PhoneModel;
  userId = this.authService.decodedToken.nameid;
  user = this.authService.decodedToken.unique_name;
  model: any = {};




constructor(private http: HttpClient,
            private authService: AuthService,
            private route: ActivatedRoute) { }


getPhones(page?, itemsPerPage?, phoneParams?): Observable<PaginatedResult<Phone[]>> {
  const paginatedResult: PaginatedResult<Phone[]> = new PaginatedResult<Phone[]>();

  let params = new HttpParams();

  if (page != null && itemsPerPage != null) {
    params = params.append('pageNumber', page);
    params = params.append('pageSize', itemsPerPage);
  }

  if (phoneParams != null) {
     params = params.append('supplierName', phoneParams.supplierName);
   }

  return this.http.get<Phone[]>(this.baseUrl + 'phones', {observe: 'response', params})
    .pipe(
      map(response => {
        paginatedResult.result = response.body;
        if (response.headers.get('Pagination') != null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      })
    );
}

getPhone(id): Observable<Phone> {
  return this.http.get<Phone>(this.baseUrl + 'phones/' + id);
}



createPhone(phone: Phone) {
  phone.userId = this.authService.decodedToken.nameid;
  phone.user = this.authService.decodedToken.unique_name;
  return this.http.post(this.baseUrl + 'phones/', phone);
}

updatePhone(id: number, phone: Phone) {
  return this.http.put(this.baseUrl + 'phones/' + id , phone );
}

deletePhone(id: number) {
  return this.http.delete(this.baseUrl + 'phones/' + id);
}





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

deleteSupplier(id: number) {
  return this.http.delete(this.baseUrl + 'suppliers/' + id);
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

deletePhoneBrand(id: number) {
  return this.http.delete(this.baseUrl + 'brands/' + id);
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

deletePhoneModel(id: number) {
  return this.http.delete(this.baseUrl + 'models/' + id);
}





getInventory(id): Observable<Inventory> {
  return this.http.get<Inventory>(this.baseUrl + 'inventories/' + id);
}


getInventories(page?, itemsPerPage?, inventoryParams?): Observable<PaginatedResult<Inventory[]>> {
  const paginatedResult: PaginatedResult<Inventory[]> = new PaginatedResult<Inventory[]>();

  let params = new HttpParams();

  if (page != null && itemsPerPage != null) {
    params = params.append('pageNumber', page);
    params = params.append('pageSize', itemsPerPage);
  }



  return this.http.get<Inventory[]>(this.baseUrl + 'inventories', {observe: 'response', params})
    .pipe(
      map(response => {
        paginatedResult.result = response.body;
        if (response.headers.get('Pagination') != null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      })
    );
}



createInventory(inventory: Inventory ) {
  inventory.userId = this.authService.decodedToken.nameid;
  inventory.user = this.authService.decodedToken.unique_name;
  return this.http.post(this.baseUrl + 'inventories/',  inventory );
}

updateInventory(id: number, inventory: Inventory) {
  return this.http.put(this.baseUrl + 'inventories/' + id, inventory);
}

deleteInventory(id: number) {
  return this.http.delete(this.baseUrl + 'inventories/' + id);
}



getSale(id): Observable<Sale> {
  return this.http.get<Sale>(this.baseUrl + 'sales/' + id);
}


getSales(page?, itemsPerPage?, saleParams?): Observable<PaginatedResult<Sale[]>> {
  const paginatedResult: PaginatedResult<Sale[]> = new PaginatedResult<Sale[]>();

  let params = new HttpParams();

  if (page != null && itemsPerPage != null) {
    params = params.append('pageNumber', page);
    params = params.append('pageSize', itemsPerPage);
  }



  return this.http.get<Sale[]>(this.baseUrl + 'sales', {observe: 'response', params})
    .pipe(
      map(response => {
        paginatedResult.result = response.body;
        if (response.headers.get('Pagination') != null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      })
    );
}


createSale(sale: Sale ) {
  sale.userId = this.authService.decodedToken.nameid;
  sale.user = this.authService.decodedToken.unique_name;
  return this.http.post(this.baseUrl + 'sales/',  sale );
}
updateSale(id: number, sale: Sale) {
  return this.http.put(this.baseUrl + 'sales/' + id, sale);
}

deleteSale(id: number) {
  return this.http.delete(this.baseUrl + 'sales/' + id);
}







}
