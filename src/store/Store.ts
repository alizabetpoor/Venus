import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from './reducer/getUsersReducer';
import logger from 'redux-logger';

const store = configureStore({
  reducer: userReducer,
  middleware: [thunk, logger],
});
export default store;
