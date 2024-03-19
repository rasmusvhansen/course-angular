import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { MovieService } from '../movie.service';
import { Movie } from '../../course-material/types';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, debounceTime, filter, map, switchMap, tap } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

const rickLidator: ValidatorFn = (control: AbstractControl<string>) =>
  control.value.match(/(rick)|(morty)|(astley)/gi)
    ? { rickLidator: true }
    : null;

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [MovieComponent, ReactiveFormsModule, AsyncPipe, JsonPipe],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css',
})
export class MovieSearchComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  query = new FormControl('', [rickLidator, Validators.maxLength(12)]);
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
      filter((q) => this.query.valid && q.length > 1),
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
