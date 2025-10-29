import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BlackJackService } from './black-jack.service';

describe('BlackJackService', () => {
  let service: BlackJackService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(BlackJackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
