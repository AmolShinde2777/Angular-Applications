import { TestBed } from '@angular/core/testing';

import { AgencyDataService } from './agency-data.service';

describe('AgencyDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgencyDataService = TestBed.get(AgencyDataService);
    expect(service).toBeTruthy();
  });
});
