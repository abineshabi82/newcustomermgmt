import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { CustomersServiceService } from './customers-service.service';
import { Customer } from './login';

@Injectable()
export class MapDataService {
  
  
private mapDataSource=new BehaviorSubject<CustomersServiceService>(null);
currentMapData=this.mapDataSource.asObservable();

private validUserSource=new BehaviorSubject<Customer>(new Customer());
validUserData=this.validUserSource.asObservable();

  constructor() { }

  changeMapData(mapData:CustomersServiceService){
    this.mapDataSource.next(mapData);
  }

  changeUserValidation(mapData:Customer){
    console.log("from map");
    console.log(mapData);
    this.validUserSource.next(mapData);
  }

}
