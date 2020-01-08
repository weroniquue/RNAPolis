import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NotifierModule} from 'angular-notifier';
import {AppComponent} from './app.component';
import {AwardsTimelineComponent} from './components/awards-timeline/awards-timeline.component';
import {FooterComponent} from './components/basic-components/footer/footer.component';
import {GenericButtonComponent} from './components/basic-components/generic-button/generic-button.component';
import {HeaderComponent} from './components/basic-components/header/header.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {MenuComponent} from './components/basic-components/menu/menu.component';
import {PageNotFoundComponent} from './components/basic-components/page-not-found/page-not-found.component';
import {TeamPageComponent} from './components/team-page/team-page.component';
import {LoginComponent} from './components/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MainHeaderComponent} from './components/main-header/main-header.component';
import {ToolComponent} from './components/main-page/tools-utils/tool/tool.component';
import {
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSelectModule
} from '@angular/material';
import {ToolFilterPipe} from './components/main-page/tool-filter.pipe';
import {AddToolComponent} from './components/main-page/tools-utils/add-tool/add-tool.component';
import {ConfirmationDialogComponent} from './components/basic-components/confirmation-dialog/confirmation-dialog.component';
import {EditAwardsComponent} from './components/awards-timeline/edit-awards/edit-awards.component';
import {MemberManagerComponent} from './components/team-page/member-manager/member-manager.component';
import {PublicationsPageComponent} from './components/publications-page/publications-page.component';
import {PublicationFormComponent} from './components/publications-page/publication-form/publication-form.component';
import {JwtInterceptor} from './interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AwardsTimelineComponent,
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
    PublicationFormComponent,
    MemberManagerComponent
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
    MatIconModule,
    MatProgressSpinnerModule,
    NotifierModule.withConfig({
      behaviour: {
        autoHide: 5000,
      },
      position: {
        horizontal: {
          position: 'middle'
        },
        vertical: {
          position: 'bottom'
        }
      },
      theme: 'material'
    }),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddToolComponent,
    ConfirmationDialogComponent,
    EditAwardsComponent,
    MemberManagerComponent,
    PublicationFormComponent
  ]
})
export class AppModule {
}
