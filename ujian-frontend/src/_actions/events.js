import { GET_EVENTS } from "../config/constants";
import { POST_EVENTS } from "../config/constants";

import axios from "axios";

export const getEvents = () => {
  return {
    type: GET_EVENTS,
    payload: axios({
      method: "GET",
      url: "http://localhost:3003/api/v1/eventAll"
    })
  };
};

export const postEvents = () => {
  return {
    type: POST_EVENTS,
    payload: axios({
      method: "POST",
      url: "http://localhost:3003/api/v1/events"
    })
  };
};
