import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable,Subscription, BehaviorSubject } from 'rxjs';
import {map,take} from 'rxjs/operators';
import { MapDataService } from './map-data.service';
import  'rxjs/operators';
import { Customer } from './login';
//import 'rxjs/Rx';
@Injectable()
export class AuthUserGuard implements CanActivate {
a:Customer=new Customer();
  constructor(private userValidation?:MapDataService,private router?:Router){
  }
  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>  {
    this.userValidation.validUserData.subscribe((x:Customer)=>this.a=x);
    if(this.a.email!==''){
      return true;
     }else{
       console.log('enters');
       this.router.navigate(['/login']);
       return false;
     }
      
    }
  
}
