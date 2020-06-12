import { Component, OnInit, SimpleChanges, Input, AfterViewInit } from '@angular/core';
import {CustomersServiceService} from '../customers-service.service';
import { OnChanges } from "@angular/core";

import { SimpleChange } from "@angular/core";
import { MapDataService } from '../map-data.service';
import { SearchService } from '../search.service';
import { CusService } from '../cus.service';
import { ICustomer } from '../cusModel';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-customer-cart-view',
  templateUrl: './customer-cart-view.component.html',
  styleUrls:['./css.css']
})
export class CustomerCartViewComponent implements OnInit {
 p;
 customers:CustomersServiceService[]=null;
  mapData:CustomersServiceService;
  searchContent: string=null;
 
  constructor(private data?:MapDataService,private searchdata?:SearchService,cus?:CusService) {
    cus.getCusFire().subscribe((x:CustomersServiceService[])=>{
      if(this.searchContent!==null&&this.searchContent!==undefined&&this.searchContent!=='')
      {
      this.customers=x.filter(p=>p.payload.doc.data().name===this.searchContent).map(z=>{return {id:z.payload.doc.id,
          ...z.payload.doc.data()}});
      }
      else{
      cus.getCusFire().subscribe((x:CustomersServiceService[])=>{this.customers=x.map(z=>{
        return {
          id:z.payload.doc.id,
          ...z.payload.doc.data()
        }
      })});
      }
    });
   }
  ngOnInit() {
    this.searchdata.searchData.subscribe(x=>this.searchContent=x);
  }

 


newMapData(customer:CustomersServiceService){
  console.log("method");
  this.data.changeMapData(customer);
}


}
