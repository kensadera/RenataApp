import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SupplyComponent } from './supply/supply.component';
import { ShopComponent } from './shop/shop.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AuthGuard } from './_guards/auth.guard';


export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'supply', component: SupplyComponent, canActivate: [AuthGuard]},
    {path: 'shop', component: ShopComponent, canActivate: [AuthGuard]},
    {path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'home', pathMatch : 'full'}
  ];
