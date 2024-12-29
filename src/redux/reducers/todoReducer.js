import { ADD_TODO, TOGGLE_TODO } from "../actions/todoAction";

const initialState = {
  todos: [
    { text: "Meeting at 9 AM", completed: true },
    { text: "Lunch at 2 PM", completed: false },
  ],
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((item, idx) => {
          if (idx === action.index) {
            item.completed = !item.completed;
          }
          return item;
        }),
      };
    default:
      return state;
  }
}
