export class OrderModel{
    constructor(public orderId?:string,public orderItem?:string,public cusId?:string,public quantity?:number,public price?:number) { }
}