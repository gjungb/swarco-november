import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Books } from '../model/book';
import { BookDataService } from '../shared/book-data.service';
import { BookStubService } from '../stubs/book-stub.service';

@Component({
  selector: 'sts-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [
    {
      provide: BookDataService,
      useClass: BookStubService
    }
  ]
})
export class BookListComponent implements OnInit, OnDestroy {
  // books: Books;

  books$: Observable<Books>;

  ticker$: Observable<number>;

  max = 10;

  private sub: Subscription;

  constructor(private readonly bookData: BookDataService) {}

  ngOnInit(): void {
    this.ticker$ = interval(2000).pipe(tap((v) => console.log(v)));

    // this.sub = ticker$.pipe(tap((v) => console.log(v))).subscribe();

    this.books$ = this.bookData.getBooks();

    // pipe
    // books$.pipe(tap((res) => console.log(res))).subscribe({
    //   next: (value) => {
    //     this.books = value;
    //   },
    //   complete: () => {
    //     console.log('done');
    //   },
    // });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
