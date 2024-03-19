import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../course-material/types';
import { movies } from '../course-material/dummydata';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private readonly httpClient: HttpClient) {}

  search(query: string): Movie[] {
    return movies;
  }
}
