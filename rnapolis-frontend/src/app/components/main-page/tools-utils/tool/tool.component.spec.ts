import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolComponent } from './tool.component';
import {GenericButtonComponent} from '../../../basic-components/generic-button/generic-button.component';

describe('ToolComponent', () => {
  let component: ToolComponent;
  let fixture: ComponentFixture<ToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToolComponent,
        GenericButtonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolComponent);
    component = fixture.componentInstance;
    component.tool = {toolName: '', description: '', link: '', category: ''}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
