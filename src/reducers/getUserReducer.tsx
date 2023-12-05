import {
  GET_USER_ERROR,
  GET_USER_START,
  GET_USER_SUCCESS,
} from "../utils/action.types";

interface GetUserState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetUserState = {
  data: {},
  loading: false,
  error: null,
};

const getUserReducer = (state = initialState, action: any): GetUserState => {
  switch (action.type) {
    case GET_USER_START:
      return { ...state, loading: true, error: null };
    case GET_USER_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getUserReducer;
