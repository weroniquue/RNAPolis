import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PublicationsPageComponent} from './publications-page.component';
import {MenuComponent} from '../basic-components/menu/menu.component';
import {HeaderComponent} from '../basic-components/header/header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {PublicationFormComponent} from './publication-form/publication-form.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {MatCardModule} from '@angular/material';
import {NotifierService} from 'angular-notifier';

describe('PublicationsPageComponent', () => {
  let component: PublicationsPageComponent;
  let fixture: ComponentFixture<PublicationsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PublicationsPageComponent,
        MenuComponent,
        HeaderComponent,
        PublicationFormComponent
      ],
      imports: [
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatDialogModule,
        HttpClientModule,
        RouterTestingModule,
        MatCardModule
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
    fixture = TestBed.createComponent(PublicationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
