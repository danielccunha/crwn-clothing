import sections from "./data.json";

const INITIAL_STATE = {
  sections,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
