import {Injectable} from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PhoneModel } from '../_models/phoneModel';


@Injectable()
export class ModelListResolver implements Resolve<PhoneModel[]> {

  constructor(private userService: UserService, private alerfify: AlertifyService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<PhoneModel[]> {
    return this.userService.getPhoneModels().pipe(
      catchError(error => {
        this.alerfify.error('Problem retrieving data');
        this.router.navigate(['/supply']);
        return of(null);
      })
    );
  }
}
