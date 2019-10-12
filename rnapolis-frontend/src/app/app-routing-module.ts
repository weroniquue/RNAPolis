import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {AwardsPageComponent} from './components/award-section/awards-page/awards-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'award', component: AwardsPageComponent}
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
