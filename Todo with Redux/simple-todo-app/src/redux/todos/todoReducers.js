import {
  ADDED,
  ALL_COMPLETED,
  COLOR_SELECTED,
  COMPLETED_CLEARED,
  DELETED,
  TOGGLED,
} from "./actionType";
import { initialState } from "./initialState";

function nextTodo(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

const TodoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodo(state),
          text: action.text,
          completed: false,
        },
      ];

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case COLOR_SELECTED:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALL_COMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case COMPLETED_CLEARED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default TodoReducers;
