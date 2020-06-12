import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { OrderModel } from './orderModel';
import {AngularFirestoreModule, AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  os:OrderModel[];
  constructor(private firestore:AngularFirestore) { }
  getOrders():OrderModel[]{
    this.os=[new OrderModel(0,"bat","ALmXWrKrEUvjFxKZtnWI",2,100),new OrderModel(1,"ball","E7DdojeaRmZo890Zq78o",2,100),new OrderModel(2,"camera","FrzK1g56xod8j7xfRp0F",2,100),new OrderModel(3,"mirror","GV6zJ4m0H2r9ln35eCuQ",2,100),new OrderModel(4,"carrom","IIzCcJbHgXdLuGMjPTPZ",2,100)];
    return this.os;
  }

  getOrdersFire():Observable<OrderModel[]>{
    return this.firestore.collection('orders').snapshotChanges();
  }

  doPost(orders:OrderModel){
      let data=Object.assign({},orders);
      if(data.orderId==undefined||data.orderId==null){
      delete data.orderId;
        this.firestore.collection('orders').add(data);
        alert("new record inserted");
        }else{
          let id=data.orderId;
          delete data.orderId;
          this.firestore.doc('orders/'+id).update(data);
          alert("existing record updated");
        }
    
    console.log(orders);
  }

  doDelete(orders:OrderModel){
    let data=Object.assign({},orders);
    this.firestore.doc('orders/'+data.orderId).delete();
    alert("existing record is deleted");
  }
}
