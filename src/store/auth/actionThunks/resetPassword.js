import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendPasswordResetEmail } from "firebase/auth";
import { firebaseAuth } from "../../../configs/firebase";

export const resetPassword = createAsyncThunk(
  "auth/reset-password",
  async (emailAddress) => {
    const actionCodeSettings = {
      url: "http://localhost:3000/sign-in",
      handleCodeInApp: true,
    };

    await sendPasswordResetEmail(
      firebaseAuth,
      emailAddress,
      actionCodeSettings
    );
  }
);
