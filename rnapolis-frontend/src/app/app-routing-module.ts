import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {TeamPageComponent} from "./components/team-page/team-page.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'team', component: TeamPageComponent}
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
