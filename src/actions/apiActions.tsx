import { apiService } from "../services/apiService";
import { FETCH_START } from "../utils/actionTypes";
import { FETCH_SUCCESS } from "../utils/actionTypes";
import { FETCH_ERROR } from "../utils/actionTypes";

// interface FetchStartAction {
//     type: ActionTypes.FETCH_START;
//   }

//   interface FetchSuccessAction {
//     type: ActionTypes.FETCH_SUCCESS;
//     payload: any[]; // Define the payload type
//   }

//   interface FetchErrorAction {
//     type: ActionTypes.FETCH_ERROR;
//     payload: string; // Define the payload type
//   }

export const fetching = () => async (dispatch: any) => {
  dispatch({ type: FETCH_START });

  try {
    const response = await apiService.getData();
    dispatch({ type: FETCH_SUCCESS, payload: response });
  } catch (error: any) {
    dispatch({ type: FETCH_ERROR, payload: error.message });
  }
};
