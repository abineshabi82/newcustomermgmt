import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule, AngularFirestore} from '@angular/fire/firestore';
import { ICustomer } from './cusModel';
import { CustomersServiceService } from './customers-service.service';
import { catchError, map } from 'rxjs/operators';
@Injectable()
export class CusService {

  constructor(private http?:HttpClient,private firestore?:AngularFirestore) {
    
   }

  getCusFire():Observable<CustomersServiceService[]>{
    return this.firestore.collection('customers').snapshotChanges();
  }

  addCusFire(customer:CustomersServiceService){
    let x=Object.assign({},customer);
    delete x.id;
    this.firestore.collection('customers').add(x);
    alert("a record is added");
  }

  updateCusFire(customer:CustomersServiceService){
    let id=customer.id;
    let x=Object.assign({},customer);
    delete x.id;
    this.firestore.doc('customers/'+id).update(x);
    alert("a existing record is updated");
  }

  deleteCusFire(customer:CustomersServiceService){
    this.firestore.doc('customers/'+customer.id).delete();
    alert("a record is deleted");
  }

  public getCus():Observable<CustomersServiceService[]>{
    return this.http.get<CustomersServiceService[]>("http://localhost:9090/get/customers");
  }

  public searchCus(s:String):Observable<CustomersServiceService[]>{
    const cus:any=this.http.get<CustomersServiceService[]>("http://localhost:9090/get/customers");
    return cus.filter(x=>x.name===s);
  }

  addCustomer(customer:ICustomer){
    let body=JSON.stringify(customer);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
   let options = {headers: headers};
    return this.http.post<ICustomer>("http://localhost:9090/post/customer",body,options);
  }

  updateCustomer(customer: ICustomer) {
    let body=JSON.stringify(customer);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
   let options = {headers: headers};
    return this.http.put<ICustomer>("http://localhost:9090/put/customer/"+customer.id,body,options);
  }

  deleteCustomer(customer:ICustomer){
    return this.http.delete("http://localhost:9090/delete/customer/"+customer.id);
  }

}
