import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../reducers/homeReducer";
import projectReducer from "../reducers/projectReducer";
import projectDetailsReducer from "../reducers/projectDetailsReducer";
import languageDitactorReducer from "../reducers/languageReducer";
import aboutUsReducer from "../reducers/aboutUsReducer";
import privacyPolicyReducer from "../reducers/privacyPolicyReducer";
import expertProjectReducer from "../reducers/expertProjectReducer";
import authReducer from "../reducers/authReducer";

const store = configureStore({
  reducer: {
    homeData: homeReducer,
    projectData: projectReducer,
    projectDetails: projectDetailsReducer,
    languageDitactor: languageDitactorReducer,
    aboutUs: aboutUsReducer,
    privacyPolicy: privacyPolicyReducer,
    expertProject: expertProjectReducer,
    auth: authReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
