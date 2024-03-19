import { Component, Input } from '@angular/core';
import { Movie } from '../../course-material/types';
import { DecimalPipe } from '@angular/common';
import { EmphasizePipe } from '../emphasize.pipe';
import { WordcountDirective } from '../wordcount.directive';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [DecimalPipe, EmphasizePipe, WordcountDirective],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  @Input()
  movie!: Movie;
}
