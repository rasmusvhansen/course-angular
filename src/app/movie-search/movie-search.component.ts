import { Component } from '@angular/core';
import { movies } from '../../course-material/dummydata';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [MovieComponent],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css',
})
export class MovieSearchComponent {
  movies = movies;
}
