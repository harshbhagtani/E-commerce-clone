import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { reducer } from "../reducer";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
