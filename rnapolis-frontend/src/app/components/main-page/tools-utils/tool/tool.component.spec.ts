import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ToolComponent} from './tool.component';
import {GenericButtonComponent} from '../../../basic-components/generic-button/generic-button.component';
import {DeleteButtonComponent} from '../../../basic-components/delete-button/delete-button.component';
import {
  MatFormFieldModule, MatInputModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";

describe('ToolComponent', () => {
  let component: ToolComponent;
  let fixture: ComponentFixture<ToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToolComponent,
        GenericButtonComponent,
        DeleteButtonComponent
      ],
      imports: [
        NoopAnimationsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatOptionModule,
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolComponent);
    component = fixture.componentInstance;
    component.tool = {toolName: '', description: '', link: '', category: ''};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
