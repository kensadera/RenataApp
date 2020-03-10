import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AuthGuard } from './_guards/auth.guard';
import { AppDetailsComponent } from './app-details/app-details.component';
import { SupplyComponent } from './suppliers/supply/supply.component';
import { SalesComponent } from './sales/sales.component';
import { SupplierListResolver } from './_resolvers/supplier-list.resolver';
import { BrandListResolver } from './_resolvers/brand-list.resolver';
import { ModelListResolver } from './_resolvers/model-list.resolver';
import { PhoneListResolver } from './_resolvers/phone-list.resolver';
import { StoreListResolver } from './_resolvers/store-list.resolver';
import { SaleTypeListResolver } from './_resolvers/saletype-list.resolver';
import { PayTypeListResolver } from './_resolvers/paytype-list.resolver';
import { InventoryListResolver } from './_resolvers/inventory-list.resolver';
import { SaleListResolver } from './_resolvers/sale-list.resolver';
import { PhoneEditComponent } from './suppliers/supply/phone-edit/phone-edit.component';


export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'supply', component: SupplyComponent,
          resolve: {suppliers: SupplierListResolver,
                    phonetypes: BrandListResolver,
                    phonemodels: ModelListResolver,
                    phones: PhoneListResolver},
           canActivate: [AuthGuard]},
    {path: 'supply/edit', component: PhoneEditComponent},
    {path: 'detail/add', component: AppDetailsComponent,
                resolve: {phonetypes: BrandListResolver},
                canActivate: [AuthGuard]},
    {path: 'shop', component: ShopComponent,
               resolve: { stores: StoreListResolver,
                          phonetypes: BrandListResolver,
                          phonemodels: ModelListResolver,
                          Inventories: InventoryListResolver },
               canActivate: [AuthGuard]},
    {path: 'sales', component: SalesComponent,
                resolve: { saletypes: SaleTypeListResolver,
                           paytypes: PayTypeListResolver,
                           phonetypes: BrandListResolver,
                           phonemodels: ModelListResolver,
                           Sales: SaleListResolver },
                canActivate: [AuthGuard]},
    {path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'home', pathMatch : 'full'}
  ];
