import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jwthelper = new JwtHelperService();

  constructor(private authService: AuthService) {}

// tslint:disable-next-line: use-life-cycle-interface
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.decodedToken = this.jwthelper.decodeToken(token);
    }
  }

}

