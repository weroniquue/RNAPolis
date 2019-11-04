import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AwardsTimelineComponent} from './awards-timeline.component';
import {DeleteButtonComponent} from '../basic-components/delete-button/delete-button.component';
import {GenericButtonComponent} from '../basic-components/generic-button/generic-button.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material';
import {MenuComponent} from '../menu/menu.component';
import {HeaderComponent} from '../basic-components/header/header.component';

describe('AwardsTimelineComponent', () => {
  let component: AwardsTimelineComponent;
  let fixture: ComponentFixture<AwardsTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AwardsTimelineComponent,
        DeleteButtonComponent,
        GenericButtonComponent,
        MenuComponent,
        HeaderComponent
      ],
      imports: [
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
