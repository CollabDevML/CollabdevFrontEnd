import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { contributeurGuardGuard } from './contributeur-guard.guard';

describe('contributeurGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => contributeurGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
