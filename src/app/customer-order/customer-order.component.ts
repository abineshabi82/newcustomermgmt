import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { OrderModel } from '../orderModel';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html'
})
export class CustomerOrderComponent implements OnInit {
  pq;
  orders:OrderModel[];
  order:OrderModel=new OrderModel();
//[new OrderService(1,'ball',1),new OrderService(2,'bat',2),new OrderService(3,'rubber',3),new OrderService(4,'glass',4)];
  constructor(private orderService:OrderService) { }

  ngOnInit() {
    this.orderService.getOrdersFire().subscribe(x=>{
        this.orders=x.map(z=>{
        return {
          orderId:z.payload.doc.id,
          ...z.payload.doc.data()
        }
      })
      })
  }

  

}
