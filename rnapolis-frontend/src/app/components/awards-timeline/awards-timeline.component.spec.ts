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
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Award} from '../../entity/award';
import {from} from 'rxjs';

describe('AwardsTimelineComponent', () => {
  let component: AwardsTimelineComponent;
  let fixture: ComponentFixture<AwardsTimelineComponent>;
  let httpMock: HttpTestingController;

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
    }).compileComponents();

    httpMock = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set award data', () => {
    const number = 1;
    const award: Award[] = [{id: '', description: '', year: 2020}];
    spyOn(component.awardsService, 'getAwards').and.returnValue(from(new Map<number, Award[]>().set(number, award)));

    component.ngOnInit();

    expect(component.awards.set(number, award)).toBeTruthy();
    expect(component.awards.size).toEqual(1);
    expect(component.awards.get(number)).toEqual(award);

  });
})
;
