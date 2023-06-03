import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genres: [],
  },
  reducers: {
    fetchGenres: () => {},
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
  },
});

export const { setGenres, fetchGenres } = genresSlice.actions;

const selectMoviesState = (state) => state.genres;
export const selectGenres = (state) => selectMoviesState(state).genres;

export const selectGenreByIds = (state, genreIds) => {
  const genres = selectGenres(state);
  let foundGenres = [];

  if (genres.length) {
    genreIds.forEach((genreId) => {
      const foundGenre = selectGenres(state).find(
        (genre) => genre.id === genreId
      );

      if (foundGenre) {
        foundGenres.push(foundGenre);
      }
    });
  }

  return foundGenres;
};

export default genresSlice.reducer;
