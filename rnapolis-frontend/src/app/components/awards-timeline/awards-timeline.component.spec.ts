import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AwardsTimelineComponent} from './awards-timeline.component';
import {GenericButtonComponent} from '../basic-components/generic-button/generic-button.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatCardModule,
  MatDialogModule,
  MatDialogRef,
  MatFormFieldModule,
  MatIconModule
} from '@angular/material';
import {MenuComponent} from '../basic-components/menu/menu.component';
import {HeaderComponent} from '../basic-components/header/header.component';
import {EditAwardsComponent} from './edit-awards/edit-awards.component';
import {RouterTestingModule} from '@angular/router/testing';
import {NotifierService} from 'angular-notifier';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AwardsTimelineComponent', () => {
  let component: AwardsTimelineComponent;
  let fixture: ComponentFixture<AwardsTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AwardsTimelineComponent,
        GenericButtonComponent,
        MenuComponent,
        HeaderComponent,
        EditAwardsComponent
      ],
      imports: [
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatDialogModule,
        MatCardModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
        {provide: NotifierService}
      ]
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
