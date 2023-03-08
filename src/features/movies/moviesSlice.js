import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: [],
    currentPage: 1,
    fetchingStatus: "loading",
  },
  reducers: {
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
    setFetchingToSucces: (state, { payload }) => {
      state.movies = payload.results;
      state.fetchingStatus = "success";
    },
    setFetchingToFail: (state) => {
      state.fetchingStatus = "fail";
    },
    fetchMovies: (state) => {
      state.fetchingStatus = "loading";
    },
    fetchGenres: () => {},
    updateMoviesCurrentPage: (state, { payload: currentPage }) => {
      state.currentPage = currentPage;
    },
  },
});

export const {
  setFetchingToSucces,
  setFetchingToFail,
  setGenres,
  fetchMovies,
  fetchGenres,
  updateMoviesCurrentPage,
} = moviesSlice.actions;

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMoviesCurrentPage = (state) =>
  selectMoviesState(state).currentPage;
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
