import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AuthGuard } from './_guards/auth.guard';
import { SupplyDetailComponent } from './suppliers/supply-detail/supply-detail.component';
import { SupplyComponent } from './suppliers/supply/supply.component';
import { SalesComponent } from './sales/sales.component';


export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'supply', component: SupplyComponent, canActivate: [AuthGuard]},
    {path: 'supply/add', component: SupplyDetailComponent, canActivate: [AuthGuard]},
    {path: 'shop', component: ShopComponent, canActivate: [AuthGuard]},
    {path: 'sales', component: SalesComponent, canActivate: [AuthGuard]},
    {path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'home', pathMatch : 'full'}
  ];
