import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PiratePlansDataService } from './pirate-plans-data.service';

describe('PiratePlansDataService', () => {
  let service: PiratePlansDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(PiratePlansDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
