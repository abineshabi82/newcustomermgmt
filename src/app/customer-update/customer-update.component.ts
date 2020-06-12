import { Component, OnInit } from '@angular/core';
import { CustomersServiceService } from '../customers-service.service';
import { MapDataService } from '../map-data.service';
import { CusService } from '../cus.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html'
})
export class CustomerUpdateComponent implements OnInit {
  mapData:CustomersServiceService;
 
  constructor(private data:MapDataService,private cus:CusService) { }
  

  ngOnInit() {
    this.data.currentMapData.subscribe(mapData=>this.mapData=mapData);
  }

  updateCustomer():void{
    this.cus.updateCusFire(this.mapData);
    //.subscribe((response)=>{console.log(response)},
     //           (error)=>{console.log(error)});
              
  }
}
