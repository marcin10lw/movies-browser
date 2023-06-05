export type GenreIds = number[];

export type Genres = {
  id: number;
  name: string;
}[];

export type MoviesQueryKey = [
  "movies",
  {
    page: number;
    query: string | null;
  }
];

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
