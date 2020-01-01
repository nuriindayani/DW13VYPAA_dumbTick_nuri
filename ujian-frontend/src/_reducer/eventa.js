import { GET_EVENTA } from "../config/constants";

const initialState = {
  data: [],
  isLoading: false,
  error: false
};

export const events = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_EVENTA}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_EVENTA}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      };
    case `${GET_EVENTA}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
