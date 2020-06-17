import { TOGGLE_CART_HIDDEN } from "./types";

const INITIAL_STATE = {
  hidden: true,
};

export default (state = INITIAL_STATE, action = {}) => {
  const { type } = action;

  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};
