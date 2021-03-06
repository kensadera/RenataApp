import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule} from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';




import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop/shop.component';
import { InventoryComponent } from './inventory/inventory.component';
import { appRoutes } from './route';
import { AlertifyService } from './_services/alertify.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AppDetailsComponent } from './app-details/app-details.component';
import { SupplyComponent } from './suppliers/supply/supply.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { SupplierListResolver } from './_resolvers/supplier-list.resolver';
import { BrandListResolver } from './_resolvers/brand-list.resolver';
import { ModelListResolver } from './_resolvers/model-list.resolver';
import { PhoneListResolver } from './_resolvers/phone-list.resolver';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { InventoryListResolver } from './_resolvers/inventory-list.resolver';
import { SaleListResolver } from './_resolvers/sale-list.resolver';
import { SupplyEditComponent } from './suppliers/supply-edit/supply-edit.component';
import { ShopEditComponent } from './shop/shop-edit/shop-edit.component';
import { SaleEditComponent } from './sales/sale-edit/sale-edit.component';
import { SaleReportComponent } from './report/sale-report/sale-report.component';
import { SupplyReportComponent } from './report/supply-report/supply-report.component';
import { PaginationModule } from 'ngx-bootstrap';
import { SaleComponent } from './sales/sale/sale.component';




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
      AppDetailsComponent,
      SupplyComponent,
      SaleComponent,
      SupplyEditComponent,
      ShopEditComponent,
      SaleEditComponent,
      SaleReportComponent,
      SupplyReportComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AngularFontAwesomeModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      BsDatepickerModule.forRoot(),
      PaginationModule.forRoot(),
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            // tslint:disable-next-line: object-literal-shorthand
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      }),
      BsDatepickerModule.forRoot()


   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      UserService,
      SupplierListResolver,
      BrandListResolver,
      ModelListResolver,
      PhoneListResolver,
      InventoryListResolver,
      SaleListResolver

   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
