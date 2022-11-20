import { combineReducers } from "redux";
import blogReducer from "./blogs/reducer";
// combineReducers
const rootReducer = combineReducers({
  blogs: blogReducer,
});
export default rootReducer;
