import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PiratePlansType } from '../models/pirate-plans-data/pirate-plans-type';
import { PiratePlansData } from '../static-data/pirate-plans-data';

@Injectable({
  providedIn: 'root'
})
export class PiratePlansDataService {
  public getPiratePlans(): Observable<PiratePlansType[]> {
    return of(PiratePlansData['PiratePlansType']);
  }
}
