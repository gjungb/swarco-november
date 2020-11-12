import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sts-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    const isbn = this.route.snapshot.paramMap.get('isbn');

    // TODO ask service for book...
  }

}
