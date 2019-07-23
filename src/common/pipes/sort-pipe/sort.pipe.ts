import { Pipe, PipeTransform } from "@angular/core";
import { Car } from "src/common/models/car.model";

@Pipe({
  name: "sort"
})
/*
sortCritiria = [
    { value: 0, display: "Ngày: Mới nhất" },
    { value: 1, display: "Ngày: Cũ nhất" },
    { value: 2, display: "Giá: Cao nhất" },
    { value: 3, display: "Giá: Thấp nhất" }
  ];
*/
export class SortPipe implements PipeTransform {
  transform(value: Car[], sortBy: string = "0"): any {
    switch (sortBy) {
      case "3":
        value.sort((x: Car, y: Car) => {
          return Number(x.carPrice) - Number(y.carPrice);
        });
        break;

      case "2":
        value.sort((x: Car, y: Car) => {
          return Number(y.carPrice) - Number(x.carPrice);
        });
        break;
        
      default:
        break;
    }
    
    return value;
  }
}
