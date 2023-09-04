import { useState } from "react";
import { apiService } from "../services/apiService";
import {
  FETCH_START,
  PROJECT_FETCH_ERROR,
  PROJECT_FETCH_START,
  PROJECT_FETCH_SUCCESS,
  FETCH_ABOUT_US_START,
  FETCH_ABOUT_US_SUCCESS,
  FETCH_ABOUT_US_ERROR,
} from "../utils/action.types";
import { FETCH_SUCCESS } from "../utils/action.types";
import { FETCH_ERROR } from "../utils/action.types";

export const fetchingHome = (data: string) => async (dispatch: any) => {
  dispatch({ type: FETCH_START });
  try {
    const response = await apiService.get(data);
    dispatch({ type: FETCH_SUCCESS, payload: response });
  } catch (error: any) {
    dispatch({ type: FETCH_ERROR, payload: error.message });
  }
};

export const fetchingProjects = (data: string) => async (dispatch: any) => {
  dispatch({ type: PROJECT_FETCH_START });
  try {
    const response = await apiService.get(data);
    dispatch({ type: PROJECT_FETCH_SUCCESS, payload: response });
  } catch (error: any) {
    dispatch({ type: PROJECT_FETCH_ERROR, payload: error.message });
  }
};

export const fetchingProjectDetails =
  (data: string) => async (dispatch: any) => {
    dispatch({ type: FETCH_START });
    try {
      const response = await apiService.get(data);
      dispatch({ type: FETCH_SUCCESS, payload: response });
    } catch (error: any) {
      dispatch({ type: FETCH_ERROR, payload: error.message });
    }
  };

export const fetchingAboutUs = (data: string) => async (dispatch: any) => {
  dispatch({ type: FETCH_ABOUT_US_START });
  try {
    const response = await apiService.get(data);
    dispatch({ type: FETCH_ABOUT_US_SUCCESS, payload: response });
  } catch (error: any) {
    dispatch({ type: FETCH_ABOUT_US_ERROR, payload: error.message });
  }
};

export const usePostRequest = (endpoint: string, data: Object) => {
  const [postLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postRequest = async () => {
    setLoading(true);
    try {
      await apiService.post(endpoint, data);
    } catch (err: any) {
      setError(err);
    }
    setLoading(false);
  };

  return { postRequest, postLoading, error };
};
