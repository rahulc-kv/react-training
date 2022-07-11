import {
  configureStore,
  isRejectedWithValue,
  Middleware
} from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch } from 'react-redux';

import baseApi, { authApi } from '@services/api';
import rootReducer from './reducers';

export const rtkQueryErrorLogger: Middleware = () => next => action => {
  if (
    isRejectedWithValue(action) &&
    (action.payload.status === 401 ||
      action.payload?.message?.includes('"statusCode":401'))
  ) {
    // TODO: Need to confirm whether to do logout api call here
  }
  return next(action);
};

const middlewareGroup = [
  baseApi.middleware,
  authApi.middleware,
  rtkQueryErrorLogger
];

if (process.env.REACT_APP_DEVELOPMENT_ENV === 'dev') {
  middlewareGroup.push(createLogger({ collapsed: true, diff: true }));
}

export const store = configureStore({
  reducer: {
    rootReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewareGroup)
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
