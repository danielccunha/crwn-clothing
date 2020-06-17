import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "./types";
import { addItemToCart } from "./utils";

const INITIAL_STATE = {
  hidden: true,
  items: {},
};

export default (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, payload),
      };
    default:
      return state;
  }
};
