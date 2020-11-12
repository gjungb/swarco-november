import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Book } from '../model/book';

@Component({
  selector: 'sts-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
})
export class BookEditComponent implements OnInit {
  form: FormGroup;

  book: Book = {
    isbn: '123-',
    title: 'Angular ist der Hit!',
  };

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });

    this.form.valueChanges.pipe(tap(v => console.log(v))).subscribe();
  }

  updateBook(value: Pick<Book, 'title'>): void {
    // TODO: send form data
    console.log(value.title);
  }
}
