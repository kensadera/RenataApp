import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop/shop.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AuthGuard } from './_guards/auth.guard';
import { AppDetailsComponent } from './app-details/app-details.component';
import { SupplyComponent } from './suppliers/supply/supply.component';
import { SaleComponent } from './sales/sale/sale.component';
import { SupplierListResolver } from './_resolvers/supplier-list.resolver';
import { BrandListResolver } from './_resolvers/brand-list.resolver';
import { ModelListResolver } from './_resolvers/model-list.resolver';
import { PhoneListResolver } from './_resolvers/phone-list.resolver';
import { StoreListResolver } from './_resolvers/store-list.resolver';
import { SaleTypeListResolver } from './_resolvers/saletype-list.resolver';
import { InventoryListResolver } from './_resolvers/inventory-list.resolver';
import { SaleListResolver } from './_resolvers/sale-list.resolver';
import { SupplyEditComponent } from './suppliers/supply-edit/supply-edit.component';
import { ShopEditComponent } from './shop/shop-edit/shop-edit.component';
import { SaleEditComponent } from './sales/sale-edit/sale-edit.component';
import { SaleReportComponent } from './report/sale-report/sale-report.component';
import { SupplyReportComponent } from './report/supply-report/supply-report.component';


export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'supply', component: SupplyComponent,
          resolve: {suppliers: SupplierListResolver,
                    phonetypes: BrandListResolver,
                    phonemodels: ModelListResolver,
                    phones: PhoneListResolver},
           canActivate: [AuthGuard]},
    {path: 'supply/edit', component: SupplyEditComponent, canActivate: [AuthGuard]},
    {path: 'detail/add', component: AppDetailsComponent,
                resolve: {phonetypes: BrandListResolver},
                canActivate: [AuthGuard]},
    {path: 'shop', component: ShopComponent,
               resolve: { stores: StoreListResolver,
                          phonetypes: BrandListResolver,
                          phonemodels: ModelListResolver,
                          Inventories: InventoryListResolver },
               canActivate: [AuthGuard]},
    {path: 'shop/edit', component: ShopEditComponent, canActivate: [AuthGuard]},
    {path: 'sales', component: SaleComponent,
                resolve: { saletypes: SaleTypeListResolver,
                           phonetypes: BrandListResolver,
                           phonemodels: ModelListResolver,
                           Sales: SaleListResolver },
                canActivate: [AuthGuard]},
    {path: 'sale/edit', component: SaleEditComponent, canActivate: [AuthGuard]},
    {path: 'inventory', component: InventoryComponent, resolve: {inventories: InventoryListResolver}, canActivate: [AuthGuard]},
    {path: 'report/sale', component: SaleReportComponent, resolve: {sales: SaleListResolver}, canActivate: [AuthGuard]},
    {path: 'report/supply', component: SupplyReportComponent, resolve: {phones: PhoneListResolver}, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'home', pathMatch : 'full'}
  ];
