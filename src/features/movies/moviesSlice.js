import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: [],
    totalResults: 0,
    totalPage: 500,
    fetchingStatus: "idle",
  },
  reducers: {
    fetchGenres: () => {},
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
    fetchMovies: (state) => {
      state.fetchingStatus = "loading";
    },
    fetchMoviesSuccess: (state, { payload }) => {
      const { results, total_pages, total_results } = payload;
      state.movies = results;
      state.totalPage = total_pages;
      state.totalResults = total_results;

      if (total_results === 0) {
        state.fetchingStatus = "noResults";
      } else {
        state.fetchingStatus = "success";
      }
    },
    fetchMoviesError: (state) => {
      state.fetchingStatus = "fail";
    },
  },
});

export const {
  fetchMoviesSuccess,
  fetchMoviesError,
  setGenres,
  fetchMovies,
  fetchGenres,
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMoviesCurrentPage = (state) =>
  selectMoviesState(state).currentPage;
export const selectMoviesTotalPage = (state) =>
  selectMoviesState(state).totalPage;
export const selectMoviesTotalResults = (state) =>
  selectMoviesState(state).totalResults;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectFetchingStatus = (state) =>
  selectMoviesState(state).fetchingStatus;

export const selectGenreByIds = (state, genreIds) => {
  const genres = selectGenres(state);
  let foundGenres = [];

  if (genres.length > 0) {
    genreIds.forEach((genreId) => {
      const foundGenre = selectGenres(state).find(
        (genre) => genre.id === genreId
      );

      if (foundGenre) {
        foundGenres.push(foundGenre);
      }
    });

    return foundGenres;
  }

  return foundGenres;
};

export default moviesSlice.reducer;
