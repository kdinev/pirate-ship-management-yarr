import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ShipMaintenanceTasksService } from './ship-maintenance-tasks.service';

describe('ShipMaintenanceTasksService', () => {
  let service: ShipMaintenanceTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(ShipMaintenanceTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
