import { Component, OnInit } from "@angular/core";
import { OrderService } from "../order.service";
import { OrderModel } from "../orderModel";
import { MapDataService } from "../map-data.service";
import { CustomersServiceService } from "../customers-service.service";

@Component({
  selector: "app-customer-order-view",
  templateUrl: "./customer-order-view.component.html"
})
export class CustomerOrderViewComponent implements OnInit {
  pq;
  

  constructor(private data?: MapDataService,private os?:OrderService,private mapData?: CustomersServiceService) {}

  or: OrderModel=new OrderModel();
  orders: OrderModel[];
  ngOnInit() {
    this.data.currentMapData.subscribe(mapData => (this.mapData = mapData));
    this.os.getOrdersFire().subscribe(x=>{
        this.orders=x.map(z=>{
        return {
          orderId:z.payload.doc.id,
          ...z.payload.doc.data()
        } as OrderModel
      }).filter(p=>p.cusId===this.mapData.id)
      })
    
    console.log("stop");
    console.log(this.mapData);
  }

  doPost(){
    this.or.cusId=this.mapData.id;
this.os.doPost(this.or);
console.log(this.or);
this.or=new OrderModel();
  }

  doDelete(order:OrderModel){
    this.or=order;
    this.os.doDelete(this.or);
    this.or=new OrderModel();
  }

  reset(){
    this.or=new OrderModel();

  }

getSum(){
  let sum=0;
  for(let x=0;x<this.orders.length;x++){
    sum+=this.orders[x].quantity*this.orders[x].price;
  }
  return sum;
}

changeOrder(order:OrderModel){
this.or=order;
}

}
