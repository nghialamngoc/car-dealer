import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTechnical'
})
export class FilterTechnicalPipe implements PipeTransform {

  transform(value: any[], group: string): any {
    return value.filter(x => x.group.toLowerCase() === group.toLowerCase());
  }

}
