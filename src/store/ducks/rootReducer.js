import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import user from "./user/reducer";
import cart from "./cart/reducer";
import directory from "./directory/reducer";
import shop from "./shop/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user,
  cart,
  directory,
  shop,
});

export default persistReducer(persistConfig, rootReducer);
