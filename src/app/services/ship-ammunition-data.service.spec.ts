import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ShipAmmunitionDataService } from './ship-ammunition-data.service';

describe('ShipAmmunitionDataService', () => {
  let service: ShipAmmunitionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(ShipAmmunitionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
