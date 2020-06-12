import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CustomersServiceService } from '../customers-service.service';
import { MapDataService } from '../map-data.service';
import {} from 'googlemaps';
import { CusService } from '../cus.service';
import { ICustomer } from '../cusModel';
@Component({
  selector: 'app-customer-map-view',
  templateUrl: './customer-map-view.component.html'
})
export class CustomerMapViewComponent implements OnInit {

  mapData:CustomersServiceService=new CustomersServiceService();
  constructor(private data:MapDataService,private cus:CusService) { }

  @ViewChild('map',{static: true}) mapElement: any;
  map: google.maps.Map;

  ngOnInit():void {
    this.data.currentMapData.subscribe(mapData=>this.mapData=mapData);
    console.log(this.mapData);
    if(this.mapData!==null){
    const mapProperties = {
      center: new google.maps.LatLng(this.mapData.l1,this.mapData.l2),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
}
  }

  deleteCustomer(customer:ICustomer){
  this.cus.deleteCusFire(customer);
  //.subscribe((response)=>{console.log(response)},(error)=>{console.log(error)});
  }
}
