import { PROJECT_FETCH_START } from "../utils/actionTypes";
import { PROJECT_FETCH_SUCCESS } from "../utils/actionTypes";
import { PROJECT_FETCH_ERROR } from "../utils/actionTypes";

interface ProjectsState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ProjectsState = {
  data: [],
  loading: false,
  error: null,
};

const projectReducer = (state = initialState, action: any): ProjectsState => {
  switch (action.type) {
    case PROJECT_FETCH_START:
      return { ...state, loading: true, error: null };
    case PROJECT_FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case PROJECT_FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default projectReducer;
