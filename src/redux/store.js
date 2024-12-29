import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/todoReducer";
import { notificationReducer } from "./reducers/notificationReducer";

export const store = configureStore({
  reducer: {
    todoReducer,
    notificationReducer,
  },
});
