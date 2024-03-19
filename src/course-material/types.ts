import { z } from 'zod';

export interface Movie {
  id: number;
  link: string;
  title: string;
  description: string;
  releaseYear: number;
  rating: number;
  poster: string | null;
}

export interface SearchResult {
  results: number;
  totalPages: number;
  page: number;
  movies: Movie[];
  query: string;
}

export type GenreResult = Omit<SearchResult, 'query'> & { query: number };

const TMDBMovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  overview: z.string(),
  release_date: z.string().optional(),
  vote_average: z.number(),
  poster_path: z.string().nullable(),
});

const TMDBResultSchema = z.object({
  page: z.number(),
  total_pages: z.number(),
  total_results: z.number(),
  results: z.array(TMDBMovieSchema),
});

const TMDBGenreSchema = z.object({
  genres: z.array(z.object({ id: z.number(), name: z.string() })),
});

export type TMDBMovie = z.infer<typeof TMDBMovieSchema>;
export type TMDBGenreResult = z.infer<typeof TMDBGenreSchema>;
export type TMDBResult = z.infer<typeof TMDBResultSchema>;
export type Genres = TMDBGenreResult['genres'];
