import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { MovieService } from '../movie.service';
import { Movie } from '../../course-material/types';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, debounceTime, filter, map, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [MovieComponent, ReactiveFormsModule, AsyncPipe],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css',
})
export class MovieSearchComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  query = new FormControl('');
  movies$!: Observable<Movie[]>;

  constructor(
    private readonly movieService: MovieService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    const query$ = this.query.valueChanges.pipe(
      debounceTime(200),
      filter(Boolean),
      filter((q) => q.length > 1),
      takeUntilDestroyed(this.destroyRef),
    );

    query$.subscribe((q) => this.router.navigate(['movies', q]));

    const routeSearch$ = this.route.paramMap.pipe(
      map((param) => param.get('query')),
      filter(Boolean),
    );

    this.movies$ = routeSearch$.pipe(
      switchMap((q) => this.movieService.search(q)),
    );
  }
}
