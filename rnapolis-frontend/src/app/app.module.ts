import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {AppComponent} from './app.component';
import {AwardsPageComponent} from './components/award-section/awards-page/awards-page.component';
import {AwardsTimelineComponent} from './components/award-section/awards-timeline/awards-timeline.component';
import {DeleteButtonComponent} from './components/basic-components/delete-button/delete-button.component';
import {FooterComponent} from './components/footer/footer.component';
import {GenericButtonComponent} from './components/basic-components/generic-button/generic-button.component';
import {HeaderComponent} from './components/header/header.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {MenuComponent} from './components/menu/menu.component';
import {PageNotFoundComponent} from './components/basic-components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AwardsPageComponent,
    AwardsTimelineComponent,
    DeleteButtonComponent,
    FooterComponent,
    GenericButtonComponent,
    HeaderComponent,
    MainPageComponent,
    MenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
