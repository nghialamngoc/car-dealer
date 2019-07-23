import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-listing-top',
  templateUrl: './car-listing-top.component.html',
  styleUrls: ['./car-listing-top.component.scss']
})
export class CarListingTopComponent implements OnInit {

  tabCarListNew: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  
  onToggle(isNew: boolean){
    this.tabCarListNew = isNew;
  }
}
