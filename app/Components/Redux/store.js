import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./counterSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
  },
});
