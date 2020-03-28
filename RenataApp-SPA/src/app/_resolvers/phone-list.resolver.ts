import {Injectable} from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Phone } from '../_models/phone';


@Injectable()
export class PhoneListResolver implements Resolve<Phone[]> {
  pageNumber = 1;
  PageSize = 10;

  constructor(private userService: UserService, private alerfify: AlertifyService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Phone[]> {
    return this.userService.getPhones(this.pageNumber, this.PageSize).pipe(
      catchError(error => {
        this.alerfify.error('Problem retrieving data');
        this.router.navigate(['/supply']);
        return of(null);
      })
    );
  }
}
