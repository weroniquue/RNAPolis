import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainPageComponent} from './main-page.component';
import {MenuComponent} from '../basic-components/menu/menu.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FooterComponent} from '../basic-components/footer/footer.component';
import {MainHeaderComponent} from '../main-header/main-header.component';
import {ToolComponent} from './tools-utils/tool/tool.component';
import {GenericButtonComponent} from '../basic-components/generic-button/generic-button.component';


describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainPageComponent,
        MenuComponent,
        MainHeaderComponent,
        ToolComponent,
        GenericButtonComponent,
        FooterComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
