import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";

import rootReducer from "./ducks/rootReducer";

const middleware = [logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
