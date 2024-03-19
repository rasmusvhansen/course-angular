import { Component, Input } from '@angular/core';
import { Movie } from '../../course-material/types';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  @Input()
  movie!: Movie;
}
