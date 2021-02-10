import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import localForage from "localforage";
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';

import sessionReducer from './session';
import cartReducer from "./cart";
import browseReducer from "./browse";
import splashReducer from "./splash";

const rootReducer = {
  session: sessionReducer,
  browse: browseReducer,
  cart: cartReducer,
  splash: splashReducer
};

const finalReducer = storage.reducer(combineReducers(rootReducer));
const engine = createEngine('my-save-key');
const storageWare = storage.createMiddleware(engine);

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk, storageWare);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger, storageWare));
}

const store = createStore(finalReducer, enhancer);
const load = storage.createLoader(engine);

load(store)
  .then((newState) => console.log('Loaded state:', newState))
  .catch(() => console.log('Failed to load previous state'));

export default store;
