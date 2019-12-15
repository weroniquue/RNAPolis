import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TeamPageComponent} from './team-page.component';
import {MenuComponent} from '../basic-components/menu/menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from '../basic-components/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MemberManagerComponent} from './member-manager/member-manager.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import {Router, RouterModule, Routes} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {AppRoutingModule} from '../../app-routing-module';
import {MainPageComponent} from '../main-page/main-page.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('TeamPageComponent', () => {
  let component: TeamPageComponent;
  let fixture: ComponentFixture<TeamPageComponent>;

  const routes: Routes = [
    {path: '', redirectTo: '/mock', pathMatch: 'full'}];

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
        MatFormFieldModule,
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
        AuthenticationService
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
