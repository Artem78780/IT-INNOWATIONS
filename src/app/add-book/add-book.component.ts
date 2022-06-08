import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookForm!: FormGroup

  listBook: any

  books: Book[] = []
  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.init()
  }
  init() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      publishDate: ['', Validators.required],
      PageCount: ['', Validators.required],
    })
  }

  saveBook(){
    this.bookService.addBook(this.bookForm.value).subscribe(result => alert(`Add new book ${result}`))
  }

  addBook() {
    this.listBook.push(this.bookForm.value)
  }

}
