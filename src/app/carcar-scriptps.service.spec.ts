import { TestBed } from '@angular/core/testing';

import { CarcarScriptpsService } from './carcar-scriptps.service';

describe('CarcarScriptpsService', () => {
  let service: CarcarScriptpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarcarScriptpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
