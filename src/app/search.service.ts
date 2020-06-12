import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchSource=new BehaviorSubject<string>(null);
  searchData=this.searchSource.asObservable();
    constructor() { }
  
    changeSearchData(mapData:string){
      this.searchSource.next(mapData);
    }
}
