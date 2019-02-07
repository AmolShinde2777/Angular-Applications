import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgencyListComponent } from './component/agency-list/agency-list.component';
import { HomePageComponent } from './component/home-page/home-page.component';

const routes: Routes = [
    
  { path: 'home-page', component: HomePageComponent },
  { path: 'agency-list', component: AgencyListComponent },
  { path: '**', redirectTo: 'home-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
