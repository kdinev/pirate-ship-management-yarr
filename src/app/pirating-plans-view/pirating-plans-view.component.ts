import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { PiratePlansType } from '../models/pirate-plans-data/pirate-plans-type';
import { PiratePlansDataService } from '../services/pirate-plans-data.service';

@Component({
  selector: 'app-pirating-plans-view',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxIconComponent, FormsModule],
  templateUrl: './pirating-plans-view.component.html',
  styleUrls: ['./pirating-plans-view.component.scss']
})
export class PiratingPlansViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public value?: string;
  public piratePlansDataPiratePlans: PiratePlansType[] = [];

  constructor(
    public piratePlansDataService: PiratePlansDataService,
  ) {}


  ngOnInit() {
    this.piratePlansDataService.getPiratePlans().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.piratePlansDataPiratePlans = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
