import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShipMaintenanceTasksType } from '../models/ship-maintenance-tasks/ship-maintenance-tasks-type';
import { ShipMaintenanceTasks } from '../static-data/ship-maintenance-tasks';

@Injectable({
  providedIn: 'root'
})
export class ShipMaintenanceTasksService {
  public getShipMaintenanceTasks(): Observable<ShipMaintenanceTasksType[]> {
    return of(ShipMaintenanceTasks['ShipMaintenanceTasksType']);
  }
}
