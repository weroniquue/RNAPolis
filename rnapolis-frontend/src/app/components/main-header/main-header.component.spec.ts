import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderComponent } from './main-header.component';
import {NotifierModule} from 'angular-notifier';

describe('MainHeaderComponent', () => {
  let component: MainHeaderComponent;
  let fixture: ComponentFixture<MainHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHeaderComponent ],
      imports: [ NotifierModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
