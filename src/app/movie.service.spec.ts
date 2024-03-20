import { HttpClient } from '@angular/common/http';
import { Movie, TMDBResult } from '../course-material/types';
import { MovieService } from './movie.service';

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

const videos: Movie[] = [
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

  it('should return empty list on no results', () => {});

  it('should call tmdb api with query', () => {
    // use calls.mostRecent.args[0] on the httpClient.get spy to retrieve the arguments
  });

  it('should map tmdb result to list of videos', () => {});
});
