import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Books } from '../model/book';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  constructor(private readonly client: HttpClient) {}

  getBooks(): Observable<Books> {
    return this.client
      .get<Books>('http://localhost:4730/books')
      .pipe(delay(3000));
  }
}
