import { combineReducers } from "redux";

import user from "./user/reducer";
import cart from "./cart/reducer";

export default combineReducers({
  user,
  cart,
});
