import { createAsyncThunk } from "@reduxjs/toolkit";
import { firebaseAuth } from "../../../configs/firebase";
import {
  signInWithEmailAndPassword,
  browserLocalPersistence,
  setPersistence,
} from "firebase/auth";

export const signInUser = createAsyncThunk(
  "auth/sign-in",
  async (params, { rejectWithValue }) => {
    try {
      await setPersistence(firebaseAuth, browserLocalPersistence);
      const credential = await signInWithEmailAndPassword(
        firebaseAuth,
        params.email,
        params.password
      );
      return credential.user;
    } catch (error) {
      return rejectWithValue({ message: error.code });
    }
  }
);
