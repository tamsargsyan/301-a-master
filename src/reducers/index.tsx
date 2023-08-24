import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./homeReducer";
import projectReducer from "./projectReducer";
import projectDetailsReducer from "./projectDetailsReducer";

const rootReducer = combineReducers({
  homeData: homeReducer,
  projectData: projectReducer,
  projectDetails: projectDetailsReducer,
});

export default rootReducer;
