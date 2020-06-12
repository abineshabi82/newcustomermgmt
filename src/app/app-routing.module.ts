import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerCartViewComponent} from './customer-cart-view/customer-cart-view.component';
import {CustomerOrderComponent} from './customer-order/customer-order.component';
import {CustomerListViewComponent} from './customer-list-view/customer-list-view.component';
import { CustomerMapViewComponent } from './customer-map-view/customer-map-view.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerOrderViewComponent } from './customer-order-view/customer-order-view.component';
import { LoginComponent } from './login/login.component';
import { AuthUserGuard } from './auth-user.guard';
const routes: Routes = [
  {path:'customerInfo',redirectTo:"customerInfo/customerInfoDetails",pathMatch:'full',canActivate:[AuthUserGuard]},
  {path:'customerView',component:CustomerViewComponent,canActivate:[AuthUserGuard],
  children:[
  {path:'cartView',component:CustomerCartViewComponent,canActivate:[AuthUserGuard]},
  {path:'listView',component:CustomerListViewComponent,canActivate:[AuthUserGuard]},
  {path:'mapView',component:CustomerMapViewComponent,canActivate:[AuthUserGuard]},
  {path:'addCustomer',component:AddCustomerComponent,canActivate:[AuthUserGuard]}]
},
{path:'customerInfo',component:CustomerInfoComponent,canActivate:[AuthUserGuard],
children:[
  {path:'customerOrderView',component:CustomerOrderViewComponent,canActivate:[AuthUserGuard]},
  {path:'customerInfoDetails',component:CustomerMapViewComponent,canActivate:[AuthUserGuard]},
  {path:'customerUpdate',component:CustomerUpdateComponent,canActivate:[AuthUserGuard]}
  
]},
  {path:'login',component:LoginComponent},
  {path:'customerView',redirectTo: "customerView/cartView",pathMatch: 'full',canActivate:[AuthUserGuard]},
  {path:'orderView',component:CustomerOrderComponent,canActivate:[AuthUserGuard]},
  {path:'search',redirectTo:"customerView/cartView",pathMatch:'full',canActivate:[AuthUserGuard]},
  {path: '',redirectTo: "login",pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponent=[
  CustomerCartViewComponent,
  CustomerOrderComponent,
  CustomerListViewComponent,
  CustomerMapViewComponent,
  AddCustomerComponent,
  CustomerInfoComponent,
  CustomerOrderViewComponent];