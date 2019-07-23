import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from '../models/car.model';
import { carList } from '../mock-data/car-list.mock-data';
import { SearchOption } from '../models/search-options.class';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCarList(getNew = undefined): Observable<Car[]>{          
    if(getNew === undefined)
      return of(carList);
    else if(getNew === 'true'){
      return of(carList.filter( car => car.isNew ))
    }
    return of(carList.filter(car => !car.isNew))
  }
/* 
  condition: 0 -> new car; 1 -> old car
  origin: 0 -> All; 1 -> xe trong nước; 2 -> xe xuất khẩu
*/
  getCarListByCriteria(searchOptions: SearchOption): Observable<Car[]>{
        
    let result = carList;

    switch (searchOptions.condition) {
      case '1':
        result = carList.filter(item => item.isNew === false);
        break;

      case '0':
        result = carList.filter(item => item.isNew === true);
        break;

      default:
        result = carList.filter(item => item.isNew === true);
        break;

    }   

    if(searchOptions.model !== '0')
      result = result.filter(item => item.model === searchOptions.model);

    if(searchOptions.fuelType !== '0')
      result = result.filter(item => item.fuelType === searchOptions.fuelType);

    if(searchOptions.seats !== '0')
      result = result.filter(item => item.seats === searchOptions.seats);
    
    if(searchOptions.origin !== '0')
      result = result.filter(item => item.origin === searchOptions.origin)

    result = result.filter(item => Number(item.carPrice) <= searchOptions.maxPrice && Number(item.carPrice) >= searchOptions.minPrice)

    return of(result);
  }
}
