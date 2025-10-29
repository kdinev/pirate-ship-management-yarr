import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ShipSuppliesCargoService } from './ship-supplies-cargo.service';

describe('ShipSuppliesCargoService', () => {
  let service: ShipSuppliesCargoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(ShipSuppliesCargoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
