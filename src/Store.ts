import rootReducer from "./Reducer/Index";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: rootReducer,
});
