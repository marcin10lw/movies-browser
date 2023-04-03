import { createSlice } from "@reduxjs/toolkit";

const actorSlice = createSlice({
  name: "actor",
  initialState: {
    actorDetails: {
      actorInfo: {},
      moviesCast: null,
      moviesCrew: null,
    },
    status: "idle",
  },
  reducers: {
    fetchActorDetails: (state) => {
      state.status = "loading";
    },
    fetchActorDetailsSuccess: (state, { payload: actorDetails }) => {
      state.actorDetails = actorDetails;
      state.status = "success";
    },
    fetchActorDetailsFail: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchActorDetails,
  fetchActorDetailsSuccess,
  fetchActorDetailsFail,
} = actorSlice.actions;

export const selectActorState = (state) => state.actor;
export const selectActorDetails = (state) =>
  selectActorState(state).actorDetails;
export const selectActorInfo = (state) => selectActorDetails(state).actorInfo;
export const selectActorMoviesCast = (state) =>
  selectActorDetails(state).moviesCast;
export const selectActorMoviesCrew = (state) =>
  selectActorDetails(state).moviesCrew;
export const selectActorPageStatus = (state) => selectActorState(state).status;

export default actorSlice.reducer;
