import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { Book } from '../book';
import { BookService } from '../book.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[] = []
  searchBook = ''
  selectedBook?: Book


  
  constructor(private bookService: BookService) { 
    this.books = this.books.slice()
  }

  ngOnInit(): void {
    this.getBooks()
  }

  onSelect(book: Book) {
    this.selectedBook = book
  }

  getBooks() {
    this.bookService.getData()
      .subscribe(books => this.books = books.slice(0, 5))
  }


   sortData(sort: Sort) {
     const data = this.books.slice()
     if (!sort.active || sort.direction === '') {
       this.books = data
       return
     }

     this.books = data.sort((a: any, b: any): any => {
       const isAsc = sort.direction === 'asc'
       switch (sort.active) {
         case 'title':
           return compare(a.title, b.title, isAsc);
         case 'pageCount':
           return compare(a.pageCount, b.pageCount, isAsc);
         case 'publishDate':
           return compare(a.publishDate, b.publishDate, isAsc);
         default:
           return 0;
       }
     })
   }
}
 function compare(a: number | string, b: number | string, isAsc: boolean): any {
   return (a < b ? -1 : 1) * (isAsc ? 1 : -1)
 }
