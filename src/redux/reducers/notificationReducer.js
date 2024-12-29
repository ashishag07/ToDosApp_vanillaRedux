import { createSlice } from "@reduxjs/toolkit";
import { todoActions } from "./todoReducer";

const initialState = {
  message: "",
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState: initialState,
  reducers: {
    reset: (state, action) => {
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(todoActions.add, (state, action) => {
      state.message = "New Todo is created...";
    });
  },
});

export const notificationReducer = notificationSlice.reducer;
export const notificationActions = notificationSlice.actions;
export const notificationSelector = (state) =>
  state.notificationReducer.message;
