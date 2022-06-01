import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from './reducer/getUsersReducer';
import logger from 'redux-logger';
import {combineReducers} from '@reduxjs/toolkit';
import searchInputReducer from './reducer/searchInputReducer';

const rootReducer = combineReducers({
  user: userReducer,
  searchInput: searchInputReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});
export default store;

export type AppDispatch = typeof store.dispatch;
