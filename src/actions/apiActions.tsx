import { apiService } from "../services/apiService";
import {
  FETCH_START,
  PROJECT_FETCH_ERROR,
  PROJECT_FETCH_START,
  PROJECT_FETCH_SUCCESS,
} from "../utils/actionTypes";
import { FETCH_SUCCESS } from "../utils/actionTypes";
import { FETCH_ERROR } from "../utils/actionTypes";

// interface FetchStartAction {
//     type: ActionTypes.FETCH_START;
//   }

//   interface FetchSuccessAction {
//     type: ActionTypes.FETCH_SUCCESS;
//     payload: any[]; // Define the payload type
//   }

//   interface FetchErrorAction {
//     type: ActionTypes.FETCH_ERROR;
//     payload: string; // Define the payload type
//   }

export const fetchingHome = (data: string) => async (dispatch: any) => {
  dispatch({ type: FETCH_START });
  try {
    const response = await apiService.getData(data);
    dispatch({ type: FETCH_SUCCESS, payload: response });
  } catch (error: any) {
    dispatch({ type: FETCH_ERROR, payload: error.message });
  }
};

export const fetchingProjects = (data: string) => async (dispatch: any) => {
  dispatch({ type: PROJECT_FETCH_START });
  try {
    const response = await apiService.getData(data);
    dispatch({ type: PROJECT_FETCH_SUCCESS, payload: response });
  } catch (error: any) {
    dispatch({ type: PROJECT_FETCH_ERROR, payload: error.message });
  }
};

export const fetchingProjectDetails =
  (data: string) => async (dispatch: any) => {
    dispatch({ type: FETCH_START });
    try {
      const response = await apiService.getData(data);
      dispatch({ type: FETCH_SUCCESS, payload: response });
    } catch (error: any) {
      dispatch({ type: FETCH_ERROR, payload: error.message });
    }
  };
