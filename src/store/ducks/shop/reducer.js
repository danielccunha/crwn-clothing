import collections from "./data.json";

const INITIAL_STATE = {
  collections,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
