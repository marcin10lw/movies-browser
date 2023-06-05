import { Movie } from "../../common/types";

export type PeopleQueryKey = ["people", { page: number; query: string | null }];

export type Person = {
  id: number;
  name: string;
  profile_path: string;
};

export type PeopleApiResponse = {
  results: Person[];
  total_pages: number;
  total_results: number;
};

export type ActorInfo = {
  profile_path: string;
  name: string;
  birthday: string;
  place_of_birth: string;
  biography: string;
};

export type PersonDetailsApiResponse = {
  actorInfo: ActorInfo;
  moviesCast: Movie[];
  moviesCrew: Movie[];
};
