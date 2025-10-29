import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CARD_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxRippleDirective } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { ShipAmmunitionType } from '../models/ship-ammunition-data/ship-ammunition-type';
import { ShipAmmunitionDataService } from '../services/ship-ammunition-data.service';

@Component({
  selector: 'app-ammunition-view',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxIconComponent, IgxButtonDirective, IgxRippleDirective, FormsModule],
  templateUrl: './ammunition-view.component.html',
  styleUrls: ['./ammunition-view.component.scss']
})
export class AmmunitionViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public value?: string;
  public shipAmmunitionDataShipAmmunition: ShipAmmunitionType[] = [];

  constructor(
    public shipAmmunitionDataService: ShipAmmunitionDataService,
  ) {}


  ngOnInit() {
    this.shipAmmunitionDataService.getShipAmmunition().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.shipAmmunitionDataShipAmmunition = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
