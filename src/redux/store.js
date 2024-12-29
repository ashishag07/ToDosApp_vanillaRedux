import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/todoReducer";
import { notificationReducer } from "./reducers/notificationReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";

export const store = configureStore({
  reducer: {
    todoReducer,
    notificationReducer,
  },
  middleware: [loggerMiddleware],
});
