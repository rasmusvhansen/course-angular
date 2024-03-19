import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { movies } from '../course-material/dummydata';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  movies = movies;
}
