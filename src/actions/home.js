import axios from "axios";
import { HOME_LOADED, HOME_ERROR } from "./types";

export const loadhome = () => async dispatch => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    dispatch({
      type: HOME_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: HOME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
