import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    totalResults: 0,
    totalPages: 500,
    fetchingStatus: "idle",
  },
  reducers: {
    fetchPeople: (state) => {
      state.fetchingStatus = "loading";
    },
    fetchPeopleSuccess: (state, { payload }) => {
      const { results, total_results, total_pages } = payload;
      state.people = results;
      state.totalResults = total_results;
      state.totalPages = total_pages;

      if (total_results === 0) {
        state.fetchingStatus = "noResults";
      } else {
        state.fetchingStatus = "success";
      }
    },
    fetchPeopleError: (state) => {
      state.fetchingStatus = "error";
    },
  },
});

export const { fetchPeopleSuccess, fetchPeopleError, fetchPeople } =
  peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectFetchingStatus = (state) =>
  selectPeopleState(state).fetchingStatus;
export const selectPeopleTotalPages = (state) =>
  selectPeopleState(state).totalPages;
export const selectPeopleTotalResults = (state) =>
  selectPeopleState(state).totalResults;

export default peopleSlice.reducer;
