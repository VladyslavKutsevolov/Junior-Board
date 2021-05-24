import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import collectionReducer from './collectionsSlice';

export const store = configureStore({
  reducer: {
    collections: collectionReducer,
    links: collectionReducer
  },
  middleware: new MiddlewareArray().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
