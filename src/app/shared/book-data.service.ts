import { Injectable } from '@angular/core';
import { Books } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor() { }

  getBooks(): Books {
    return [
      {
        isbn: '978-3-86680-192-9',
        title: 'Design Patterns',
        subtitle: 'Elements of Reusable Object-Oriented Software',
      },
      {
        isbn: '978-3-86680-192-9',
        title: 'REST und HTTP',
        subtitle: 'Entwicklung und Integration nach dem Architekturstil des Web',
      },
      {
        isbn: '978-3-86680-192-9',
        title: 'Eloquent JavaScript',
        subtitle: 'A Modern Introduction to Programming',
      },
    ];
  }
}
