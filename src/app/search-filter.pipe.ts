import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';
@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(book: Book[], searchValue:string): Book[] {
    if(!book || !searchValue) {
      return book
    }
    return book.filter(book => book.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
