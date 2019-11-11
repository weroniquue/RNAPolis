import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AddToolComponent} from './add-tool.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatFormFieldModule, MatInputModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';

describe('AddToolComponent', () => {
  let component: AddToolComponent;
  let fixture: ComponentFixture<AddToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddToolComponent
      ],
      imports: [
        NoopAnimationsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatOptionModule,
        MatInputModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        FormBuilder,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
