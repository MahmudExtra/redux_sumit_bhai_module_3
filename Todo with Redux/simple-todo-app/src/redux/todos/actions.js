import {
  ADDED,
  ALL_COMPLETED,
  COLOR_SELECTED,
  COMPLETED_CLEARED,
  DELETED,
  TOGGLED,
} from "./actionType";

export const addedTodo = (todoText) => ({
  type: ADDED,
  payload: todoText,
});

export const toggledTodo = (todoId) => ({
  type: TOGGLED,
  payload: todoId,
});

export const colorSelected = (color, todoId) => ({
  type: COLOR_SELECTED,
  payload: { color, todoId },
});

export const deletedTodo = (todoId) => ({
  type: DELETED,
  payload: todoId,
});

export const allCompleted = () => ({
  type: ALL_COMPLETED,
});

export const completedCleared = () => ({
  type: COMPLETED_CLEARED,
});
