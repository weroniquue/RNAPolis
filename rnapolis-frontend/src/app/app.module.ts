import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing-module';
import {MainPageComponent} from './components/main-page/main-page.component';
import {MenuComponent} from './components/menu/menu.component';
import {TeamPageComponent} from "./components/team-page/team-page.component";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MenuComponent,
    TeamPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
