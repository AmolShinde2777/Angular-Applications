import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from '../component/movie-list/movie-list.component';
import { HomeComponent } from '../component/home/home.component';


const routes: Routes = [
    
  { path: 'home-page', component: HomeComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: '**', redirectTo: 'home-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }