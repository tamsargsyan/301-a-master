import {
  FETCH_PRIVACY_POLICY_START,
  FETCH_PRIVACY_POLICY_SUCCESS,
  FETCH_PRIVACY_POLICY_ERROR,
  OPEN_PRIVACY_POLICY,
  MODAL_NAME,
} from "../utils/action.types";
import { PrivactPolicy } from "../utils/api.types";

interface PrivacyPolicyState {
  data: PrivactPolicy;
  loading: boolean;
  error: string | null;
  privacyPolicy: {
    modal: boolean;
    privacy: null | string;
  };
  modalName: string;
}

const initialState: PrivacyPolicyState = {
  data: {} as PrivactPolicy,
  loading: false,
  error: null,
  privacyPolicy: {
    modal: false,
    privacy: null,
  },
  modalName: "",
};

const privacyPolicyReducer = (
  state = initialState,
  action: any
): PrivacyPolicyState => {
  switch (action.type) {
    case FETCH_PRIVACY_POLICY_START:
      return { ...state, loading: true, error: null };
    case FETCH_PRIVACY_POLICY_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_PRIVACY_POLICY_ERROR:
      return { ...state, loading: false, error: action.payload };
    case OPEN_PRIVACY_POLICY:
      return {
        ...state,
        privacyPolicy: {
          modal: action.payload.modal,
          privacy: action.payload.privacy,
        },
      };
    case MODAL_NAME:
      return {
        ...state,
        modalName: action.payload,
      };
    default:
      return state;
  }
};

export default privacyPolicyReducer;
