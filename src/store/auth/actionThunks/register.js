import { createAsyncThunk } from "@reduxjs/toolkit";
import { firebaseAuth } from "../../../configs/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (param, { rejectWithValue }) => {
    try {
      const credential = await createUserWithEmailAndPassword(
        firebaseAuth,
        param.emailAddress,
        param.password
      );
      return credential.user;
    } catch (error) {
      return rejectWithValue({
        message: error.code,
      });
    }
  }
);
