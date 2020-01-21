import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FooterComponent} from './components/basic-components/footer/footer.component';
import {MenuComponent} from './components/basic-components/menu/menu.component';
import {NotifierModule} from 'angular-notifier';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuComponent,
        FooterComponent
      ],
      imports: [RouterTestingModule,
        HttpClientTestingModule,
        NotifierModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
