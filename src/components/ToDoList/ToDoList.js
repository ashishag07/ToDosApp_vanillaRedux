import "./ToDoList.css";
import { useSelector, useDispatch } from "react-redux";
import { todoActions, todoSelector } from "../../redux/reducers/todoReducer";
import {
  notificationActions,
  notificationSelector,
} from "../../redux/reducers/notificationReducer";

function ToDoList() {
  const todos = useSelector(todoSelector);
  const message = useSelector(notificationSelector);
  const dispatch = useDispatch();

  if (message) {
    setTimeout(() => {
      dispatch(notificationActions.reset());
    }, 2000);
  }
  return (
    <div className="container">
      {message && (
        <div class="alert alert-success" role="alert">
          {message}
        </div>
      )}
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>
            <button
              className="btn btn-warning"
              onClick={() => {
                dispatch(todoActions.toggle(index));
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
