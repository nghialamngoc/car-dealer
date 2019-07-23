import { Component, OnInit, Input } from '@angular/core';

import { CarService } from 'src/common/service/car.service';

import { Car } from 'src/common/models/car.model';

@Component({
  selector: 'app-car-listing-content',
  templateUrl: './car-listing-content.component.html',
  styleUrls: ['./car-listing-content.component.scss']
})
export class CarListingContentComponent implements OnInit {  
  carList: Car[];

  @Input('tabCarListNew') tabNew;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.handleData()
  }

  ngDoCheck(): void {
    this.handleData()  
  }

  handleData(){        
    this.carService.getCarList(this.tabNew).subscribe(resData => this.carList = resData.slice(0,8));
  }

}
