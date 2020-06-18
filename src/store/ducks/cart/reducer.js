import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "./types";

const INITIAL_STATE = {
  hidden: true,
  items: {},
};

const addItemToCart = (items, item) => {
  const existentItem = items[item.id];

  return {
    ...items,
    [item.id]: {
      ...item,
      quantity: existentItem ? existentItem.quantity + 1 : 1,
    },
  };
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
