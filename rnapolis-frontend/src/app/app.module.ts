import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
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
import {MainHeaderComponent} from './components/main-header/main-header.component';
import {TeamPageComponent} from './components/team-page/team-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AwardsPageComponent,
    AwardsTimelineComponent,
    DeleteButtonComponent,
    FooterComponent,
    GenericButtonComponent,
    MainHeaderComponent,
    HeaderComponent,
    MainPageComponent,
    MenuComponent,
    PageNotFoundComponent,
    TeamPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
