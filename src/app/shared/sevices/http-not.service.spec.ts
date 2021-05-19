import { TestBed } from '@angular/core/testing';

import { HttpNotService } from './http-not.service';

describe('HttpNotService', () => {
  let service: HttpNotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpNotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
