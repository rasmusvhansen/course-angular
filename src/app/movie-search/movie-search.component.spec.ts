import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { MovieSearchComponent } from './movie-search.component';
import { MovieService } from '../movie.service';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

describe('MovieSearchComponent', () => {
  let component: MovieSearchComponent;
  let fixture: ComponentFixture<MovieSearchComponent>;

  let movieService: jasmine.SpyObj<MovieService>;
  let router: jasmine.SpyObj<Router>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    router = jasmine.createSpyObj<Router>('router', ['navigate']);
    route = { paramMap: of() } as unknown as ActivatedRoute;
    movieService = jasmine.createSpyObj<MovieService>('movieService', [
      'search',
    ]);
    movieService.search.and.returnValue(of([]));
    await TestBed.configureTestingModule({
      imports: [MovieSearchComponent],
      providers: [
        { provide: MovieService, useValue: movieService },
        { provide: ActivatedRoute, useValue: route },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change route when field is filled with "shark"', fakeAsync(() => {}));
  it('should show error when field does not contain shark', fakeAsync(() => {}));
  it('should show error when field contains too many characters', fakeAsync(() => {}));

  function advanceFixture() {
    tick(500);
    fixture.detectChanges();
  }
});
