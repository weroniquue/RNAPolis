import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsTimelineComponent } from './awards-timeline.component';

describe('AwardsTimelineComponent', () => {
  let component: AwardsTimelineComponent;
  let fixture: ComponentFixture<AwardsTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardsTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
