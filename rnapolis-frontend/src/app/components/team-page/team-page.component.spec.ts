import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TeamPageComponent} from './team-page.component';
import {MenuComponent} from '../basic-components/menu/menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from '../basic-components/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MemberManagerComponent} from './member-manager/member-manager.component';
import {MatFormFieldModule} from '@angular/material/form-field';

describe('TeamPageComponent', () => {
  let component: TeamPageComponent;
  let fixture: ComponentFixture<TeamPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TeamPageComponent,
        MemberManagerComponent,
        HeaderComponent,
        MenuComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
      ]
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
