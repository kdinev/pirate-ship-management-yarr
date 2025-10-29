import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_GRID_DIRECTIVES } from '@infragistics/igniteui-angular';
import { PiratingPlansViewComponent } from './pirating-plans-view.component';

describe('PiratingPlansViewComponent', () => {
  let component: PiratingPlansViewComponent;
  let fixture: ComponentFixture<PiratingPlansViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiratingPlansViewComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_GRID_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiratingPlansViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
