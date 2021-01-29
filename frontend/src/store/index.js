import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import browseReducer from "./browse";
import {persistStore, persistCombineReducers} from 'redux-persist';
import localForage from "localforage";

import sessionReducer from './session';

const persistConfig = {
  key: 'root',
  storage: localForage,
}

const rootReducer = {
  session: sessionReducer,
  browse: browseReducer
};

const finalReducer = persistCombineReducers(persistConfig, rootReducer);

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default () => {
  const store = createStore(finalReducer, enhancer);
  const persistor = persistStore(store);
  return {persistor, store}
};
