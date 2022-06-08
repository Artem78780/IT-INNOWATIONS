import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
 

  constructor(private http: HttpClient) { }

  basePath: string = 'http://fakerestapi.azurewebsites.net/api/v1/Books'

  getData(): Observable<Book[]>{
    return this.http.get<Book[]>(this.basePath)
  }

  addBook(book: any): Observable<Book[]>{
    return this.http.post<Book[]>( 'http://fakerestapi.azurewebsites.net/api/v1/Books', book)
  }

}
