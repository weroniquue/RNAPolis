import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TeamPageComponent} from './team-page.component';
import {MenuComponent} from '../basic-components/menu/menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from '../basic-components/header/header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Routes} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {MemberManagerComponent} from './member-manager/member-manager.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, MatIconModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {NotifierService} from 'angular-notifier';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


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
        HttpClientTestingModule,
        MatProgressSpinnerModule
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
        AuthenticationService,
        {provide: NotifierService}
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
