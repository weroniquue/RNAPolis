import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {PageNotFoundComponent} from './components/basic-components/page-not-found/page-not-found.component';
import {TeamPageComponent} from './components/team-page/team-page.component';
import {LoginComponent} from './components/login/login.component';
import {AwardsTimelineComponent} from './components/awards-timeline/awards-timeline.component';
import {PublicationsPageComponent} from './components/publications-page/publications-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MainPageComponent},
  {path: 'team', component: TeamPageComponent},
  {path: 'awards', component: AwardsTimelineComponent},
  {path: 'publications', component: PublicationsPageComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
