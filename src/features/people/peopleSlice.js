import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        people: [],
        loadingStatus: "loading",
    },
    reducers: {
        setPeople: (state, { payload: people }) => {
            state.people = people
        },
        setLoadingToSucces: state => {
            state.loadingStatus = "success";
        },
        setLoadingToFail: state => {
            state.loadingStatus = "fail";
        },
    },
});

export const { setPeople, setLoadingToSucces, setLoadingToFail } = peopleSlice.actions;
export const selectPeopleState = state => state.people;
export const selectPeople = state => selectPeopleState(state).people; 
export default peopleSlice.reducer;