import { HttpClient } from '@angular/common/http';
import { Movie, TMDBResult } from '../course-material/types';
import { MovieService } from './movie.service';
import { of } from 'rxjs';

const tmdbResult: TMDBResult = {
  results: [
    {
      id: 205321,
      overview: 'Sharks in tornados',
      poster_path: '/poster.jpg',
      release_date: '2013-07-11',
      title: 'Sharknado',
      vote_average: 3.922,
    },
  ],
  page: 1,
  total_pages: 1,
  total_results: 1,
};

const emptyTmdbResult: TMDBResult = {
  results: [],
  page: 1,
  total_pages: 1,
  total_results: 0,
};

const expectedVideos: Movie[] = [
  {
    id: 205321,
    title: 'Sharknado',
    description: 'Sharks in tornados',
    poster: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/poster.jpg',
    releaseYear: 2013,
    rating: 3.922,
    link: 'https://www.themoviedb.org/movie/205321',
  },
];

describe('MovieService', () => {
  let service: MovieService;
  let httpClient: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    httpClient = jasmine.createSpyObj<HttpClient>('httpClient', ['get']);
    service = new MovieService(httpClient);
  });

  it('should return empty list on no results', () => {
    httpClient.get.and.returnValue(of(emptyTmdbResult));
    service.search('grus').subscribe((movies) => {
      expect(movies.length).toBe(0);
    });
  });

  it('should call tmdb api with query', () => {
    // use calls.mostRecent.args[0] on the httpClient.get spy to retrieve the arguments
    httpClient.get.and.returnValue(of(emptyTmdbResult));
    service.search('grus').subscribe();
    expect(httpClient.get.calls.mostRecent().args[0]).toContain('query=grus');
  });

  it('should map tmdb result to list of videos', () => {
    httpClient.get.and.returnValue(of(tmdbResult));
    service.search('grus').subscribe((movies) => {
      expect(movies).toEqual(expectedVideos);
    });
  });
});
