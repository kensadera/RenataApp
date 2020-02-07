import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule} from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';




import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { InventoryComponent } from './inventory/inventory.component';
import { appRoutes } from './route';
import { AlertifyService } from './_services/alertify.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { SupplyDetailComponent } from './suppliers/supply-detail/supply-detail.component';
import { SupplyComponent } from './suppliers/supply/supply.component';
import { AuthGuard } from './_guards/auth.guard';


export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ShopComponent,
      InventoryComponent,
      SupplyDetailComponent,
      SupplyComponent

   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AngularFontAwesomeModule,
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            // tslint:disable-next-line: object-literal-shorthand
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })

   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,

   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
