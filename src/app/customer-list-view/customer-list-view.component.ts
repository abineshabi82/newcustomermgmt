import { Component, OnInit } from '@angular/core';
import { CustomersServiceService } from '../customers-service.service';
import { CusService } from '../cus.service';

@Component({
  selector: 'app-customer-list-view',
  templateUrl: './customer-list-view.component.html'
})
export class CustomerListViewComponent implements OnInit {
  pq;
  customers:CustomersServiceService[];
  constructor(private cus:CusService) { }

  ngOnInit() {
    this.cus.getCusFire().subscribe((x:CustomersServiceService[])=>{this.customers=x.map(z=>{
        return {
          id:z.payload.doc.id,
          ...z.payload.doc.data()
        }
      })});
  }

}
