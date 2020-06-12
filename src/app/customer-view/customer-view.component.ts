import { Component, OnInit } from '@angular/core';
import { MapDataService } from '../map-data.service';
import { CusService } from '../cus.service';
import { CustomersServiceService } from '../customers-service.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  mapData:CustomersServiceService=null;
  constructor(private data:MapDataService,private cus:CusService) { }


  ngOnInit():void {
    this.data.currentMapData.subscribe(mapData=>this.mapData=mapData);
    console.log(this.mapData);

  }

}
