import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { text: "Meeting at 9 AM", completed: true },
    { text: "Lunch at 2 PM", completed: false },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push({ text: action.payload, completed: false });
    },
    toggle: (state, action) => {
      state.todos.map((todo, idx) => {
        if (idx === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
});

export const todoReducer = todoSlice.reducer;

export const todoActions = todoSlice.actions;

export const todoSelector = (state) => state.todoReducer.todos;
