import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CARD_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxRippleDirective } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { ShipMaintenanceTasksType } from '../models/ship-maintenance-tasks/ship-maintenance-tasks-type';
import { ShipMaintenanceTasksService } from '../services/ship-maintenance-tasks.service';

@Component({
  selector: 'app-ship-maintenance-view',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxIconComponent, IgxButtonDirective, IgxRippleDirective, FormsModule],
  templateUrl: './ship-maintenance-view.component.html',
  styleUrls: ['./ship-maintenance-view.component.scss']
})
export class ShipMaintenanceViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public value?: string;
  public shipMaintenanceTasksShipMaintenanceTasks: ShipMaintenanceTasksType[] = [];

  constructor(
    public shipMaintenanceTasksService: ShipMaintenanceTasksService,
  ) {}


  ngOnInit() {
    this.shipMaintenanceTasksService.getShipMaintenanceTasks().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.shipMaintenanceTasksShipMaintenanceTasks = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
