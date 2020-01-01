import { GET_CATEGORIES } from "../config/constants";
import { POST_CATEGORIES } from "../config/constants";

import axios from "axios";

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
    payload: axios({
      method: "GET",
      url: "http://localhost:3003/api/v1/categories"
    })
  };
};

export const postCategories = () => {
  return {
    type: POST_CATEGORIES,
    payload: axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/categories"
    })
  };
};
