import { combineReducers } from "redux";
import basket from "./basket";
import user from "./auth";

export const reducer = combineReducers({ basket, user });
