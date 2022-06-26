import { USER_LOGGED_IN, USER_LOGOUT } from "../actions/actiontypes";

const intialState = {
  isLoggedIn: false,
  user: {},
};

export default function user(state = intialState, action) {
  if (action.type == USER_LOGGED_IN) {
    //console.log("hello");
    return {
      ...state,
      isLoggedIn: true,
      user: action.data,
    };
  } else if (action.type == USER_LOGOUT) {
    return {
      ...state,
      isLoggedIn: false,
      user: {},
    };
  }
  return state;
}
