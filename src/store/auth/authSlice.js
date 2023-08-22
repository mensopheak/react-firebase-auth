import { createSlice } from "@reduxjs/toolkit";
import {
  registerCases,
  signInCases,
  signOutCases,
  resetPasswordCases,
} from "./extraReducers";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoading: false, error: null, user: null, isSignIn: false },
  reducers: {
    getLocalPersistenceAuth(state, action) {
      state.isSignIn = true;
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    registerCases(builder);
    signInCases(builder);
    signOutCases(builder);
    resetPasswordCases(builder);
  },
});

export const { getLocalPersistenceAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
