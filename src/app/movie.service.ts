import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, TMDBMovie, TMDBResult } from '../course-material/types';
import {
  getLink,
  getPosterPath,
  getQueryString,
} from '../course-material/dummydata';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private readonly httpClient: HttpClient) {}

  search(query: string): Observable<Movie[]> {
    return this.httpClient
      .get<TMDBResult>(getQueryString(query))
      .pipe(
        map((result) =>
          result.results.filter((r) => !!r.poster_path).map(toMovie),
        ),
      );
  }
}

function toMovie(m: TMDBMovie): Movie {
  return {
    id: m.id,
    rating: m.vote_average,
    description: m.overview,
    title: m.title,
    link: getLink(m),
    poster: getPosterPath(m),
    releaseYear: +(m.release_date?.slice(0, 4) ?? 1942),
  };
}
