import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./homeReducer";
import projectReducer from "./projectReducer";
import projectDetailsReducer from "./projectDetailsReducer";
import languageDitactorReducer from "./languageReducer";
import aboutUsReducer from "./aboutUsReducer";
import privacyPolicyReducer from "./privacyPolicyReducer";

const rootReducer = combineReducers({
  homeData: homeReducer,
  projectData: projectReducer,
  projectDetails: projectDetailsReducer,
  languageDitactor: languageDitactorReducer,
  aboutUs: aboutUsReducer,
  privacyPolicy: privacyPolicyReducer,
});

export default rootReducer;
