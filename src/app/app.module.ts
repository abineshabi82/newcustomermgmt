import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule, AngularFirestore} from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import {routeComponent} from './app-routing.module'
import { AppComponent } from './app.component';
import { CustomerListViewComponent } from './customer-list-view/customer-list-view.component';
import { CustomerMapViewComponent } from './customer-map-view/customer-map-view.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { MapDataService } from './map-data.service';
import { CustomersServiceService } from './customers-service.service';
import { OrderService } from './order.service';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { FormsModule } from '@angular/forms';
import { CustomerOrderViewComponent } from './customer-order-view/customer-order-view.component';
import { CusService } from './cus.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {AuthUserGuard} from './auth-user.guard';
import { from } from 'rxjs';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    routeComponent,
    CustomerListViewComponent,
    CustomerMapViewComponent,
    CustomerUpdateComponent,
    CustomerViewComponent,
    AddCustomerComponent,
    CustomerInfoComponent,
    CustomerOrderViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [MapDataService,CustomersServiceService,OrderService,CusService,AuthUserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
