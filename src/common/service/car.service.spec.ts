import { TestBed } from '@angular/core/testing';

import { CarService } from './car.service';
import { carList } from '../mock-data/car-list.mock-data';
import { Car } from '../models/car.model';
import { SearchOption } from '../models/search-options.class';

describe('CarService', () => {
  let service: CarService;
  let dummyCarList: Car[] = carList;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.get(CarService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCarList method testing with getNew = undifined', () => {
    service.getCarList().subscribe(result => expect(result).toEqual(dummyCarList));
  });

  it('getCarList method testing with getNew = true', () => {
    service.getCarList('true').subscribe(result => expect(result).toEqual(dummyCarList.filter(x => x.isNew)))
  });

  it('getCarList method testing with getNew = false', () => {
    service.getCarList('false').subscribe(result => expect(result).toEqual(dummyCarList.filter(x => !x.isNew)))
  });

  it('getCarListByCriteria method testing with searchOptions.condition = 0', () => {
    let searchOptions: SearchOption = {
      condition: "0",
      fuelType: "1",
      maxPrice: 2000,
      minPrice: 200,
      model: "2",
      origin: "1",
      seats: "1",
    }
    service.getCarListByCriteria(searchOptions).subscribe(result => expect(result.length).toEqual(
      dummyCarList.filter(item => item.isNew === true  &&
        item.model === searchOptions.model && 
        item.fuelType === searchOptions.fuelType &&
        item.seats === searchOptions.seats &&
        item.origin === searchOptions.origin &&       
        Number(item.carPrice) >= searchOptions.minPrice &&
        Number(item.carPrice) <= searchOptions.maxPrice).length))
  });

  it('getCarListByCriteria method testing with searchOptions.condition = 1', () => {
    let searchOptions: SearchOption = {
      condition: "1",
      fuelType: "0",
      maxPrice: 2000,
      minPrice: 200,
      model: '0',
      origin: "0",
      seats: "0",
    }
    service.getCarListByCriteria(searchOptions).subscribe(result => expect(result.length).toEqual(
      dummyCarList.filter(item => 
        item.isNew === false  &&             
        Number(item.carPrice) >= searchOptions.minPrice &&
        Number(item.carPrice) <= searchOptions.maxPrice).length))
  });

  it('getCarListByCriteria method testing with searchOptions.condition = 1', () => {
    let searchOptions: SearchOption = {
      condition: "3",
      fuelType: "0",
      maxPrice: 2000,
      minPrice: 200,
      model: "0",
      origin: "2",
      seats: "0",
    }
    service.getCarListByCriteria(searchOptions).subscribe(result => expect(result.length).toEqual(
      dummyCarList.filter(item => 
        item.isNew === true  &&         
        item.origin === searchOptions.origin &&            
        Number(item.carPrice) >= searchOptions.minPrice &&
        Number(item.carPrice) <= searchOptions.maxPrice).length))
  });
});
