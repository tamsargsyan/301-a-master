import { useState } from "react";
import { apiService } from "../services/apiService";
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  PROJECT_FETCH_ERROR,
  PROJECT_FETCH_START,
  PROJECT_FETCH_SUCCESS,
  FETCH_ABOUT_US_START,
  FETCH_ABOUT_US_SUCCESS,
  FETCH_ABOUT_US_ERROR,
  FETCH_PRIVACY_POLICY_START,
  FETCH_PRIVACY_POLICY_SUCCESS,
  FETCH_PRIVACY_POLICY_ERROR,
  FETCH_EXPERT_PROJECT_START,
  FETCH_EXPERT_PROJECT_SUCCESS,
  FETCH_EXPERT_PROJECT_ERROR,
} from "../utils/action.types";

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

export const fetchingPrivacyPolicy =
  (data: string) => async (dispatch: any) => {
    dispatch({ type: FETCH_PRIVACY_POLICY_START });
    try {
      const response = await apiService.get(data);
      dispatch({ type: FETCH_PRIVACY_POLICY_SUCCESS, payload: response });
    } catch (error: any) {
      dispatch({ type: FETCH_PRIVACY_POLICY_ERROR, payload: error.message });
    }
  };

export const fetchingExpertProject =
  (data: string) => async (dispatch: any) => {
    dispatch({ type: FETCH_EXPERT_PROJECT_START });
    try {
      const response = await apiService.get(data);
      dispatch({ type: FETCH_EXPERT_PROJECT_SUCCESS, payload: response });
    } catch (error: any) {
      dispatch({ type: FETCH_EXPERT_PROJECT_ERROR, payload: error.message });
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
