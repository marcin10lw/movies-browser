export type GenreIds = number[];

export type Genres = {
  id: number;
  name: string;
}[];

export type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  genre_ids: GenreIds;
  credit_id?: string;
  character?: string;
  job?: string;
};
