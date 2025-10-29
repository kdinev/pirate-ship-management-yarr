import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PirateCrewMembersType } from '../models/black-jack/pirate-crew-members-type';
import { BlackJack } from '../static-data/black-jack';

@Injectable({
  providedIn: 'root'
})
export class BlackJackService {
  public getPirateCrewMembers(): Observable<PirateCrewMembersType[]> {
    return of(BlackJack['PirateCrewMembersType']);
  }
}
