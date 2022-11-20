import filterReducer from "./filters/filterReducer";
import TodoReducers from "./todos/todoReducers";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: TodoReducers,
  filters: filterReducer,
});
export default rootReducer;
