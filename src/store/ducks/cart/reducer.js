import omit from "lodash/omit";

import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM,
  INCREASE_ITEM,
} from "./types";

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
  const { items, hidden } = state;

  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !hidden };
    case ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(items, payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: omit(items, payload.id),
      };
    case DECREASE_ITEM:
      return {
        ...state,
        items:
          items[payload.id].quantity === 1
            ? omit(items, payload.id)
            : {
                ...items,
                [payload.id]: {
                  ...payload,
                  quantity: items[payload.id].quantity - 1,
                },
              },
      };
    case INCREASE_ITEM:
      return {
        ...state,
        items: {
          ...items,
          [payload.id]: {
            ...payload,
            quantity: items[payload.id].quantity + 1,
          },
        },
      };
    default:
      return state;
  }
};
