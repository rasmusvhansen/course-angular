import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
