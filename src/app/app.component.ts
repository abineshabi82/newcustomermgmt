import { Component } from "@angular/core";
import { CustomersServiceService } from "./customers-service.service";
import { SearchService } from "./search.service";
import { MapDataService } from "./map-data.service";
import { Customer } from "./login";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angularapp";
  validUser: Customer = null;
  searchContent = "";
  /* search(event:any){
    this.searchContent=event.target.value;
  }  */

  constructor(
    private data?: SearchService,
    private userValidationData?: MapDataService
  ) {}

  ngOnInit() {
    this.data.searchData.subscribe(mapData => (this.searchContent = mapData));
    this.userValidationData.validUserData.subscribe(x => (this.validUser = x));
  }
  changeValidation() {
    console.log(new Customer());
    this.userValidationData.changeUserValidation(new Customer());
  }
  getSearchContent() {
    this.data.changeSearchData(this.searchContent);
  }
}
