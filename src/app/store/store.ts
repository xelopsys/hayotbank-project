import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./features/userSlice";
import authSlice from "../features/authSlice";

export const store = configureStore({
	reducer: authSlice,
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
