import { COLOR_CHANGED, STATUS_CHANGED } from "./actionTypes";

export const colorChanged = (color, changeType) => ({
  type: COLOR_CHANGED,
  payload: {
    color,
    changeType,
  },
});
export const statusChanged = (status) => ({
  type: STATUS_CHANGED,
  payload: {
    status,
  },
});
