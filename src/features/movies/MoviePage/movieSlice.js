import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieDetails: {
      movieCast: null,
      movieCrew: null,
    },
    status: "idle",
  },
  reducers: {
    fetchMovieDetails: (state) => {
      state.status = "loading";
    },
    fetchMovieDetailsSuccess: (state, { payload: movieDetails }) => {
      state.movieDetails = movieDetails;
      state.status = "success";
    },
    fetchMovieDetailsError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
} = movieSlice.actions;

export const selectMovieState = (state) => state.movie;
export const selectMovieDetails = (state) =>
  selectMovieState(state).movieDetails;
export const selectMovieCast = (state) => selectMovieDetails(state).movieCast;
export const selectMovieCrew = (state) => selectMovieDetails(state).movieCrew;
export const selectMovieInfo = (state) => selectMovieDetails(state).movieInfo;
export const selectFetchingStatus = (state) => selectMovieState(state).status;

export default movieSlice.reducer;
