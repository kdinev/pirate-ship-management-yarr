import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShipAmmunitionType } from '../models/ship-ammunition-data/ship-ammunition-type';
import { ShipAmmunitionData } from '../static-data/ship-ammunition-data';

@Injectable({
  providedIn: 'root'
})
export class ShipAmmunitionDataService {
  public getShipAmmunition(): Observable<ShipAmmunitionType[]> {
    return of(ShipAmmunitionData['ShipAmmunitionType']);
  }
}
