import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FooterComponent} from './footer.component';
import {RouterTestingModule} from '@angular/router/testing';
import {NotifierModule} from 'angular-notifier';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [
        RouterTestingModule,
        NotifierModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
