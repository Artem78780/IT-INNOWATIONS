import { Component, OnInit, Input } from '@angular/core';


import { Book } from '../book';

@Component({
  selector: 'app-book-modal-window',
  templateUrl: './book-modal-window.component.html',
  styleUrls: ['./book-modal-window.component.css']
})
export class BookModalWindowComponent implements OnInit {

  @Input() book?: Book


  constructor() { }

  ngOnInit(): void {

  }



}
