import { FETCH_START } from "../utils/actionTypes";
import { FETCH_SUCCESS } from "../utils/actionTypes";
import { FETCH_ERROR } from "../utils/actionTypes";

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

const homeReducer = (state = initialState, action: any): ProjectsState => {
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

export default homeReducer;
