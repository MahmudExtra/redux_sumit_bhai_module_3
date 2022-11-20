import {
  AUTHOR_SELECT,
  CATEGORY_SELECT,
  CHANGE_BY_SEARCH,
} from "./actionTypes";

export const select_by_category = (category) => {
  return {
    type: CATEGORY_SELECT,
    payload: category,
  };
};

export const select_by_author = (author) => {
  return {
    type: AUTHOR_SELECT,
    payload: author,
  };
};

export const change_by_search = (text) => {
  return {
    type: CHANGE_BY_SEARCH,
    payload: text,
  };
};
