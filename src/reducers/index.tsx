import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from './homeReducer';

const rootReducer = combineReducers({
  homeData: homeReducer,
  // reducers here
});

export default rootReducer;