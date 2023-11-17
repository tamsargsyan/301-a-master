import {
  OPEN_DONATE_SINGLE_PROJECT,
  PROJECT_FETCH_START,
} from "../utils/action.types";
import { PROJECT_FETCH_SUCCESS } from "../utils/action.types";
import { PROJECT_FETCH_ERROR } from "../utils/action.types";

interface ProjectsState {
  data: any;
  loading: boolean;
  error: string | null;
  openModal: boolean;
}

const initialState: ProjectsState = {
  data: [],
  loading: false,
  error: null,
  openModal: false,
};

const projectReducer = (state = initialState, action: any): ProjectsState => {
  switch (action.type) {
    case PROJECT_FETCH_START:
      return { ...state, loading: true, error: null };
    case PROJECT_FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case PROJECT_FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    case OPEN_DONATE_SINGLE_PROJECT:
      return {
        ...state,
        openModal: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
