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
  DETAILS_PROJECT_FETCH_START,
  DETAILS_PROJECT_FETCH_SUCCESS,
  DETAILS_PROJECT_FETCH_ERROR,
  FETCH_PARTNERS_START,
  FETCH_PARTNERS_SUCCESS,
  FETCH_REGISTER_DATA_START,
  FETCH_REGISTER_DATA_SUCCESS,
  FETCH_REGISTER_DATA_ERROR,
  GMAIL_LOGIN_START,
  GMAIL_LOGIN_SUCCESS,
  GMAIL_LOGIN_ERROR,
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
    dispatch({ type: DETAILS_PROJECT_FETCH_START });
    try {
      const response = await apiService.get(data);
      dispatch({ type: DETAILS_PROJECT_FETCH_SUCCESS, payload: response });
    } catch (error: any) {
      dispatch({ type: DETAILS_PROJECT_FETCH_ERROR, payload: error.message });
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

export const fetchingPartners = (data: string) => async (dispatch: any) => {
  dispatch({ type: FETCH_PARTNERS_START });
  try {
    const response = await apiService.get(data);
    dispatch({ type: FETCH_PARTNERS_SUCCESS, payload: response });
  } catch (error: any) {
    dispatch({ type: FETCH_ABOUT_US_ERROR, payload: error.message });
  }
};

export const fetchingRegisterData = (data: string) => async (dispatch: any) => {
  dispatch({ type: FETCH_REGISTER_DATA_START });
  try {
    const response = await apiService.get(data);
    dispatch({ type: FETCH_REGISTER_DATA_SUCCESS, payload: response });
  } catch (error: any) {
    dispatch({ type: FETCH_REGISTER_DATA_ERROR, payload: error.message });
  }
};

export const fetchingGmail = (data: string) => async (dispatch: any) => {
  dispatch({ type: GMAIL_LOGIN_START });
  try {
    const response = await apiService.get(data);
    dispatch({ type: GMAIL_LOGIN_SUCCESS, payload: response });
  } catch (error: any) {
    dispatch({ type: GMAIL_LOGIN_ERROR, payload: error.message });
  }
};

export const usePostRequest = () => {
  const [postLoading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [response, setResponse] = useState<any>(null);

  const postRequest = async (endpoint: string, data: Object, headers: any) => {
    setLoading(true);
    try {
      await apiService.post(endpoint, data, setResponse, headers);
    } catch (err: any) {
      setError(err);
    }
    setLoading(false);
  };

  return { postRequest, postLoading, error, response };
};
