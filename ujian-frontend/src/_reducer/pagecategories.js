import { GET_PAGECATEGORIES } from "../config/constants";

const initialState = {
  data: [],
  isLoading: false,
  error: false
};

export const pagecategories = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_PAGECATEGORIES}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_PAGECATEGORIES}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      };
    case `${GET_PAGECATEGORIES}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
