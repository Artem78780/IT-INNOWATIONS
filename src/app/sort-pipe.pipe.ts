import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe',
  pure: true
})
export class SortPipePipe implements PipeTransform {

  transform(list: any[], column: string): any[] {
    let sortedArr = list.sort((a: any, b: any): any => {
      if (a[column] > b[column]) {
        return 1
      }
      else {
        return
        -1
      }
      return 0
    })
    return sortedArr
  }

}
