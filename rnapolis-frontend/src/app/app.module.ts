import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing-module';
import {MainPageComponent} from './components/main-page/main-page.component';
import {MenuComponent} from './components/menu/menu.component';
import {AwardsTimelineComponent} from './components/award-section/awards-timeline/awards-timeline.component';
import {AwardsPageComponent} from './components/award-section/awards-page/awards-page.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DeleteButtonComponent} from './components/basic-components/delete-button/delete-button.component';
import {GenericButtonComponent} from './components/basic-components/generic-button/generic-button.component';
import {FooterComponent} from './components/footer/footer.component';
import {TeamPageComponent} from "./components/team-page/team-page.component";
import {PageNotFoundComponent} from './components/basic-components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MenuComponent,
    FooterComponent,
    PageNotFoundComponent,
    AwardsTimelineComponent,
    AwardsPageComponent,
    DeleteButtonComponent,
    GenericButtonComponent,
    TeamPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
