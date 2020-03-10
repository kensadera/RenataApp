import {Injectable} from '@angular/core';
import { Supplier } from '../_models/supplier';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class SupplierListResolver implements Resolve<Supplier[]> {

  constructor(private userService: UserService, private alerfify: AlertifyService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Supplier[]> {
    return this.userService.getSuppliers().pipe(
      catchError(error => {
        this.alerfify.error('Problem retrieving data');
        this.router.navigate(['/supply']);
        return of(null);
      })
    );
  }
}
