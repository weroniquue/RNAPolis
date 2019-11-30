import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EditAwardsComponent} from './edit-awards.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('EditAwardsComponent', () => {
  let component: EditAwardsComponent;
  let fixture: ComponentFixture<EditAwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditAwardsComponent],
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
    fixture = TestBed.createComponent(EditAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
