import {createStore, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import {rootReducer } from "./reducers";
// import logger from "redux-logger";

const logger = createLogger();

// create a Redux store with the root reducer and logger middleware
export const store = createStore(rootReducer, applyMiddleware(logger));

// Define the root state and dispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


