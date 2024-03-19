import { Routes } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies/shark',
    pathMatch: 'full',
  },
  {
    path: 'movies/:query',
    component: MovieSearchComponent,
  },
];
