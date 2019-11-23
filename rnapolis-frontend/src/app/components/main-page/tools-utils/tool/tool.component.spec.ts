import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ToolComponent} from './tool.component';
import {GenericButtonComponent} from '../../../basic-components/generic-button/generic-button.component';
import {
  MAT_DIALOG_DATA, MatDialogModule,
  MatDialogRef,
  MatFormFieldModule, MatIconModule, MatInputModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

describe('ToolComponent', () => {
  let component: ToolComponent;
  let fixture: ComponentFixture<ToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToolComponent,
        GenericButtonComponent,
      ],
      imports: [
        NoopAnimationsModule,
        MatSelectModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        MatOptionModule,
        FormsModule,
        MatDialogModule
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolComponent);
    component = fixture.componentInstance;
    component.tool = {id: 'id', toolName: 'tool', description: 'desc', link: 'https://localshot:3000', category: 'category'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
