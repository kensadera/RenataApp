import {Injectable} from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Inventory } from '../_models/inventory';


@Injectable()
export class InventoryListResolver implements Resolve<Inventory[]> {
  pageNumber = 1;
  pageSize = 10;

  constructor(private userService: UserService, private alerfify: AlertifyService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Inventory[]> {
    return this.userService.getInventories(this.pageNumber, this.pageSize).pipe(
      catchError(error => {
        this.alerfify.error('Problem retrieving data');
        this.router.navigate(['/shop']);
        return of(null);
      })
    );
  }
}
