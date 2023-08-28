import { FETCH_START } from "../utils/action.types";
import { FETCH_SUCCESS } from "../utils/action.types";
import { FETCH_ERROR } from "../utils/action.types";

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

const projectDetailsReducer = (state = initialState, action: any): ProjectsState => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true, error: null };
    case FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default projectDetailsReducer;
