import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter: string, propName: string): any {

    const resultArray = [];

    if (value.length === 0 || filter == null || filter === '') {
      return value;
    }

    for (const val of value) {
      if (val[propName] === filter) {
        resultArray.push(val);
      }
    }

    return resultArray;
  }
}
