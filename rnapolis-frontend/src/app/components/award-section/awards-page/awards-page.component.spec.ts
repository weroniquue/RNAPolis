import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AwardsPageComponent} from './awards-page.component';
import {AwardsTimelineComponent} from '../awards-timeline/awards-timeline.component';
import {MenuComponent} from '../../menu/menu.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {GenericButtonComponent} from '../../basic-components/generic-button/generic-button.component';
import {DeleteButtonComponent} from '../../basic-components/delete-button/delete-button.component';
import {FormsModule} from '@angular/forms';

describe('AwardsPageComponent', () => {
  let component: AwardsPageComponent;
  let fixture: ComponentFixture<AwardsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AwardsPageComponent,
        AwardsTimelineComponent,
        MenuComponent,
        GenericButtonComponent,
        DeleteButtonComponent],
      imports: [MatInputModule, MatFormFieldModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
