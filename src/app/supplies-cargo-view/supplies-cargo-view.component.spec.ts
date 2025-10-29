import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxRippleDirective } from '@infragistics/igniteui-angular';
import { SuppliesCargoViewComponent } from './supplies-cargo-view.component';

describe('SuppliesCargoViewComponent', () => {
  let component: SuppliesCargoViewComponent;
  let fixture: ComponentFixture<SuppliesCargoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuppliesCargoViewComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxRippleDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppliesCargoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
