import { Component, OnInit, Input } from "@angular/core";
import { SearchOption } from "src/common/models/search-options.class";
import { CarService } from "src/common/service/car.service";
import { Subscription } from "rxjs";

//Model
import { Car } from "src/common/models/car.model";

@Component({
  selector: "app-result-of-search-options",
  templateUrl: "./result-of-search-options.component.html",
  styleUrls: ["./result-of-search-options.component.scss"]
})
export class ResultOfSearchOptionsComponent implements OnInit {
  @Input("searchOptions") searchOptions: SearchOption;

  carListSubscription: Subscription;
  carList: Car[];

  sortCritiria = [
    { value: 0, display: "Ngày: Mới nhất" },
    { value: 1, display: "Ngày: Cũ nhất" },
    { value: 2, display: "Giá: Cao nhất" },
    { value: 3, display: "Giá: Thấp nhất" }
  ];

  selectedSortCritiria = '0';

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.handleCarList();
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.handleCarList();
  }

  handleCarList() {
    console.log(this.searchOptions)
    this.carListSubscription = 
    this.carService
      .getCarListByCriteria(this.searchOptions)
      .subscribe(data => {
        console.log(data.length)
        this.carList = data
      });
  }
}
