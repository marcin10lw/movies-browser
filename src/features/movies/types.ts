import { GenreIds, Genres } from "../../common/types";

export type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  genre_ids: GenreIds;
};

export type MoviesApiResponse = {
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type MoviesQueryKey = [
  "movies",
  {
    page: number;
    query: string | null;
  }
];

export type MovieCast = {
  cast_id: number;
  profile_path: string;
  name: string;
  character: string;
  id: number;
}[];

export type MovieCrew = {
  credit_id: string;
  profile_path: string;
  name: string;
  job: string;
  id: number;
}[];

export type MovieInfo = {
  backdrop_path: string;
  poster_path: string;
  title: string;
  release_date: string;
  production_countries: {
    name: string;
    iso_3166_1: string;
  }[];
  genres: Genres;
  vote_average: number;
  vote_count: number;
  overview: string;
  original_title: string;
};

export type MovieDetails = {
  movieCast: MovieCast;
  movieCrew: MovieCrew;
  movieInfo: MovieInfo;
};
