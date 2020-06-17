import { SET_CURRENT_USER } from "./types";

const storedUser = localStorage.getItem("user");
const INITIAL_STATE = {
  currentUser: storedUser ? JSON.parse(storedUser) : null,
};

export default (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_USER:
      localStorage.setItem("user", JSON.stringify(payload));
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
