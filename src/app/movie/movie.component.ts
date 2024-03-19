import { Component, Input } from '@angular/core';
import { Movie } from '../../course-material/types';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  @Input()
  movie!: Movie;
}
