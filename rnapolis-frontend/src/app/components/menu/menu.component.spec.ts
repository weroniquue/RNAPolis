import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import {MenuComponent} from './menu.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should be false after Esc press', fakeAsync(() => {
    const compiled = fixture.debugElement.nativeElement;
    const elem = compiled.querySelector('input');
    component.isChecked = true;
    const event = new KeyboardEvent('keypress', {
      key: 'Escape'
    });
    component.handleKeyboardEvent(event);
    fixture.whenStable().then(() => {
      expect(elem.checked).toBe(false);
    });
  }));
});
