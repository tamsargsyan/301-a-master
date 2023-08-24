import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../reducers/homeReducer';

const store = configureStore({
  reducer: {
    homeData: homeReducer,
    // Add other reducers here
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;