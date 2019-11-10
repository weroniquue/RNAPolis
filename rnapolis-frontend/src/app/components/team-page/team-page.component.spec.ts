import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TeamPageComponent} from './team-page.component';
import {DeleteButtonComponent} from '../basic-components/delete-button/delete-button.component';
import {GenericButtonComponent} from '../basic-components/generic-button/generic-button.component';
import {MenuComponent} from '../basic-components/menu/menu.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from '../basic-components/header/header.component';

describe('TeamPageComponent', () => {
  let component: TeamPageComponent;
  let fixture: ComponentFixture<TeamPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamPageComponent,
        DeleteButtonComponent,
        GenericButtonComponent,
        HeaderComponent,
        MenuComponent],
      imports: [MatInputModule,
        MatFormFieldModule,
        FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
