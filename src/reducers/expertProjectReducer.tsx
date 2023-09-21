import {
  FETCH_EXPERT_PROJECT_START,
  FETCH_EXPERT_PROJECT_SUCCESS,
  FETCH_EXPERT_PROJECT_ERROR,
} from "../utils/action.types";

interface ExpertProjectState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ExpertProjectState = {
  data: {},
  loading: false,
  error: null,
};

const expertProjectReducer = (
  state = initialState,
  action: any
): ExpertProjectState => {
  switch (action.type) {
    case FETCH_EXPERT_PROJECT_START:
      return { ...state, loading: true, error: null };
    case FETCH_EXPERT_PROJECT_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_EXPERT_PROJECT_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default expertProjectReducer;
