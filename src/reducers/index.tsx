import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./homeReducer";
import projectReducer from "./projectReducer";
import projectDetailsReducer from "./projectDetailsReducer";
import languageDitactorReducer from "./languageReducer";
import aboutUsReducer from "./aboutUsReducer";
import privacyPolicyReducer from "./privacyPolicyReducer";
import expertProjectReducer from "./expertProjectReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  homeData: homeReducer,
  projectData: projectReducer,
  projectDetails: projectDetailsReducer,
  languageDitactor: languageDitactorReducer,
  aboutUs: aboutUsReducer,
  privacyPolicy: privacyPolicyReducer,
  expertProject: expertProjectReducer,
  auth: authReducer,
});

export default rootReducer;
