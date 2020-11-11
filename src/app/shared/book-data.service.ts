import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
    return of([
      {
        isbn: '978-3-86680-192-9',
        title: 'Design Patterns',
        subtitle: 'Elements of Reusable Object-Oriented Software',
      },
      {
        isbn: '978-3-86680-192-9',
        title: 'REST und HTTP',
        subtitle:
          'Entwicklung und Integration nach dem Architekturstil des Web',
      },
      {
        isbn: '978-3-86680-192-9',
        title: 'Eloquent JavaScript',
        subtitle: 'A Modern Introduction to Programming',
      },
    ]);
  }
}
