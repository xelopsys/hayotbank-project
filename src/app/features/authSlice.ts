import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetCookie } from "../../components/Cookie/Cookies";
interface UserState {
	isAuthorized: boolean;
}

// The initial state of the user slice of the store. This is the state that will be used when the store is initialized.
const authSlice = createSlice({
	name: "isAuthorized",
	initialState: {
		isAuthorized: document.cookie
			? GetCookie("isAuthorized") === "true"
			: false,
	} as UserState,
	reducers: {
		login: (state, action: PayloadAction<boolean>) => {
			state.isAuthorized = action.payload;
		},
		logout: (state) => {
			state.isAuthorized = false;
		},
	},
});

export const { login, logout } = authSlice.actions;
export const setIsAuthorized = (state: UserState) => state.isAuthorized;
export default authSlice.reducer;
