import { Component, OnInit } from '@angular/core';
import { Books } from '../model/book';
import { BookDataService } from '../shared/book-data.service';

@Component({
  selector: 'sts-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Books;

  constructor(private readonly bookData: BookDataService) {}

  ngOnInit(): void {
    this.books = this.bookData.getBooks();
  }
}
