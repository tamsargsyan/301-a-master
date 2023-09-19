import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../reducers/homeReducer";
import projectReducer from "../reducers/projectReducer";
import projectDetailsReducer from "../reducers/projectDetailsReducer";
import languageDitactorReducer from "../reducers/languageReducer";
import aboutUsReducer from "../reducers/aboutUsReducer";
import privacyPolicyReducer from "../reducers/privacyPolicyReducer";

const store = configureStore({
  reducer: {
    homeData: homeReducer,
    projectData: projectReducer,
    projectDetails: projectDetailsReducer,
    languageDitactor: languageDitactorReducer,
    aboutUs: aboutUsReducer,
    privacyPolicy: privacyPolicyReducer,
    // Add other reducers here
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
