import { TestBed } from '@angular/core/testing';

import { BookStubService } from './book-stub.service';

describe('BookStubService', () => {
  let service: BookStubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookStubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
