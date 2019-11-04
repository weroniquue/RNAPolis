import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {PageNotFoundComponent} from './components/basic-components/page-not-found/page-not-found.component';
import {AwardsPageComponent} from './components/award-section/awards-page/awards-page.component';
import {TeamPageComponent} from './components/team-page/team-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MainPageComponent},
  {path: 'team', component: TeamPageComponent},
  {path: 'award', component: AwardsPageComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
