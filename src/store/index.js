import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./ducks/rootReducer";

const middleware = [logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
