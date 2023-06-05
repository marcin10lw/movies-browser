import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { GenreIds, Genres } from "./types";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genres: [] as Genres,
  },
  reducers: {
    fetchGenres: () => {},
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
  },
});

export const { setGenres, fetchGenres } = genresSlice.actions;

const selectMoviesState = (state: RootState) => state.genres;
export const selectGenres = (state: RootState) =>
  selectMoviesState(state).genres;

export const selectGenreByIds = (state: RootState, genreIds: GenreIds) => {
  const genres = selectGenres(state);
  let foundGenres: Genres = [];

  if (genres.length) {
    genreIds.forEach((genreId) => {
      const foundGenre = genres.find((genre) => genre.id === genreId);

      if (foundGenre) {
        foundGenres.push(foundGenre);
      }
    });
  }

  return foundGenres;
};

export default genresSlice.reducer;
