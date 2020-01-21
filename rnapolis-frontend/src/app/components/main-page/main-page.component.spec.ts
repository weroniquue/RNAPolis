import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MainPageComponent} from './main-page.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FooterComponent} from '../basic-components/footer/footer.component';
import {MainHeaderComponent} from '../main-header/main-header.component';
import {ToolComponent} from './tools-utils/tool/tool.component';
import {GenericButtonComponent} from '../basic-components/generic-button/generic-button.component';
import {
  MAT_DIALOG_DATA, MatDialogModule,
  MatDialogRef,
  MatFormFieldModule, MatIconModule, MatInputModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import {AddToolComponent} from './tools-utils/add-tool/add-tool.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ToolFilterPipe} from './tool-filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NotifierModule} from 'angular-notifier';
import {HttpClientTestingModule} from '@angular/common/http/testing';


describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainPageComponent,
        MainHeaderComponent,
        ToolComponent,
        GenericButtonComponent,
        FooterComponent,
        AddToolComponent,
        ToolFilterPipe
      ],
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatOptionModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        NotifierModule
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
