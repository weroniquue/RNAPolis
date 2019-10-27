import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GenericButtonComponent} from './generic-button.component';
import {FormsModule} from '@angular/forms';

describe('GenericButtonComponent', () => {
  let component: GenericButtonComponent;
  let fixture: ComponentFixture<GenericButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GenericButtonComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
