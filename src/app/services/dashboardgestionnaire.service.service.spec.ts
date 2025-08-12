import { TestBed } from '@angular/core/testing';

import { DashboardgestionnaireServiceService } from './dashboardgestionnaire.service.service';

describe('DashboardgestionnaireServiceService', () => {
  let service: DashboardgestionnaireServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardgestionnaireServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
