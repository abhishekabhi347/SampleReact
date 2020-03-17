import { HOME_LOADED, HOME_ERROR, HOMEVIEW_LOADED } from "../actions/types";
const initialState = {
  homes: [],
  home: {},
  loading: true,
  error: {}
};

export default function(home = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case HOME_LOADED:
      return {
        ...home,
        homes: payload,
        loading: false
      };
    case HOMEVIEW_LOADED:
      return {
        ...home,
        home: payload,
        loading: false
      };
    case HOME_ERROR:
      return {
        ...home,
        error: payload,
        loading: false
      };
    default:
      return home;
  }
}
