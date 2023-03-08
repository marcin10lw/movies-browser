import { createSlice } from "@reduxjs/toolkit";

const actorSlice = createSlice({
  name: "actor",
  initialState: {
    actorDetails: {
      actorInfo: {},
      moviesCast: [],
      moviesCrew: [],
    },
    status: "loading",
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
      state.status = "fail";
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
export const selectMoviesCast = (state) => selectActorDetails(state).moviesCast;
export const selectMoviesCrew = (state) => selectActorDetails(state).moviesCrew;
export const selectActorPageStatus = (state) => selectActorState(state).status;

export default actorSlice.reducer;
