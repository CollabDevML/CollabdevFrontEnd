import { TestBed } from '@angular/core/testing';

import { IdToIntService } from './id-to-int.service';

describe('IdToIntService', () => {
  let service: IdToIntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdToIntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
