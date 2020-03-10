import {Injectable} from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Store } from '../_models/store';


@Injectable()
export class StoreListResolver implements Resolve<Store[]> {

  constructor(private userService: UserService, private alerfify: AlertifyService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Store[]> {
    return this.userService.getStores().pipe(
      catchError(error => {
        this.alerfify.error('Problem retrieving data');
        this.router.navigate(['/shop']);
        return of(null);
      })
    );
  }
}
