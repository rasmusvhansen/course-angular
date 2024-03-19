import { Component, OnInit } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { MovieService } from '../movie.service';
import { Movie } from '../../course-material/types';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [MovieComponent],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css',
})
export class MovieSearchComponent implements OnInit {
  movies!: Movie[];

  constructor(private readonly movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.search('not used');
  }
}
