import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShipSuppliesType } from '../models/ship-supplies-cargo/ship-supplies-type';
import { ShipSuppliesCargo } from '../static-data/ship-supplies-cargo';

@Injectable({
  providedIn: 'root'
})
export class ShipSuppliesCargoService {
  public getShipSupplies(): Observable<ShipSuppliesType[]> {
    return of(ShipSuppliesCargo['ShipSuppliesType']);
  }
}
