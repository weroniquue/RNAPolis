import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PublicationFormComponent} from './publication-form.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {BrowserModule} from '@angular/platform-browser';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

describe('PublicationFormComponent', () => {
  let component: PublicationFormComponent;
  let fixture: ComponentFixture<PublicationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationFormComponent],
      imports: [NoopAnimationsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatOptionModule,
        MatInputModule,
        MatIconModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule],
      providers: [
        FormBuilder,
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: [[], {}]}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
