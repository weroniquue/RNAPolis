import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {AppComponent} from './app.component';
import {AwardsTimelineComponent} from './components/awards-timeline/awards-timeline.component';
import {DeleteButtonComponent} from './components/basic-components/delete-button/delete-button.component';
import {FooterComponent} from './components/basic-components/footer/footer.component';
import {GenericButtonComponent} from './components/basic-components/generic-button/generic-button.component';
import {HeaderComponent} from './components/basic-components/header/header.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {MenuComponent} from './components/basic-components/menu/menu.component';
import {PageNotFoundComponent} from './components/basic-components/page-not-found/page-not-found.component';
import {TeamPageComponent} from './components/team-page/team-page.component';
import {LoginComponent} from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {MainHeaderComponent} from './components/main-header/main-header.component';
import {ToolComponent} from './components/main-page/tools-utils/tool/tool.component';
import {MatDialogModule, MatIconModule, MatSelectModule} from '@angular/material';
import {ToolFilterPipe} from './components/main-page/tool-filter.pipe';
import {AddToolComponent} from './components/main-page/tools-utils/add-tool/add-tool.component';
import {ConfirmationDialogComponent} from './components/basic-components/confirmation-dialog/confirmation-dialog.component';
import {EditAwardsComponent} from './components/awards-timeline/edit-awards/edit-awards.component';
import {PublicationsPageComponent} from './components/publications-page/publications-page.component';
import {PublicationFormComponent} from './components/publications-page/publication-form/publication-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AwardsTimelineComponent,
    DeleteButtonComponent,
    FooterComponent,
    GenericButtonComponent,
    MainHeaderComponent,
    HeaderComponent,
    MainPageComponent,
    MenuComponent,
    PageNotFoundComponent,
    TeamPageComponent,
    LoginComponent,
    ToolComponent,
    TeamPageComponent,
    ToolFilterPipe,
    AddToolComponent,
    ConfirmationDialogComponent,
    EditAwardsComponent,
    PublicationsPageComponent,
    PublicationFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddToolComponent,
    ConfirmationDialogComponent,
    EditAwardsComponent,
    PublicationFormComponent
  ]
})
export class AppModule {
}
