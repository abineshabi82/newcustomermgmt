import { Component, OnInit,DoCheck,AfterContentInit } from '@angular/core';
import { Customer } from '../login';
import { MapDataService } from '../map-data.service';
import {CusService} from '../cus.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./css.css']
})
export class LoginComponent implements OnInit {
customer:Customer = new Customer();
cus:any[];
  constructor(private userValidation?:MapDataService,private service?:CusService) { }

  ngOnInit() {
    this.service.getCusFire().subscribe(x=>{
      this.cus=x.map(y=>{
        return {
          id:y.payload.doc.id,
          ...y.payload.doc.data()
        }
      })
    });
    
  }
  onConsole(){
console.log(this.cus);
  }

changeValidation(){
  console.log(this.customer);
  this.userValidation.changeUserValidation(this.customer);
}
}
