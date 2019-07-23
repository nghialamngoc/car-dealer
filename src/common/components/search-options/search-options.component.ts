import { Component, OnInit, ViewChild } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { SearchOption } from 'src/common/models/search-options.class';

@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.scss']
})
export class SearchOptionsComponent implements OnInit {

  carModel = [
    { value: 0, display: 'All'},
    { value: 1, display: 'Yaris'},
    { value: 2, display: 'Wigo'},
    { value: 3, display: 'Vios'},
    { value: 4, display: 'Corolla Altis'},
    { value: 5, display: 'Camry'},
    { value: 6, display: 'Fortuner '},
    { value: 7, display: 'Land Cruiser Prado'},
    { value: 8, display: 'Land Cruiser'},
    { value: 9, display: 'Alphard luxury'},
    { value: 10, display: 'Rush'},
    { value: 11, display: 'Innova'},
    { value: 12, display: 'Avanza'},
    { value: 13, display: 'Hiace'},
    { value: 14, display: 'Hilux'},    
  ];
  
  totalSeats = [
    { value: 0, display: 'All' },
    { value: 5, display: '5 chỗ' },
    { value: 7, display: '7 chỗ' },
    { value: 8, display: '8 chỗ' },
    { value: 15, display: '15 chỗ' },    
  ]
  
  minValue: number = 500;
  maxValue: number = 2000;

  options: Options = {
    floor: 500,
    ceil: 2000,
    outputEventsInterval: 1000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> ' + value + 'Tr';
        case LabelType.High:
          return '<b>Max price:</b> ' + value + 'Tr';
        default:
          return value + 'Tr';
      }
    }
  };
  
  selectedCondition: string = '0';
  selectedModel: string = '0';
  selectedFuel: string = '0';
  selectedSeat: string = '0';
  selectedOrigin: string = '0';

  searchOptions: SearchOption = {
    condition: this.selectedCondition,
    model: this.selectedModel,
    fuelType: this.selectedFuel,
    seats: this.selectedSeat,    
    origin: this.selectedOrigin,
    minPrice: this.minValue,
    maxPrice: this.maxValue
  }
  constructor() { }

  ngOnInit() {
  }

  formChange(){    
    this.searchOptions.condition = this.selectedCondition;
    this.searchOptions.fuelType = this.selectedFuel;
    this.searchOptions.model = this.selectedModel;
    this.searchOptions.seats = this.selectedSeat;
    this.searchOptions.origin = this.selectedOrigin;
    
    console.log(this.searchOptions)
  }

  minChange(e){
    this.searchOptions.minPrice = Number(e);  
    console.log(this.searchOptions)    
  }

  maxChange(e){
    this.searchOptions.maxPrice = Number(e); 
    console.log(this.searchOptions)   
  }
}
