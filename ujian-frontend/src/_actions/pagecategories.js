import { GET_PAGECATEGORIES } from "../config/constants";

import axios from "axios";

export const getPagecategories = categoryid => {
  return {
    type: GET_PAGECATEGORIES,
    payload: axios({
      method: "GET",
      url: `http://localhost:3003/api/v1/category/${categoryid}/events`
    })
  };
};
