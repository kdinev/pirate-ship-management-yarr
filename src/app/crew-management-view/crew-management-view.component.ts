import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CARD_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxRippleDirective } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { PirateCrewMembersType } from '../models/black-jack/pirate-crew-members-type';
import { BlackJackService } from '../services/black-jack.service';

@Component({
  selector: 'app-crew-management-view',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxIconComponent, IgxButtonDirective, IgxRippleDirective, FormsModule],
  templateUrl: './crew-management-view.component.html',
  styleUrls: ['./crew-management-view.component.scss']
})
export class CrewManagementViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public value?: string;
  public blackJackPirateCrewMembers: PirateCrewMembersType[] = [];

  constructor(
    public blackJackService: BlackJackService,
  ) {}


  ngOnInit() {
    this.blackJackService.getPirateCrewMembers().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.blackJackPirateCrewMembers = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
