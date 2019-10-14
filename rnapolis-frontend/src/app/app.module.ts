import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing-module';
import {MainPageComponent} from './components/main-page/main-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { AwardsTimelineComponent } from './components/award-section/awards-timeline/awards-timeline.component';
import { AwardsPageComponent } from './components/award-section/awards-page/awards-page.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material";
import { DeleteButtonComponent } from './components/basic-components/delete-button/delete-button.component';
import { GenericButtonComponent } from './components/basic-components/generic-button/generic-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MenuComponent,
    AwardsTimelineComponent,
    AwardsPageComponent,
    DeleteButtonComponent,
    GenericButtonComponent
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
export class AppModule { }
