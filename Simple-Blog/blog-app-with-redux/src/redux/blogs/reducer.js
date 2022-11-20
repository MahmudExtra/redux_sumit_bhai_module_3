import {
  AUTHOR_SELECT,
  CATEGORY_SELECT,
  CHANGE_BY_SEARCH,
} from "./actionTypes";
import initialState from "./initialState";

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_SELECT:
      return state.filter((cat) => cat.category === action.payload);

    case AUTHOR_SELECT:
      return state.filter((cat) => cat.author.includes(action.payload));

    case CHANGE_BY_SEARCH:
      return state.filter((cat) =>
        cat.title.toLowerCase().includes(action.payload.toLowerCase())
      );

    default:
      return state;
  }
};
export default blogReducer;
