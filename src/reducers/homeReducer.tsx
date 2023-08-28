import { FETCH_START } from "../utils/action.types";
import { FETCH_SUCCESS } from "../utils/action.types";
import { FETCH_ERROR } from "../utils/action.types";
import { HomeData } from "../utils/homeData.types";

interface HomeState {
  data: HomeData;
  loading: boolean;
  error: string | null;
}

const initialState: HomeState = {
  data: {} as HomeData,
  loading: false,
  error: null,
};

const homeReducer = (state = initialState, action: any): HomeState => {
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
