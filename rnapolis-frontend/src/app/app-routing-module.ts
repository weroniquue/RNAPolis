import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {PageNotFoundComponent} from './components/basic-components/page-not-found/page-not-found.component';
import {AwardsPageComponent} from './components/award-section/awards-page/awards-page.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'award', component: AwardsPageComponent},
  {path: '', component: MainPageComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
