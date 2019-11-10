import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolComponent } from './tool.component';
import {GenericButtonComponent} from '../../basic-components/generic-button/generic-button.component';
import {Tool} from '../../../entity/tool';

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
    component.tool = new Tool('', '', '');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
