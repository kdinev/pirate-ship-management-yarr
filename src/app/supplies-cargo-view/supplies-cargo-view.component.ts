import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CARD_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxRippleDirective } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { ShipSuppliesType } from '../models/ship-supplies-cargo/ship-supplies-type';
import { ShipSuppliesCargoService } from '../services/ship-supplies-cargo.service';

@Component({
  selector: 'app-supplies-cargo-view',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxIconComponent, IgxButtonDirective, IgxRippleDirective, FormsModule],
  templateUrl: './supplies-cargo-view.component.html',
  styleUrls: ['./supplies-cargo-view.component.scss']
})
export class SuppliesCargoViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public value?: string;
  public shipSuppliesCargoShipSupplies: ShipSuppliesType[] = [];

  constructor(
    public shipSuppliesCargoService: ShipSuppliesCargoService,
  ) {}


  ngOnInit() {
    this.shipSuppliesCargoService.getShipSupplies().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.shipSuppliesCargoShipSupplies = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
