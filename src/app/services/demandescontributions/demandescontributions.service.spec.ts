import { TestBed } from '@angular/core/testing';

import { DemandescontributionsService } from './demandescontributions.service';

describe('DemandescontributionsService', () => {
  let service: DemandescontributionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandescontributionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
