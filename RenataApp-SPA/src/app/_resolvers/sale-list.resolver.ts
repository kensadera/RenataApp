import {Injectable} from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Sale } from '../_models/sale';


@Injectable()
export class SaleListResolver implements Resolve<Sale[]> {

  constructor(private userService: UserService, private alerfify: AlertifyService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Sale[]> {
    return this.userService.getSales().pipe(
      catchError(error => {
        this.alerfify.error('Problem retrieving data');
        this.router.navigate(['/sale']);
        return of(null);
      })
    );
  }
}
