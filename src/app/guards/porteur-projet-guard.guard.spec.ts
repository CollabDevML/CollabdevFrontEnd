import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { porteurProjetGuardGuard } from './porteur-projet-guard.guard';

describe('porteurProjetGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => porteurProjetGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
