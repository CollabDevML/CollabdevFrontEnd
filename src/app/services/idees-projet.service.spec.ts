import { TestBed } from '@angular/core/testing';

import { IdeesProjetService } from './idees-projet.service';

describe('IdeesProjetService', () => {
  let service: IdeesProjetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdeesProjetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
