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
import { By } from '@angular/platform-browser';

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

  it('should change route when field is filled with "shark"', fakeAsync(() => {
    component.query.setValue('shark');
    advanceFixture();
    expect(router.navigate).toHaveBeenCalledWith(['movies', 'shark']);
  }));

  it('should show error when field does not contain shark', fakeAsync(() => {
    component.query.setValue('snark');
    component.query.markAsDirty();
    advanceFixture();
    expect(router.navigate).not.toHaveBeenCalled();

    expect(getErrorText()).toBe('Only search for shark related movies');
  }));

  it('should show error when field contains too many characters', fakeAsync(() => {
    component.query.setValue('snark snark 123456789');
    component.query.markAsDirty();
    advanceFixture();
    expect(router.navigate).not.toHaveBeenCalled();

    expect(getErrorText()).toBe(
      '21 characters is too damn long a query. Max is 12',
    );
  }));

  function getErrorText(): string {
    const error = fixture.debugElement.query(By.css('.error'));
    expect(error).toBeDefined();
    return error.nativeElement.innerText;
  }

  function advanceFixture() {
    tick(500);
    fixture.detectChanges();
  }
});
