import { USER_LOGGED_IN, USER_LOGOUT } from "./actiontypes";

export function userLogin(data) {
  return {
    type: USER_LOGGED_IN,
    data,
  };
}
export function userLogout() {
  return {
    type: USER_LOGOUT,
  };
}
